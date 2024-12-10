'use client'
import CallNotification from "@/components/CallNotification";
import ListOlineUsers from "@/components/ListOlineUsers";
import VideoCall from "@/components/videoCall";

export default function Home() {
  return (
    <div>
      <ListOlineUsers/>
      <CallNotification/>
      <VideoCall/>
    </div>
  );
}
