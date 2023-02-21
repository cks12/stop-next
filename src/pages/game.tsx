import ImageFieldsProps from "assets/images/fieldsImages";
import Button from "components/button";
import Card from "components/card";
import Popup from "components/popUp";
import { FormEvent, useState } from "react";
import { TbHandStop } from 'react-icons/tb';
import { ApplicationProps } from "types";

const Game = ({Application}: ApplicationProps) => {
    const [gameFields, setGameFields] = Application.useGameFields;
    function onSubmit(e: FormEvent<HTMLFormElement>){
        e.preventDefault();
        Application.finish_player(gameFields);
    }

    return <>
    {Application.ApplicationState.game?.isGaming && 
    <>
    <div className="h-auto w-screen mt-10 flex mb-20 justify-center px-4">
        <div className="bg-[#D9D9D9] shadow shadow-black max-w-2xl rounded-xl w-full flex items-center flex-col">
            <div className="title mt-7 flex text-center font-display font-bold text-[40px]">
                <h1>Letra:</h1><span className="capitalize">{` ${Application.ApplicationState.game?.letter}`}</span>
            </div>
            <form onSubmit={onSubmit} className="flex flex-col items-center" action="#">
                {
                    gameFields.map((item: any, index:number) => 
                        <Card key={index} index={index} setGameFields={setGameFields} config={item}/>)
                }
            <Button className="bg-[#56ED0F] flex items-center mb-5">
                <span className="mr-3">
                STOP
                </span>
                 <TbHandStop/></Button>
            </form>
        </div>
    </div>

    </>}
    </>
}

export default Game;