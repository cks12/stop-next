import '@/styles/globals.css'
import Layout from 'components/layout'
import Popup from 'components/popUp';
import type { AppProps } from 'next/app'
import Router from 'next/router';
import { ChangeEvent, useEffect, useState } from 'react';
import io,{ Socket } from "socket.io-client";
import { ApplicationStateProps, playerFinished } from 'types';

let socket: Socket | undefined = undefined;

const defaultGameFields = [
  {
      name:"animal",
      value: ""
  },
  {
      name:"color",
      value: ""
  },
  {
      name:"fruit",
      value: ""
  },
  {
      name:"place",
      value: ""
  },
  {
      name:"object",
      value: ""
  },
  {
      name:"name",
      value: ""
  },
]

export default function App({ Component, pageProps }: AppProps) {
  useEffect(()=> {
    socket = io();
    if(socket.active){
      fetch("/api/socket");
    } 
    socket.on('connect', () => {
      console.log('connected')
    });

    return () => {
      if (socket) {
        socket.disconnect();
        socket = undefined;
      }
    };
  },[]);


  const [ApplicationState, setApplicationState] = useState<ApplicationStateProps>({
    limit:'0',
    players:'0',
    player:undefined,
    listPlayer:[],
    playerFinished:[],
    game:undefined,
    msg:""
  });
  const [playerName, setPlayerName] = useState('');
  const useGameFields = useState(defaultGameFields);
  const [useMsg, setUseMsg] = useState<string[]>([]);


  function changePlayerName(e: ChangeEvent<HTMLInputElement>):void{
    const _name = e.target.value;
    setPlayerName(_name);
    if(!socket?.active) return;
    setApplicationState((prev:any) => ({...prev, player:{...prev.player, name:_name}}))
    socket.emit('onChangeName', _name);
  }

  function addMsg(msg: string){
    setUseMsg(prev=>([...prev, msg]));
  }

  function changeReady():void{
    if(ApplicationState.player?.name == "") return alert("Digite algum nome")
    const _ready = ApplicationState.player?.isReady;
    if(!socket) return;
    setApplicationState((prev:any) => ({...prev, player:{...prev.player, isReady:!_ready}}));
    socket.emit('onChangeReady');
  }

  function owner_start_game(){
    if(!socket) return;
    socket.emit('onStartGame');
  }
  3000
  function finish_player(fields:any){
    if(!socket) return;
    socket.emit('OnPlayerFinished', fields);
    end_game();
  }

  async function end_game(){
    await Router.push('/end');
  }

  async function start_game(letter: string){
    await Router.push('/game');
    useGameFields[1]( defaultGameFields )
    console.log(letter);
    setApplicationState(prev => ({
      ...prev,
      game:{
        fields:[],
        isGaming: true,
        letter:letter,
        score:[],
      }
    }) )
  }

  function finished_player(player: playerFinished[]){
    setApplicationState(prev=> ({
      ...prev,
      playerFinished:player
    }));
  }

  useEffect(() => {

    if (!socket) {
      fetch('/socket');
      return
    };

    socket.on('alert',(msg)=> alert(msg));
    socket.on("player_finshed", finished_player)
    socket.on("start_game",(letter: string) => start_game(letter));
    socket.on("end_game",() => end_game());
    socket.on('msg_pop',(msg: string) => addMsg(msg));

    socket.on("application",([key,value]) => {
        setApplicationState((prevState:any) =>({
          ...prevState,
          [key]: value
        })
      );
      });
  }, [socket]);

  pageProps.Application  = {
    ApplicationState,
    changePlayerName,
    changeReady,
    finish_player,
    owner_start_game,
    playerName,
    useGameFields
  }

  return <>
  <Layout>
    <Component {...pageProps} />
  </Layout>
  {
    useMsg.map((msg,index) => <Popup message={msg} key={index}/>)
  }

  </>
}