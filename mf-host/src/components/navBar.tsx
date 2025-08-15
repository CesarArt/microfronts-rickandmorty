import { useNavigate } from "react-router-dom";
import useStorageToken from "../custom-hooks/use-storage-token";
import { LogOut } from 'lucide-react';

export default function Navbar() {
    const { removeUserToken } = useStorageToken();
        const navigate = useNavigate();


    const signOutAction = () => {
        removeUserToken();
        navigate(`/`)
        window.location.reload();
    }

    return (
        <nav className="flex sticky w-full bg-white text-black h-18 px-8 justify-between">
            {/* Left */}
            <div className="flex gap-2 items-center">
                <p className="text-xl">Rick and Morty Universe</p>
            </div>
            {/* Right */}
            <div className="flex gap-2 items-center">
                <span className="flex gap-2 items-center cursor-pointer p-2 rounded-2xl bg-zinc-100 hover:opacity-70" onClick={signOutAction}>
                    <p className="text-sm text-gray-600">Log Out</p>
                    <LogOut size={14} />
                </span>
            </div>
        </nav>
    );
}
