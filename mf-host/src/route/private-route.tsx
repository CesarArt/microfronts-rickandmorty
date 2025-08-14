import { useNavigate } from 'react-router-dom';
import useStorageToken from '../custom-hooks/use-storage-token';
import { useEffect, type JSX } from 'react';
import Navbar from '../components/navBar';

const PrivateRoute = ({ children }: { children: JSX.Element }) => {
    const navigate = useNavigate();

    const { userToken } = useStorageToken();

    useEffect(() => {
        if (userToken !== undefined) {
            if (!userToken) {
                navigate("/login");
            }
        }
    }, [navigate, userToken])

    return (
        <div className='w-full h-full'>
            <Navbar />
            <div className='bg-zinc-50 w-full h-[94dvh] overflow-auto'>
                {children}
            </div>
        </div>
    )
};

export default PrivateRoute;