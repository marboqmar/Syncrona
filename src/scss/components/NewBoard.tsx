import React, { ReactElement, useState } from 'react';
import { Board } from './models';
import AddnewBoardButton from './NewBoardButton';
import BoardList from './BoardList';
import { useTranslation } from 'react-i18next';

const AddNewBoard = () => {
  const [board, setBoard] = useState<Board[]>([]);
  const createNewBoard = () => {
    const id = board.length + 1;
    const newBoard: Board = { cards: [], id };
    setBoard([...board, newBoard]);
  };

const setBoardTitle = (boardId: number, newTitle: string) =>{
  setBoard (prevBoards.map(board =>{
    if (board.id === boardId) {
      return {
        ...AddNewBoard,
        title:newTitle
      };
    }
    return board;
  }));
}

const setBoardCard = (boardId: number, newCard: Cards) =>{
  setBoard (prevBoards.map(board =>{
    if (board.id === boardId) {
      return {
        ...AddNewBoard,
        cards: [...board.cards, newCard]
      };
    }
    return board;
  }));
}


  const { t, i18n } = useTranslation(['common', 'list']);

  return (
    <>
      {board.map((Board) => (
        <div key={Board.id} className="List__Container">
          <BoardList boardInfo={board} />
        </div>
      ))}
      <div className="  List__Container margin__bottom__auto" style={{ display: 'inline-block' }}>
        <button style={{ width: '50%' }} onClick={createNewBoard} className="padding__0 ">
          {t('new board')}
        </button>
      </div>
    </>
  );
};

export default AddNewBoard;
