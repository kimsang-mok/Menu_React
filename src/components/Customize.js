import './Customize.scss';
import { useParams } from 'react-router-dom';


const data = [{ item_name: 'Oleato™', item_path: './images/menu/Oleato™.jpg', id: 0, size: ['small', 'medium', 'large'] },
{ item_name: 'Hot Coffees', item_path: './images/menu/Hot Coffees.jpg', id: 1 },
{ item_name: 'Hot Teas', item_path: './images/menu/Hot Teas.jpg', id: 2 },
{ item_name: 'Hot Drinks', item_path: './images/menu/Hot Drinks.jpg', id: 3 },
{ item_name: 'Frappuccino® Blended Beverages', item_path: './images/menu/Frappuccino® Blended Beverages.jpg', id: 4 },]




function Customize() {



    const { id } = useParams();
    console.log(id)
    return (
        <>
            <h1>{id}</h1>
            <h2>Hi</h2>

        </>
    )
}


export default Customize
