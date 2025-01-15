'use client';
import { useSocket } from "@/context/SocketContext";
import Avatar from "./Avatar";
import { useUser } from "@clerk/nextjs";
import { Button } from "./ui/button";
import { motion, AnimatePresence } from "framer-motion"; // Importation des animations

const ListOnlineUsers = () => {
    const { user } = useUser();
    const { onlineUsers, handleCall } = useSocket();

    return (
        <motion.div
            initial={{ x: 300, opacity: 0 }} // Animation d'entrée
            animate={{ x: 0, opacity: 1 }} // Animation d'affichage
            exit={{ x: 300, opacity: 0 }} // Animation de sortie
            transition={{ type: "spring", stiffness: 100 }} // Transition fluide
            className="fixed top-30 right-0 h-[calc(100%-4rem)] w-80 bg-white shadow-2xl flex flex-col border-l border-gray-200 px-4 py-6 rounded-l-lg"
        >
            <h3 className="font-bold text-xl mb-6 text-gray-800">Utilisateurs en ligne</h3>
            <div className="overflow-y-auto flex-1">
                <AnimatePresence>
                    {onlineUsers && onlineUsers.map(onlineUser => {
                        if (onlineUser.profile.id === user?.id) return null;
                        return (
                            <motion.div
                                key={onlineUser.userId}
                                initial={{ opacity: 0, y: 20 }} // Animation d'entrée
                                animate={{ opacity: 1, y: 0 }} // Animation d'affichage
                                exit={{ opacity: 0, y: -20 }} // Animation de sortie
                                transition={{ duration: 0.3 }} // Transition fluide
                                className="flex items-center gap-4 mb-4 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200"
                            >
                                <Avatar 
                                    src={onlineUser.profile?.imageUrl || "/default-avatar.png"} 
                                />
                                <div className="flex-1 text-gray-800 font-medium">
                                    {onlineUser.profile?.fullName?.split(" ")[0] || "User"}
                                </div>
                                <Button 
                                    onClick={() => handleCall(onlineUser)} 
                                    className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-full text-sm shadow-md transition-all duration-200"
                                >
                                    Appeler
                                </Button>
                            </motion.div>
                        );
                    })}
                </AnimatePresence>
            </div>
        </motion.div>
    );
};

export default ListOnlineUsers;