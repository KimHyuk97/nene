package gogang.nene.menu;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import gogang.nene.domain.File;
import gogang.nene.domain.MenuImage;
import gogang.nene.utils.S3Utils;
import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class MenuImageService {

    private final S3Utils s3Utils;
    private static final String MENUDIR = "/menu";

    public List<MenuImage> create(List<MultipartFile> requestFiles) {

        List<File> files = s3Utils.uploadFiles(requestFiles, MENUDIR);

        return files.stream().map(MenuImage::new).collect(Collectors.toList());
    }

}
