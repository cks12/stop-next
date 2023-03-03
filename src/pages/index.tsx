import Button from 'components/button';
import Input from 'components/input';
import {GrLinkNext, GrSubtractCircle} from 'react-icons/gr';
import {CiUser} from 'react-icons/ci'
import { useState } from 'react';
import Modal from 'components/modal';
import { ApplicationProps } from 'types';

const inputStyle = "mt-3 shadow-sm rounded-[20px] pt-4 pb-4 font-title font-bold";
const contentStyle = "w-full shadow-lg rounded-[20px] shadow bg-[rgba(0,0,0,0.1)] px-10 py-10 max-w-xl text-center";
const containerStyle = "flex w-screen p-3 items-center justify-center mt-10";
const labelStyle = 'font-title text-[#FFF] text-[1.2rem] font-bold text-center';
const btnGroupStyle = 'mt-5 flex items-center justify-evenly md:justify-end';
const btnRoomStyle = "bg-[#0ADCF9] hover:bg-[#0EBAD1] text-black md:mr-4";
const btnNextStyle = "bg-[#56ED0F] hover:bg-[#4FC11A] mr-4";
const btnCancelStyle = "bg-[#ed0f0f] hover:bg-[#9f0909] text-white mr-4";
const owenerTextStyle = "mt-5 font-tile font-bold text-[#fff] text-[1.3rem]"

export default function Home({Application}: ApplicationProps) {
  const {ApplicationState, changePlayerName, changeReady} = Application;
  const [RoomModal, setRoomModal] = useState(false);
  function handleRoomModal(){
    setRoomModal(true);
  }

  return (
    <>
      <div className={containerStyle}>
        <div className={contentStyle}>
          <Input 
            disabled={ApplicationState.player?.isReady} 
            onChange={changePlayerName} 
            value={Application.playerName} 
            className={inputStyle} 
            id={'Name'} 
            placeholder='José'>
            <label className = {labelStyle} htmlFor='Name'>Digite como você deseja ser chamado</label>
          </Input>
          {
            ApplicationState.player?.isReady && <>
            <h3 className={owenerTextStyle}>Esperando os outros jogadores....</h3>
            <h3 className={owenerTextStyle}>{ApplicationState.msg}</h3>
            </>
          }
          {
            ApplicationState.player?.owner &&
              <h3 className={owenerTextStyle}>Você é o dono da sala!</h3>}
          <div className="flex items-center justify-center font-title font-semibold text-[20px] mt-2 text-[#fff]">
            <CiUser/>
            <div className="text">
              <span>{ApplicationState.limit}</span>
              /
              <span>{ApplicationState.players}</span>
            </div>
          </div>
         
      <div className={btnGroupStyle}>
      <Button onClick={handleRoomModal} className={btnRoomStyle}>Room 01</Button>
      <Button onClick={changeReady} className={ApplicationState.player?.isReady?btnCancelStyle:btnNextStyle}>
        {
          ApplicationState.player?.isReady?<GrSubtractCircle fontSize={'1.7rem'}/>:<GrLinkNext fontSize={'1.7rem'}/>
        }
      </Button>
      </div>
      </div>
    </div>

    <Modal isOpen={RoomModal} startGameFunc = {Application.owner_start_game} player={ApplicationState.player} players={ApplicationState.listPlayer} setClose={setRoomModal}></Modal>
    </>
  )
}