'use client';
import { useSocket } from "@/context/SocketContext";
import Avatar from "./Avatar";
import { useUser } from "@clerk/nextjs";

const ListOnlineUsers = () => {
    const { user } = useUser();

    const { onlineUsers , handleCall } = useSocket();
  return (
    <div className="flex border-b border-b-primary/10 w-full itms-center pb-2">
      {onlineUsers && onlineUsers.map(onlineUser => {
            if (onlineUser.profile.id == user?.id) return null 
            return <div key={onlineUser.userId} onClick={()=> handleCall(onlineUser)} className="flex
           flex-col items-center gap-1 cursor-pointer">
            <Avatar src={onlineUser.profile?.imageUrl || "/default-avatar.png"} />
            <div className="text-sm">{onlineUser.profile?.fullName?.split(" ")[0] || "User"}</div>
          </div>
        })}
    </div>);
};

export default ListOnlineUsers;
