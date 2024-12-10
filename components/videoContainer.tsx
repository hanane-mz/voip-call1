interface iVideoContainer{
    stream : MediaStream | null ;
    isLocalStream : boolean;
    isOnCall : boolean;
}
import { cn } from "@/lib/utils";
import { useEffect, useRef } from "react";
import { Stream } from "stream";

const VideoContainer = ({ stream,isLocalStream , isOnCall} : iVideoContainer) =>{
    const videoRef = useRef<HTMLVideoElement>(null)
     useEffect(()=>{
        if(videoRef.current && stream){
            videoRef.current.srcObject = stream
        }
     })

    return (<video className={cn("rounded border w-[800px]", isLocalStream && isOnCall && "w-[200px] h-auto absolute border-pink-500 border-2 ")} 
    ref={videoRef} autoPlay playsInline muted={isLocalStream}/>
    );
}
export default VideoContainer;