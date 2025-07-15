import { BackgroundBlurComponent } from "./background.ui";
import { Player } from '@lottiefiles/react-lottie-player';
import { useEffect, useState } from "react";
import loadingImg from '../../../public/images/loading.json'

export function SpinnerComponent (){
    const [visible, setVisible] = useState(true);


    if (!visible) return null;

    return (
        <div className="h-screen w-full fixed z-10 flex flex-col justify-center items-center"> 
            <div className="w-full flex h-full flex-col justify-center items-center z-10"> 
                {/* Lottie animation */}
                <Player
                    autoplay
                    loop
                    src={loadingImg}
                    style={{ height: '120px', width: '120px' }}
                />
            </div>
            <BackgroundBlurComponent 
                isBackground={true}
                isVisible={true}
            />
        </div>
    )
}