"use client";

import { useState } from "react";
import { API_URL } from "../../../config/apiUrl";
import toast from "react-hot-toast";


export const useRegister = () => {
    const [ loading, setLoading ] = useState(false);
    const [registerData, setRegisterData] = useState({
        name: "",
        email: "",
        password: "",
    });

    function handleChange(e) {
        const { name, value } = e.target;
        setRegisterData({
            ...registerData,
            [name]: value,
        });
    }

    async function handleSubmitRegister() {
        setLoading(true);
        const { name, email, password } = registerData;
        const res = await fetch(`${API_URL}/register`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name,
                email,
                password,
            }),
        });
        const data = await res.json();

        if (!data) {
            setLoading(false);
            toast.error("Registration unsuccessful. Please try again.");
            return;
        }
        setLoading(false);
        toast.success("Registration successful. Please login.");
        
    }

    return { loading, handleChange, handleSubmitRegister };
};
