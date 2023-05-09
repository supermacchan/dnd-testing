import css from './Kanban.module.css';
import { useState } from 'react';
import { kanbanData } from './data/kanbanData';

const Kanban = () => {
    const [boards, setBoards] = useState(kanbanData);
    const [currentBoard, setCurrentBoard] = useState(null);
    const [currentItem, setCurrentItem] = useState(null);

    const dragStartHandler = (e, item, board) => {
        setCurrentBoard(board);
        setCurrentItem(item);
    }

    const dragLeaveHandler = e => {
        e.target.style.boxShadow = 'none';
        e.target.style.transform = 'scale(1)';
    }
    
    const dragEndHandler = e => {
        e.target.style.boxShadow = 'none';
        e.target.style.transform = 'scale(1)';
    }
    
    const dragOverHandler = e => {
        e.preventDefault();

        if (e.target.className === `${css.item}`) {
            e.target.style.boxShadow = '0 2px 3px rosybrown';
            e.target.style.transform = 'scale(1.02)';
        }
    }
    
    const dropHandler = (e, item, board) => {
        e.preventDefault();

        e.target.style.boxShadow = 'none';
        e.target.style.transform = 'scale(1)';

        const currentIndex = currentBoard.items.indexOf(currentItem);
        currentBoard.items.splice(currentIndex, 1);

        const dropIndex = board.items.indexOf(item);
        board.items.splice(dropIndex, 0, currentItem);

        setBoards(boards.map(b => {
            if (b.id === board.id) {
                return board;
            }

            if (b.id === currentBoard.id) {
                return currentBoard;
            }

            return b;
        }))
    }

    const dropCardHandler = (e, board) => {
        if (e.target.className === `${css.item}`) {
            return;
        }

        board.items.push(currentItem);

        const currentIndex = currentBoard.items.indexOf(currentItem);
        currentBoard.items.splice(currentIndex, 1);

        setBoards(boards.map(b => {
            if (b.id === board.id) {
                return board;
            }

            if (b.id === currentBoard.id) {
                return currentBoard;
            }

            return b;
        }))
    }

    return (
        <section className={css.container}>
            {boards.map(board => 
                <div 
                    className={css.board} 
                    key={board.id}
                    onDragOver={e => dragOverHandler(e)}
                    onDrop={e => dropCardHandler(e, board)}
                >
                    <h2 className={css.title}>{board.title}</h2>
                    {board.items.map(item => 
                        <div 
                            className={css.item} 
                            key={item.id}
                            draggable={true}
                            onDragStart={e => dragStartHandler(e, item, board)}
                            onDragLeave={e => dragLeaveHandler(e)}
                            onDragEnd={e => dragEndHandler(e)}
                            onDragOver={e => dragOverHandler(e)}
                            onDrop={e => dropHandler(e, item, board)}
                        >
                            {item.title}
                        </div>
                    )}
                    
                </div>
            )}
        </section>
    )
}

export default Kanban;