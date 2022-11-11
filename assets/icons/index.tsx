import React from 'react';
import Logo from './Logo.png';
import Image from 'next/image';

const icons = {
    Logo: () => <Image className='Logo' alt={"Logo"} width={1080} height={920} src={Logo}/>
}

export default icons;