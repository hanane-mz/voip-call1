import Image from "next/image";
import { FaUserCircle } from "react-icons/fa";

const Avatar = ({ src, isOnline }: { src?: string; isOnline?: boolean }) => {
    return (
        <div className="relative inline-block">
            {/* Image ou Icône */}
            {src ? (
                <Image
                    src={src}
                    alt="Avatar"
                    className="rounded-full border border-gray-300"
                    height={40}
                    width={40}
                />
            ) : (
                <FaUserCircle
                    size={40}
                    className="text-gray-400 border border-gray-300 rounded-full"
                />
            )}

            {/* Indicateur en ligne */}
            {isOnline && (
                <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full" />
            )}
        </div>
    );
};

export default Avatar;
