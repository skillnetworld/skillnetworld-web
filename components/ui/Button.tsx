"use client";

import React from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

// Utility for class merging
function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

interface ButtonProps extends HTMLMotionProps<"button"> {
    variant?: "primary" | "secondary" | "outline" | "ghost" | "gradient";
    size?: "sm" | "md" | "lg";
    isLoading?: boolean;
}

const Button: React.FC<ButtonProps> = ({
    className,
    variant = "primary",
    size = "md",
    isLoading = false,
    children,
    disabled,
    ...props
}) => {
    const baseStyles = "inline-flex items-center justify-center rounded-lg font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-primary disabled:opacity-50 disabled:cursor-not-allowed";

    const variants = {
        primary: "bg-red-600 hover:bg-red-700 text-white shadow-lg shadow-red-500/30",
        secondary: "bg-slate-200 hover:bg-slate-300 text-slate-900",
        outline: "border-2 border-slate-800 text-slate-900 hover:border-red-600 hover:text-red-700 hover:bg-red-50",
        ghost: "text-slate-900 hover:text-red-600 hover:bg-red-50",
        gradient: "bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-500 hover:to-orange-500 text-white shadow-lg shadow-red-500/30",
    };

    const sizes = {
        sm: "px-3 py-1.5 text-sm",
        md: "px-5 py-2.5 text-base",
        lg: "px-8 py-3.5 text-lg",
    };

    return (
        <motion.button
            whileHover={{ scale: disabled || isLoading ? 1 : 1.02 }}
            whileTap={{ scale: disabled || isLoading ? 1 : 0.98 }}
            className={cn(baseStyles, variants[variant], sizes[size], className)}
            disabled={disabled || isLoading}
            {...props}
        >
            {isLoading ? (
                <span className="mr-2 animate-spin rounded-full h-4 w-4 border-b-2 border-current"></span>
            ) : null}
            {children as React.ReactNode}
        </motion.button>
    );
};

export default Button;
