

const gameLogic = {
    matched(pickedCards, cardArr) {
        const cardOne = cardArr[pickedCards[0]];
        const cardTwo = cardArr[pickedCards[1]];
        if (cardOne.num === cardTwo.num) {
            return true;
        } else return false;
    }
    
}


export default gameLogic;