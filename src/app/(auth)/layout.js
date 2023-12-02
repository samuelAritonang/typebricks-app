import React from "react";
import { AuthLayout } from "../../components/auth/components/AuthLayout";

export default function Layout({ children }) {
    return <AuthLayout>{children}</AuthLayout>;
}
