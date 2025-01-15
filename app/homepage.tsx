'use client';
import NavBar from "@/components/layout/NavBar";
import ListOnlineUsers from "@/components/ListOlineUsers";
import { useAuth, useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";

const HomePage = () => {
    const router = useRouter();
    const { userId } = useAuth();
    const { user } = useUser();

    return (
        <div className="min-h-screen bg-gray-50">
            <NavBar />
            <div className="flex">
                <main className="flex-1 p-6">
                    <h1 className="text-3xl font-bold text-gray-800">Bienvenue sur VidChat</h1>
                    <p className="mt-2 text-gray-600">
                        Connectez-vous avec vos amis et collègues grâce à des appels vidéo de haute qualité.
                    </p>
                    {/* Ajoutez ici d'autres sections ou fonctionnalités de la page d'accueil */}
                </main>
                <ListOnlineUsers />
            </div>
        </div>
    );
};

export default HomePage;