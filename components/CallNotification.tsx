import { useSocket } from "@/context/SocketContext";
import Avatar from "./Avatar";
import { MdCall, MdCallEnd } from "react-icons/md";

const CallNotification = () => {
  const { ongoingCall , handleJoinCall , handleHangup} = useSocket();
  if (!ongoingCall?.isRinging) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl shadow-lg p-6 w-[350px] flex flex-col items-center space-y-4">
        <div className="flex flex-col items-center">
          <Avatar
            src={
              ongoingCall.participants.caller.profile.imageUrl ||
              "/default-avatar.png"
            }
          />
          <h3 className="text-lg font-semibold text-gray-800">
            {ongoingCall.participants.caller.profile.fullName?.split(" ")[0] ||
              "User"}
          </h3>
          <p className="text-sm text-gray-500">Incoming call...</p>
        </div>
        <div className="flex gap-6">
          <button onClickCapture={()=> handleJoinCall(ongoingCall)} className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white hover:bg-green-600 transition" onClick={() => console.log("Call accepted")}
          ><MdCall size={28} /></button>
          <button 
          onClick={ ()=> handleHangup({ongoingCall: ongoingCall ? ongoingCall: undefined , isEmitHangup : true
          })} 
          className="w-12 h-12 bg-rose-500 rounded-full flex items-center justify-center text-white hover:bg-rose-600 transition" 
          ><MdCallEnd size={28} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CallNotification;
