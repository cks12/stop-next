import { Server } from 'socket.io'
import gameSocket from '../../utils/socket';

const SocketHandler = (req:any, res:any): void => {
  if(res.socket.server.io) {
    console.log('> Socket is already running');
    res.end();
    return;
  }
    console.log('> Socket is initializing');
    const socketGame = new gameSocket();
    const io = socketGame.MakeConnection(res.socket.server);
    res.socket.server.io = io;
    res.end();
    return;
}

export default SocketHandler