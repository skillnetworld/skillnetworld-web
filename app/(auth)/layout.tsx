import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function AuthLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <main className="bg-slate-50 min-h-screen">
            <Navbar />
            <div className="flex items-center justify-center min-h-screen pt-32 pb-10 px-4 w-full">
                <div className="w-full flex justify-center">
                    {children}
                </div>
            </div>
            <Footer />
        </main>
    );
}
