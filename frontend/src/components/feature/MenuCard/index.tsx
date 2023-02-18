import { Item } from "model/Item";
import { optionNaming } from "utils/utils";
import { Container } from "./styled";

const MenuCard = ({ item }: ItemType) => {
    return (
        <Container key={item.id}>
            <img src={item.image} alt="메뉴" />
            {
                item.options.length > 0 &&
                <div className="options">
                    {
                        item.options.map((o, i) => (
                            <span
                                key={i}
                                className={o.toLowerCase()}
                            >{optionNaming(o)}</span>
                        ))
                    }
                </div>
            }
            <div>
                <p className="title">{item.name}</p>
                <span className="discription">{item.discription}</span>
            </div>
        </Container>
    )
}

interface ItemType {
    item: Item
}

export default MenuCard;