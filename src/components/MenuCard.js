import React, { useState } from 'react';
import Order from './Order';
function MenuCard(props) {
    const [activeContentIndex, setActiveContentIndex] = useState();


    function testFunc() {
        setActiveContentIndex(props.id)
        console.log(activeContentIndex)
    }

    return (
        <div className='items' onClick={testFunc}>
            <img src={props.item_path} />
            <p className="name">{props.item_name}</p>
        </div>
    )
}

export default MenuCard