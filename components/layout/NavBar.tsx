'use client';
import { Video } from "lucide-react";
import Container from "./Container";
import { useRouter } from "next/navigation";
import { useAuth, UserButton } from "@clerk/nextjs";
import { Button } from "../ui/button";

const NavBar = () => {
    const router = useRouter();
    const { userId } = useAuth();

    return (
        <div className="sticky top-0 w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-4 shadow-md">
            <Container>
                <div className="flex justify-between items-center ">
                    {/* Logo Section */}
                    <div
                        className="flex items-center gap-2 cursor-pointer" 
                        onClick={() => router.push('/')}
                    >
                        <Video className="w-7 h-7 text-white" />
                        <div className="font-bold text-2xl tracking-wide">VidChat</div>
                    </div>

                    {/* User Actions */}
                    <div className="flex gap-4 items-center">
                        <UserButton />
                        {!userId && (
                            <>
                                <Button
                                    onClick={() => router.push('/sign-in')}
                                    className="bg-white text-blue-600 px-4 py-2 rounded-full shadow-md"
                                    size="sm"
                                    variant="outline"
                                >
                                    Sign in
                                </Button>
                                <Button
                                    onClick={() => router.push('/sign-up')}
                                    className="bg-white text-blue-600 px-4 py-2 rounded-full shadow-md"
                                    size="sm"
                                >
                                    Sign up
                                </Button>
                            </>
                        )}
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default NavBar;
