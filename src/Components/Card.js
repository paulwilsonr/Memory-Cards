import './Card.css';
function Card ({num, id, addPickedCard, flipped}) {
    if(flipped) {
        return (
            <div
            className='card'
            id={id}
            onClick={(e) => {addPickedCard(e)}}
            >
                {num}
            </div>
        )
    } else {
        return (
            <div
            className='card'
            id={id}
            onClick={(e) => {addPickedCard(e)}}
            >
            </div>
        )
    }
    
}


export default Card;