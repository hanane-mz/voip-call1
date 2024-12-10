'use client'

import { useSocket } from "@/context/SocketContext"
import VideoContainer from "./videoContainer"
import { useCallback, useEffect, useState } from "react"
import { MdMic, MdMicOff, MdVideocam, MdVideocamOff } from "react-icons/md"

const VideoCall = () => {
  const { localStream ,peer,isCallEnded,ongoingCall, handleHangup } = useSocket();
  const [isMicOn, setIsMicOn] = useState(true);
  const [isVidOn, setIsVidOn] = useState(true);

  // Initialize mic and video states
  useEffect(() => {
    if (localStream) {
      const videoTrack = localStream.getVideoTracks()[0];
      const audioTrack = localStream.getAudioTracks()[0];

      // Set initial states
      if (videoTrack) setIsVidOn(videoTrack.enabled);
      if (audioTrack) setIsMicOn(audioTrack.enabled);
    }
  }, [localStream]);

  // Toggle camera
  const toggleCamera = useCallback(() => {
    if (localStream) {
      const videoTrack = localStream.getVideoTracks()[0];
      if (videoTrack) {
        videoTrack.enabled = !videoTrack.enabled;
        setIsVidOn(videoTrack.enabled);
      }
    }
  }, [localStream]);

  // Toggle mic
  const toggleMic = useCallback(() => {
    if (localStream) {
      const audioTrack = localStream.getAudioTracks()[0];
      if (audioTrack) {
        audioTrack.enabled = !audioTrack.enabled;
        setIsMicOn(audioTrack.enabled);
      }
    }
  }, [localStream]);

  const isOnCall = localStream && peer && ongoingCall ? true : false

  if(isCallEnded){
    return <div className="mt-5 text-rose-600 text-center">Call Ended</div>  
  }
  if(!localStream && !peer) return ;

  return (<div>
      <div className="mt-4 relative max-w-[800px] mx-auto">
        {localStream &&  <VideoContainer stream={localStream} isLocalStream={true} isOnCall={isOnCall} /> } 
        { peer && peer.stream && <VideoContainer stream={peer.stream} isLocalStream={false} isOnCall={isOnCall}/>}
      </div>
      <div className="mt-8 flex item-center justify-center ">
        {/* Mic Toggle */}
        <button onClick={toggleMic} >
          {isMicOn ? <MdMic size={28} /> : <MdMicOff size={28} />}
        </button>

        {/* End Call Button */}
        <button
          className="px-4 py-2 bg-rose-500 text-white rounded hover:bg-rose-600 transition"
          onClick={ ()=> handleHangup({ongoingCall: ongoingCall ? ongoingCall: undefined , isEmitHangup : true
           })} 
        >
          End Call
        </button>

        {/* Camera Toggle */}
        <button onClick={toggleCamera} className="p-2 rounded-full bg-gray-200 hover:bg-gray-300">
          {isVidOn ? <MdVideocam size={28} /> : <MdVideocamOff size={28} />}
        </button>
      </div>
    </div>
  );
};

export default VideoCall;
