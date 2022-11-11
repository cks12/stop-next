import { GrFormClose, GrNext } from "react-icons/gr";
import { DetailedHTMLProps,ButtonHTMLAttributes, useMemo } from 'react';

interface OkayAndCancelBtnTypes extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    active: boolean
}

function OkayAndCancelBtn ({active, ...rest}:OkayAndCancelBtnTypes) {
    return useMemo( () => (<> 
    { 
      <button {...rest} className={`btn absolute 
        right-0 top-[20px] md:w-[68px] md:h-[68px] rounded-tl-none rounded-bl w-[60px] h-[60px] d-flex-row 
        ${active?'bg-green-500 hover:bg-green-300':'bg-red-500 onHover hover:bg-red-300'}
        `}>
        
        {active?
        <GrNext/>:
          <GrFormClose/>  
      }
      </button>
    }
    </>),[active]);
}

export default OkayAndCancelBtn;