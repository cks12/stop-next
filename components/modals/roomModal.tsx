import { IoCloseCircleOutline } from 'react-icons/io5'
import { useDispatch } from 'react-redux';
import { selectRoomVisible } from '../../redux/app/modalsActions';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/app/store';

interface ButtonType extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    name: string,
    playerNumber: string | number,
    limit: string | number,
}
const Button = (props:ButtonType) => {
    return (<>
    <button {...props} className='rounded-sm mt-1 ml-1 bg-cyan-500 p-2 text-xl capitalize text-slate-50 font-semibold'>
        <span>{props.name} {props.playerNumber}/{props.limit}</span>
    </button>
    </>)
}

const RoomModal = () => {

    const application = useSelector(
        (state:RootState) => state.application
      );

      const { rooms } = application;

      const modals = useSelector(
        (state:RootState) => state.modals
      );

      const dispatch = useDispatch();

      function selectedRoom(index: number) {
        dispatch(selectRoomVisible());
      }

    return (<div className='fixed d-flex-col top-0 left-0 w-full h-full bg-black/30'>
        <div className=" rounded-2xl w-[90%] md:max-w-xl bg-slate-50 p-10">
            <header className='d-flex-row justify-between'>
            <h2 className='text-2xl font-bold'>Salas</h2>
            <button 
            onClick={() => dispatch(selectRoomVisible())}
            className='bg-red-500 p-[1px] text-3xl text-slate-50 rounded-full'>
            <IoCloseCircleOutline/>
            </button>
            </header>
            <main className='flex items-center justify-center flex-wrap mt-3'>
                {rooms.map((item,index) => (
                <Button name={item.name} onClick={() => selectedRoom(index)}
                    key={item.id}
                    limit={item.limit} 
                    playerNumber={item.playerNumber}></Button>))}
            </main>
        </div>
    </div>)
}

export default RoomModal;