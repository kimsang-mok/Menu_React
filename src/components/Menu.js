import MenuCard from "./MenuCard"
import "./Menu.scss"


const drinks = [
    { item_name: 'Oleato™', item_path: './images/menu/Oleato™.jpg', id: 0, size: ['small', 'medium', 'large'] },
    { item_name: 'Hot Coffees', item_path: './images/menu/Hot Coffees.jpg', id: 1 },
    { item_name: 'Hot Teas', item_path: './images/menu/Hot Teas.jpg', id: 2 },
    { item_name: 'Hot Drinks', item_path: './images/menu/Hot Drinks.jpg', id: 3 },
    { item_name: 'Frappuccino® Blended Beverages', item_path: './images/menu/Frappuccino® Blended Beverages.jpg', id: 4 },
    { item_name: 'Cold Coffees', item_path: './images/menu/Cold Coffees.jpg' },
    { item_name: 'Iced Teas', item_path: './images/menu/Iced Teas.jpg' },
    { item_name: 'Cold Drinks', item_path: './images/menu/Cold Drinks.jpg' },
]

const food = [
    { item_name: 'Hot Breakfast', item_path: './images/menu/Hot Breakfast.jpg' },
    { item_name: 'Oatmeal & Yogurt', item_path: './images/menu/Oatmeal & Yogurt.jpg' },
    { item_name: 'Bakery', item_path: './images/menu/Bakery.jpg' },
    { item_name: 'Lunch', item_path: './images/menu/Lunch.jpg' },
    { item_name: 'Snacks & Sweets', item_path: './images/menu/Snacks & Sweets.jpg' },
]

const atHomeCoffee = [
    { item_name: 'Whole Bean', item_path: './images/menu/Whole Bean.jpg' },
    { item_name: 'VIA® Instant', item_path: './images/menu/VIA® Instant.jpg' },
]

const merchandise = [
    { item_name: 'Cold Cups', item_path: './images/menu/Cold Cups.jpg' },
    { item_name: 'Tumblers', item_path: './images/menu/Tumblers.jpg' },
    { item_name: 'Mugs', item_path: './images/menu/Mugs.jpg' },
    { item_name: 'Other', item_path: './images/menu/Other.jpg' },
]

function Menu(props) {


    return (
        <main className="main_container">
            <div className="sidebar">
                <MenuCard nothingHere='hello' />
                <h4>Drinks</h4>
                <ul>
                    <li>Oleato</li>
                    <li>Hot Coffes</li>
                    <li>Hot Drinks Hot Coffees</li>
                    <li>Hot Teas</li>
                </ul>
                <h4>Foods</h4>
                <ul>
                    <li>Oleato</li>
                    <li>Hot Coffes</li>
                    <li>Hot Drinks</li>
                    <li>Hot Teas</li>
                </ul>
                <h4>Teas</h4>
                <ul>
                    <li>Oleato</li>
                    <li>Hot Coffes</li>
                    <li>Hot Drinks</li>
                    <li>Hot Teas</li>
                </ul>
            </div>
            <h2>Menu</h2>
            <section className="menu__item drinks">
                <h3>Drinks</h3>
                {drinks.map((item) => (
                    <>{MenuCard(item)}</>
                ))}
            </section>
            <section className="menu__item food">
                <h3>Food</h3>
                {food.map((item) => (
                    <>{MenuCard(item)}</>
                ))}
            </section>
            <section className="menu__item at-home">
                <h3>At Home Coffee</h3>
                {atHomeCoffee.map((item) => (
                    <>{MenuCard(item)}</>
                ))}
            </section>
            <section className="menu__item food">
                <h3>Merchandise</h3>
                {merchandise.map((item) => (
                    <>{MenuCard(item)}</>
                ))}
            </section>

        </main >
    )
}

export default Menu