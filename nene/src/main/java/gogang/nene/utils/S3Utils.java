package gogang.nene.utils;

import java.io.IOException;
import java.io.InputStream;
import java.net.URLEncoder;
import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Component;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.server.ResponseStatusException;

import com.amazonaws.services.s3.AmazonS3;
import com.amazonaws.services.s3.model.CannedAccessControlList;
import com.amazonaws.services.s3.model.DeleteObjectRequest;
import com.amazonaws.services.s3.model.GetObjectRequest;
import com.amazonaws.services.s3.model.ObjectMetadata;
import com.amazonaws.services.s3.model.PutObjectRequest;
import com.amazonaws.services.s3.model.S3Object;
import com.amazonaws.services.s3.model.S3ObjectInputStream;
import com.amazonaws.util.IOUtils;

import gogang.nene.domain.File;

import lombok.RequiredArgsConstructor;

@Component
@RequiredArgsConstructor
public class S3Utils {

    @Value("${cloud.aws.s3.bucket}")
    private String bucket;

    private final AmazonS3 amazonS3;

    /*
     * 다중 사진 업로드
     */
    public List<File> uploadFiles(List<MultipartFile> files, String dir) {

        if (files.isEmpty()) {
            return null;
        }

        List<File> fileList = new ArrayList<>();

        files.forEach(file -> {
            String fileName = createS3FileName(file.getOriginalFilename());
            ObjectMetadata objectMetadata = new ObjectMetadata();
            objectMetadata.setContentLength(file.getSize());
            objectMetadata.setContentType(file.getContentType());

            try (InputStream inputStream = file.getInputStream()) {
                amazonS3.putObject(new PutObjectRequest(bucket + dir, fileName, inputStream, objectMetadata)
                        .withCannedAcl(CannedAccessControlList.PublicRead));

                File fileDto = File.builder()
                        .type(file.getContentType())
                        .size(file.getSize())
                        .name(fileName)
                        .originalName(file.getOriginalFilename())
                        .build();

                fileList.add(fileDto);
            } catch (IOException e) {
                throw new ResponseStatusException(HttpStatus.INTERNAL_SERVER_ERROR, "파일 업로드에 실패했습니다.");
            }
        });

        return fileList;
    }

    /*
     * 사진 업로드
     */
    public File uploadFile(MultipartFile file, String dir) {

        if (file.isEmpty()) {
            return null;
        }

        String fileName = createS3FileName(file.getOriginalFilename());
        ObjectMetadata objectMetadata = new ObjectMetadata();
        objectMetadata.setContentLength(file.getSize());
        objectMetadata.setContentType(file.getContentType());

        try (InputStream inputStream = file.getInputStream()) {
            amazonS3.putObject(new PutObjectRequest(bucket + dir, fileName, inputStream, objectMetadata)
                    .withCannedAcl(CannedAccessControlList.PublicRead));
        } catch (IOException e) {
            throw new ResponseStatusException(HttpStatus.INTERNAL_SERVER_ERROR, "파일 업로드에 실패했습니다.");
        }

        return File.builder()
                .type(file.getContentType())
                .size(file.getSize())
                .name(fileName)
                .originalName(file.getOriginalFilename())
                .build();
    }

    /*
     * 파일명 랜덤 생성
     */
    private String createS3FileName(String fileName) {
        return UUID.randomUUID().toString().concat(getFileExtension(fileName));
    }

    /**
     * 파일 확장자 추출 메서드
     */
    private String getFileExtension(String fileName) {
        try {
            return fileName.substring(fileName.lastIndexOf("."));
        } catch (StringIndexOutOfBoundsException e) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "잘못된 형식의 파일(" + fileName + ") 입니다.");
        }
    }

    /*
     * s3 사진 삭제
     */
    public String deleteImage(String fileName, String dir) {
        amazonS3.deleteObject(new DeleteObjectRequest(bucket + dir, fileName));
        return fileName;
    }

    /*
     * 파일 다운로드
     */
    public ResponseEntity<byte[]> fileDownload(String file, String dir) throws IOException {
        S3Object o = amazonS3.getObject(new GetObjectRequest(bucket + dir, file));
        S3ObjectInputStream objectInputStream = ((S3Object) o).getObjectContent();

        byte[] bytes = IOUtils.toByteArray(objectInputStream);

        String fileName = URLEncoder.encode(file, "UTF-8").replaceAll("\\+", "%20");
        HttpHeaders httpHeaders = new HttpHeaders();
        httpHeaders.setContentType(MediaType.APPLICATION_OCTET_STREAM);
        httpHeaders.setContentLength(bytes.length);
        httpHeaders.setContentDispositionFormData("attachment", fileName);

        return new ResponseEntity<>(bytes, httpHeaders, HttpStatus.OK);
    }

}
