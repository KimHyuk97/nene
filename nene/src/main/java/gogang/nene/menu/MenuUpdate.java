package gogang.nene.menu;

import java.util.ArrayList;
import java.util.List;

import org.springframework.web.multipart.MultipartFile;

import gogang.nene.domain.Category;
import gogang.nene.domain.Option;
import jakarta.validation.constraints.NotNull;
import lombok.Data;

@Data
public class MenuUpdate {
    @NotNull(message = "메뉴 고유 번호는 필수 값입니다.")
    private Long id;
    private String name;
    private Category category;
    private long price;
    private String description;
    private List<Option> options = new ArrayList<>();
    private List<MultipartFile> files = new ArrayList<>();
}
