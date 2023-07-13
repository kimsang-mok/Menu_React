import { Link } from 'react-router-dom';

function MenuCard(props) {
    // const [activeContent, setActiveContent] = useState(false);

    return (
        <>
            <Link to={`/items/${props.id}`} className='items'>
                <img src={props.item_path} />
                <p className="name">{props.item_name}</p>
            </Link>
        </>
    )
}

export default MenuCard