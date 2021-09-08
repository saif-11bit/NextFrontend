import React from 'react'
import { useRouter } from 'next/router'
import axiosInstance from '../utils/axiosApi'


function Logout() {
    const router = useRouter()

    const handleLogout = async(e) => {
        try {
            axiosInstance.post('/auth/logout/', {
                "refresh": localStorage.getItem("refresh_token")
            });
            axiosInstance.defaults.headers['Authorization'] = 'Bearer '+localStorage.getItem('access_token');

            localStorage.removeItem('access_token');
            localStorage.removeItem('refresh_token');
            axiosInstance.defaults.headers['Authorization'] = null;
            router.push('/')
        }
        catch (e) {
            console.log(e);
        }
    }
    return (
        <div>
            <button onClick={handleLogout}>Logout</button>
        </div>
    )
}

export default Logout
