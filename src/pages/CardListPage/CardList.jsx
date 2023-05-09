import css from './CardList.module.css';
import { useState } from 'react';

const CardList = () => {
    const [cardList, setCardList] = useState([
      { id: 1, order: 1, text: 'CARD #1' },
      { id: 2, order: 2, text: 'CARD #2' },
      { id: 3, order: 3, text: 'CARD #3' },
      { id: 4, order: 4, text: 'CARD #4' },
      { id: 5, order: 5, text: 'CARD #5' },
    ]);
    const [currentCard, setCurrentCard] = useState(null);
  
    const dragStartHandler = (e, card) => {
      // console.log('drag', card);
      setCurrentCard(card);
    }
  
    const dragEndHandler = e => {
      // return the original bg color
      e.target.style.background = 'transparent';
    }
  
    const dragOverHandler = e => {
      e.preventDefault();
      // highlight the card that we drag over
      e.target.style.background = 'darksalmon';
    }
  
    const dropHandler = (e, card) => {
      e.preventDefault();
      // console.log('drop', card);
  
      setCardList(cardList.map(c => {
        if (c.id === card.id) {
          return {...c, order: currentCard.order}
        }
  
        if (c.id === currentCard.id) {
          return {...c, order: card.order}
        }
  
        return c;
      }));
  
      // return the original bg color
      e.target.style.background = 'transparent';
    }
  
    // sorting cards function
    const sortCards = (a, b) => {
      if(a.order > b.order) {
        return 1;
      } else {
        return -1;
      }
    }
  
    return (
      <div className={css.container}>
        {cardList.sort(sortCards).map(card => 
            <div 
              key={card.id} 
              className={css.card}
              draggable={true}
              onDragStart={e => dragStartHandler(e, card)}
              onDragLeave={e => dragEndHandler(e)}
              onDragEnd={e => dragEndHandler(e)}
              onDragOver={e => dragOverHandler(e)}
              onDrop={e => dropHandler(e, card)}
            >
              {card.text}
            </div>
          )}
      </div>
    );
  }
  
  export default CardList;