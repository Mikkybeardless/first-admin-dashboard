import Board, {
  moveCard,
  moveColumn,
  removeCard,
  addCard,
} from "@asseinfo/react-kanban";
import "@asseinfo/react-kanban/dist/styles.css";
import useBoard from "../../stores/Board";
import "./Board.css";
import { RxCross2 } from "react-icons/rx";
import { IoMdAdd } from "react-icons/io";
import AddCardModal from "../addCardModal/AddCardModal";
import { useState } from "react";

const BoardPage = () => {
  const { board, setBoard } = useBoard();

  const handleColumnMove = (_card, source, destination) => {
    const updateBoard = moveColumn(board, source, destination);
    setBoard(updateBoard);
  };

  const handleCardMove = (_card, source, destination) => {
    const updateBoard = moveCard(board, source, destination);
    setBoard(updateBoard);
  };

  const getCardColumn = (card) => {
    const column = board.columns.filter((column) =>
      column.cards.includes(card)
    );
    return column[0];
  };

  const getGradient = (card) => {
    const column = getCardColumn(card);
    const title = column.title;
    if (title === "TODO") {
      return {
        background:
          "linear-gradient(65.35deg, rgba(65, 65, 65, 0.67) -1.72%,rgba(48, 189, 220) 163.5%)",
      };
    } else if (title === "Doing") {
      return {
        background:
          "linear-gradient(65.35deg, rgba(65, 65, 65, 0.67) -1.72%,rgba(220, 48, 48) 163.5%)",
      };
    } else if (title === "Completed") {
      return {
        background:
          "linear-gradient(65.35deg, rgba(65, 65, 65, 0.67) -1.72%,rgba(48, 220, 86) 163.5%)",
      };
    } else if (title === "Backlog") {
      return {
        background:
          "linear-gradient(65.35deg, rgba(65, 65, 65, 0.67) -1.72%,rgba(134, 48, 220) 163.5%)",
      };
    }
  };
  return (
    <div className='board-container'>
      <span>Trello Board</span>
      <Board
        allowAddColumn
        allowRenameColumn
        allowRemoveCard
        onCardDragEnd={handleCardMove}
        onColumnDragEnd={handleColumnMove}
        renderCard={(props) => (
          <div className='kanban-card' style={getGradient(props)}>
            <div className='dark'>
              <span>{props.title}</span>
              <button
                className='remove-btn'
                type='button'
                onClick={() => {
                  const updateBoard = removeCard(
                    board,
                    getCardColumn(props),
                    props
                  );
                  setBoard(updateBoard);
                }}
              >
                <RxCross2 color='white' size={15} />
              </button>
            </div>
            <span>{props.description}</span>
          </div>
        )}
        renderColumnHeader={(props) => {
          const [modalOpen, setModalOpen] = useState(false);

          const handleCardAdd = (title, detail) => {
            const card = {
              id: new Date().getTime(),
              title,
              description: detail,
            };
            const updateBoard = addCard(board, props, card);
            setBoard(updateBoard);
            setModalOpen(false);
          };

          return (
            <div className='column-header'>
              <span>{props.title}</span>

              <IoMdAdd
                onClick={() => setModalOpen(true)}
                color='white'
                size={25}
                title='Add Cart'
              />
              <AddCardModal
                handleCardAdd={handleCardAdd}
                visible={modalOpen}
                onClose={() => setModalOpen(false)}
              />
            </div>
          );
        }}
      >
        {board}
      </Board>
    </div>
  );
};

export default BoardPage;
