import Card from "./Card";
import uniqid from "uniqid";
import './CardContainer.css'
import { useState, useEffect } from "react";
import gameLogic from "./gameLogic";

function CardContainer({ addScore, score }) {

    const [pickedCardsIndex, setPickedCardsIndex] = useState([]);
    const [cardOrder, setCardOrder] = useState([]);
    const [matched, setMatched] = useState(0);


    const addPickedCard = (e) => {

        for (let i = 0; i < cardOrder.length; i++) {

            if (cardOrder[i].key === e.target.id) {
                if (!pickedCardsIndex.includes(i) && !cardOrder[i].flipped) {
                    setPickedCardsIndex(pickedCardsIndex.concat(i));
                    flipCard(i);
                }
                return;
            }
        }

    }


    function flipCard(cardIndex) {
        cardOrder[cardIndex].flipped = !cardOrder[cardIndex].flipped;

    }

    useEffect(() => {
        const cardArr = cardArrayCreator();
        setCardOrder(cardArr)
    }, [])

    useEffect(() => {
        if (pickedCardsIndex.length === 2) {


            if (gameLogic.matched(pickedCardsIndex, cardOrder)) {
                setMatched(matched + 1);
            } else {
                setTimeout(() => {
                    flipCard(pickedCardsIndex[0]);
                    flipCard(pickedCardsIndex[1]);
                    setPickedCardsIndex([])
                }, 500)
                
            }
            setPickedCardsIndex([]);
            addScore();
            
        }

        if(matched === 16) {
            window.alert(`You win in only ${score} turns`)
        }
    }, [pickedCardsIndex])

    return (
        <div id="cardContainer">
            
            {
                cardOrder.map((card) => {
                    return <Card
                        key={card.key}
                        id={card.key}
                        num={card.num}
                        flipped={card.flipped}
                        addPickedCard={addPickedCard}
                    />
                })
            }
        </div>
    )
}


function randomizeCards(cardArr) {
    let randomArr = [];

    let i = 0;
    while (i < cardArr.length) {
        let randomCardNum = Math.floor(Math.random() * cardArr.length);
        let chosenCard = cardArr.splice(randomCardNum, 1);
        randomArr = [...randomArr, chosenCard[0]]
    }
    return randomArr;
}

function cardArrayCreator() {
    let cardArr = [];
    for (let i = 0; i < 2; i++) {
        for (let j = 0; j < 16; j++) {
            let newCard = {
                key: uniqid(),
                num: j + 1,
                flipped: false
            }
            cardArr.push(newCard);
        }
    }

    cardArr = randomizeCards(cardArr);
    return cardArr;
}

export default CardContainer;