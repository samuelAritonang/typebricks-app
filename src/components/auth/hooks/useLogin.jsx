"use client";

import { useState } from "react";
import { API_URL } from "../../../config/apiUrl";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

export const useLogin = () => {
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const [loginData, setLoginData] = useState({
        email: "",
        password: "",
    });

    function handleChange(e) {
        const { name, value } = e.target;
        setLoginData({
            ...loginData,
            [name]: value,
        });
    }

    async function handleSubmitLogin() {
        setLoading(true);
        const { email, password } = loginData;
        const res = await fetch(`${API_URL}/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                email,
                password,
            }),
        });
        const data = await res.json();

        if (!data) {
            setLoading(false);
            toast.error("Login unsuccessful. Please try again.");
            return;
        }
        setLoading(false);
        toast.success("Login successfuly. Redirecting...");
        setTimeout(() => router.push("/dashboard"), 2000);
    }

    return { loading, handleChange, handleSubmitLogin };
};
