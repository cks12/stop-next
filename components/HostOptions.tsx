import { startGame } from "../redux/app/actions";
import animations from '../assets/animations';
import { AppDispatch } from "../redux/app/store";
import { applicationInterface } from "../type";

type HostOptionTypes = {
    dispatch:AppDispatch,
    application:applicationInterface
}

function HostOptions({dispatch,application}:HostOptionTypes){
    return <>
          <div className="d-flex-col items-end mt-4 text-end text-white text-xl">
          <span>
            Você é o host da sala, inicie quando você quiser
          </span>
          <button onClick={() => dispatch(startGame())} className='btn bg-green-600 mt-5'>START</button>
        </div>
      {
        application.gameStart &&
          <animations.Count/>}
    </>
  
}

export default HostOptions;