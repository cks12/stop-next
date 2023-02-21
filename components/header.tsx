// Import Image Header
import Image from 'next/image';
import ImageHeader from '../assets/Logo.png';

// Styles
const headerStyle = ""
const containerStyle = "pl-10 pr-10 flex w-full items-center justify-center"
const imageStyle = "w-[313px] md:w-[600px] h-auto "

export default function Header () {
    return (<header className={headerStyle}>
        <div className={containerStyle}>
            <Image src={ImageHeader} alt={"Stop"} className={imageStyle}/>
        </div>
    </header>)
}