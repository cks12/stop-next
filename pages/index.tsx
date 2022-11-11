import { AiOutlineUser } from 'react-icons/ai';
import Header from '../components/header';
import { useMemo, useState } from 'react'
import DefaultInput from '../components/inputs/default';
import { AppDispatch, RootState } from '../redux/app/store';
import { useDispatch } from 'react-redux';
import { changeIsReady, setName, SocketClient } from '../redux/app/actions';
import { useSelector } from 'react-redux';
import HostOptions from '../components/HostOptions';
import OkayAndCancelBtn from '../components/inputs/extra/okayAndCancelBtn';

const Home = () => {
  const application = useSelector(
    (state:RootState) => state.application
  );
  const dispatch:AppDispatch = useDispatch<any>();
  const [] = useState(() => {

  })
  useMemo(() => {
    console.log('tess');
    dispatch(SocketClient())
  },[]);


  return (
    <>
    <Header/>
    <main>
      <form onSubmit={(e)=> e.preventDefault()}>
      <div className="group">
      <DefaultInput 
        value={application.name}
        onChange={e=>dispatch(setName(e.target.value))}
        disabled={application.isReady}
        id='set-name'
        update={application.isReady} 
        className={`relative ${!application.isReady?'onActive onHover':''}`}
        placeholder="José" 
        label='Digite como você deseja ser chamado'>
          <OkayAndCancelBtn onClick={() => dispatch(changeIsReady())} active={!application.isReady}/>
        </DefaultInput>
        </div>
        <div className="btnGroup-row">
          <button className={`btn ${!application.isReady?'bg-cyan-400 hover:bg-cyan-100 onHover':'bg-gray-400/40 text-gray-800'}`}>
            {application.selectedRoom.name}
          </button>
          <button className="d-flex-row text-2xl border-b-2 border-gray-800 rounded-xl p-2 text-white">
            <AiOutlineUser/>
            {application.selectedRoom.playerNumber}/{application.selectedRoom.limit}
          </button>
        </div>
      </form>
    </main>
    {
      application.host &&
      <HostOptions application={application} dispatch={dispatch}/>
    }
    </>
  )
}

export default Home;