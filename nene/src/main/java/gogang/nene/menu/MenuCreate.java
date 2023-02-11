package gogang.nene.menu;

import java.util.ArrayList;
import java.util.List;

import org.springframework.web.multipart.MultipartFile;

import gogang.nene.domain.Category;
import gogang.nene.domain.Option;
import lombok.Data;

@Data
public class MenuCreate {
    private String name;
    private Category category;
    private long price;
    private String description;
    private List<MultipartFile> files = new ArrayList<>();
    private List<Option> options = new ArrayList<>();
}
