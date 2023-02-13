package gogang.nene.domain;

import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.FetchType;
import jakarta.persistence.Column;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Entity
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class MenuOption {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "menu_option_id")
    private Long id;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private Option options;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "menu_id")
    private Menu menu;

    @Builder
    public MenuOption(Long id, Option options, Menu menu) {
        this.id = id;
        this.options = options;
        this.menu = menu;
    }

    public static MenuOption of(Option options) {
        return MenuOption.builder()
                .options(options)
                .build();
    }

    public void addMenu(Menu menu) {
        this.menu = menu;
    }

}
