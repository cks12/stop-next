import Button from "components/button";
import Table from "components/table";
import { ApplicationProps, playerFinished } from "types";
import Router from 'next/router';
import Head from "next/head";

interface Props {
  players: playerFinished[];
}

const PlayersPage: React.FC<ApplicationProps> = ({Application}) => {
    const players:playerFinished[] = Application.ApplicationState.playerFinished;
    console.log(players.map(p=>(p.fields)));
    async function home(){
      await Router.push("/");
    }
  return (
    <>
    
    <Head>
      <title>Final Game</title>
    </Head>

    <div className="px-2 w-screen flex justify-center flex-col items-center">
      <div className="md:max-w-xl bg-[rgba(0,0,0,0.1)] shadow-lg px-2 md:px-10 py-2 max-w-2xl w-[99%] rounded-[20px]">

      <h1 className="text-white font-title text-xl text-center font-bold">Respostas</h1>
      {
        (players.length) &&
        <Table players={players}/>
      }
      </div>
      <Button onClick={home} className="bg-green-500 hover:bg-green-700 mt-10">Novo Jogo</Button>
    </div>
      </>
  );
};

export default PlayersPage;