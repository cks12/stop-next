// Styles
const footer = "bg-[#D9D9D9] w-full pt-2 pb-2 absolute bottom-0 flex flex-col items-center justify-center";
const text = "font-title font-bold text-[1rem]";

export default function Footer () {
    return (<footer className={footer}>
        <span className={text}>@caiofresneda.tech</span> 
        <span className={text}>Todos os direitos reservados</span>
    </footer>)
}