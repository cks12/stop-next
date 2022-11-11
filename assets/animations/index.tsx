import count from './countDown - Animation.json';
import Lottie, {Options} from 'react-lottie';

const contAnimation:Options = {
    animationData:count,
    autoplay:true,
    loop:false,
    rendererSettings:{
        preserveAspectRatio:"xMidYMid slice"
    },
}

const animations = {
    Count:() => <div className='absolute'>
        <Lottie options={contAnimation}/></div>
}

export default animations;