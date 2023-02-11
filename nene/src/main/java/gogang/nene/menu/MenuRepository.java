package gogang.nene.menu;

import org.springframework.data.jpa.repository.JpaRepository;

import gogang.nene.domain.Menu;

public interface MenuRepository extends JpaRepository<Menu, Long> {

}
