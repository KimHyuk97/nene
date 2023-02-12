package gogang.nene.domain;

import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class File {
    private String type;
    private long size;
    private String name;
    private String originalName;

    @Builder
    public File(String type, long size, String name, String originalName) {
        this.type = type;
        this.size = size;
        this.name = name;
        this.originalName = originalName;
    }
}