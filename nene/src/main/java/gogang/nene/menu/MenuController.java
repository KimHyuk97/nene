package gogang.nene.menu;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;

@RestController
@RequiredArgsConstructor
public class MenuController {

    private final MenuService menuService;

    @GetMapping("/menu/{id}")
    public void get(@PathVariable Long id) {
        System.err.println("menu get");
    }

    @GetMapping("/menu")
    public void list() {

    }

    @PostMapping("/menu")
    public void create(@Valid MenuCreate request) {
        menuService.create(request);
    }

    @PatchMapping("/menu")
    public void update(@Valid MenuUpdate request) {

    }

    @DeleteMapping("/menu/{id}")
    public void delete(@PathVariable Long id) {

    }
}
