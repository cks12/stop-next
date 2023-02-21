import ImageField, { ImageFieldKeys } from "assets/images/fieldsImages";
import Image from "next/image";
import React, { ChangeEvent } from "react";

interface cardInterface {
    config: {
        name: string;
        value: string;
    };
    index: number;
    setGameFields:(prev:any) => any;
}

const ContentStyle = "w-[91%] rounded h-[150px] md:px-10 py-[100px] gap-3 content-center grid grid-cols-3 items-center my-3 shadow-lg bg-[#D9D9D9]";
const ImageContentStyle = "col-span-1";
const InputContentStyle = "col-span-2";
const LabelInputStyle = "font-title font-bold capitalize text-[27px]";

const Card: React.FC<cardInterface> = (props) => {

    const __config = ImageField[props.config.name];
    
    if(__config == undefined)
        return null;

    function onChange(e:ChangeEvent<HTMLInputElement>){
        props.setGameFields((prev:any) => {
            prev[props.index].value = e.target.value;
            return [...prev];
        })
    }
    return <>
    <div className={ContentStyle}>
        <div className={ImageContentStyle}>
            <Image src={__config.image } height={150} alt={__config.description}/>
        </div>
        <div className={InputContentStyle}>
            <label
                className={LabelInputStyle}
                id={`label-${__config.displayName}`} 
                htmlFor={`id-${__config.displayName}`}>{__config.displayName}</label>
            <input 
                onChange={onChange}
                required
                value={props.config.value}
                placeholder="ABC"
                className="bg-[#AA5FFF] placeholder:text-[#fff] text-white outline-none max-w-[95%] px-2 rounded-[17px] text-[20px] py-3 md:py-3 md:text-[27px]" id={`id-${__config.displayName}`} type="text" />
        </div>
    </div>
    </>
}

export default Card;