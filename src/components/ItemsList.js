// function ItemsList({items}) {
//     return <ul>
//         {items.map(e => <Item/>)}
//     </ul>
// }

import React from 'react';
import Items from './Items';

function ItemsList({items}) {
    return (
        <div className='items-list'>
            {/* <ul>{items.map(e => <Items recipe={e.items}/>)}</ul> */}
            <div className="recipes">
                {items !== [] && items.map((item, idx) => <Items key={idx} recipe={item}/>)}
            </div>
        </div>
    );
}

export default ItemsList;