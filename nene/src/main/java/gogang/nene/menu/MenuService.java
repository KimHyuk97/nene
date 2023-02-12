package gogang.nene.menu;

import java.util.stream.Collectors;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import gogang.nene.domain.Menu;
import gogang.nene.domain.MenuOption;
import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class MenuService {

    private final MenuRepository menuRepository;
    private final MenuImageService menuImageService;

    @Transactional
    public void create(MenuCreate request) {
        Menu menu = Menu.toEntity(request);

        menu.addOptions(request.getOptions().stream()
                .map(MenuOption::toEntity)
                .collect(Collectors.toList()));

        menu.addImages(menuImageService.create(request.getFiles()));

        menuRepository.save(menu);
    }

}
