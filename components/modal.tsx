import React, { ReactNode } from "react";
import { AiOutlineCheckCircle, AiOutlineClose, AiOutlineExclamationCircle, AiOutlineUser } from 'react-icons/ai'
import { ModalProps, PlayerProps } from "types";



const modalContainerStyle =
  'fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50';
const modalContentStyle =
  'bg-white rounded-lg p-8 max-w-sm w-full mx-4 text-center';


const IsReady = () => {
  return <>
  </>
}
const Player: React.FC<PlayerProps> = ({player}) => {
  return( <>
  <li key={player.id} className="mb-2 bg-slate-800 flex items-center justify-center text-white rounded-lg py-2">
    <AiOutlineUser className="mr-1"/>
               {player.name} - 
               <div className="ml-1">
               {player.isReady? <AiOutlineCheckCircle color="green"/>:
               <AiOutlineExclamationCircle color='red'/>
               }

               </div>
    </li>
  </>)
}
const Modal = ({ isOpen, setClose, players, player, startGameFunc }: ModalProps) => {
  if(!player) return null;
  return (
    <>
      {isOpen && (
       <div className={modalContainerStyle}>
       <div className={modalContentStyle}>
         <h2 className="text-xl font-bold mb-4">Players</h2>
         <ul>
           {players.map((player,index) => (<Player key={index} player={player}/>)) }
         </ul>
         <button
           onClick={() => setClose(false)}
           className="mt-4 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
           Close
         </button>
         { player.owner &&
         <button
         onClick={startGameFunc}
         className="mt-4 ml-2 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
         Start
       </button>
         }

       </div>
     </div>
      )}
    </>
  );
};

export default Modal;