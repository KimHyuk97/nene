package gogang.nene.menu;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import gogang.nene.domain.Menu;
import gogang.nene.domain.MenuImage;
import gogang.nene.domain.MenuOption;
import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class MenuService {

    private final MenuRepository menuRepository;
    private final MenuImageService menuImageService;

    @Transactional
    public void create(MenuCreate request) {
        Menu menu = Menu.of(request);

        request.getOptions().stream()
                .map(MenuOption::of)
                .collect(Collectors.toList())
                .forEach(o -> menu.addOptions(o));

        List<MenuImage> images = (menuImageService.create(request.getFiles()));
        images.forEach(i -> menu.addImage(i));

        menuRepository.save(menu);
    }

}