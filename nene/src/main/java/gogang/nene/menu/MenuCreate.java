package gogang.nene.menu;

import java.util.ArrayList;
import java.util.List;

import org.springframework.web.multipart.MultipartFile;

import gogang.nene.domain.Category;
import gogang.nene.domain.Option;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;
import lombok.Data;

@Data
public class MenuCreate {
    @NotBlank(message = "메뉴 이름은 필수 값입니다.")
    private String name;

    @NotNull(message = "메뉴 카테고리는 필수 값입니다.")
    private Category category;

    @Min(value = 1000, message = "메뉴 가격은 1,000원 이상이여야합니다.")
    private long price;

    private String description;

    @NotEmpty(message = "메뉴 사진은 필수 값입니다.")
    private List<MultipartFile> files = new ArrayList<>();

    @NotEmpty(message = "메뉴 옵션은 필수 값입니다.")
    private List<Option> options = new ArrayList<>();
}
