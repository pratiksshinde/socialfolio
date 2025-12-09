"use client";

import {
  CircleCheckIcon,
  InfoIcon,
  Loader2Icon,
  OctagonXIcon,
  TriangleAlertIcon,
} from "lucide-react";
import { useTheme } from "next-themes";
import { Toaster as Sonner } from "sonner";

const Toaster = ({ ...props }) => {
  const { theme = "system" } = useTheme();

  return (
    <Sonner
      theme={theme}
      className="toaster group"
      icons={{
        success: <CircleCheckIcon className="size-4" />,
        info: <InfoIcon className="size-4" />,
        warning: <TriangleAlertIcon className="size-4" />,
        error: <OctagonXIcon className="size-4" />,
        loading: <Loader2Icon className="size-4 animate-spin" />,
      }}
      style={{
        /* Default toast */
        "--normal-bg": "#ffffff",
        "--normal-text": "#000000",
        "--normal-border": "#e5e7eb",

        /* SUCCESS */
        "--success-bg": "#10b981",
        "--success-border": "#0f9f72",
        "--success-text": "white",

        /* ERROR */
        "--error-bg": "#ef4444",
        "--error-border": "#dc2626",
        "--error-text": "white",

        /* WARNING */
        "--warning-bg": "#f59e0b",
        "--warning-border": "#d97706",
        "--warning-text": "white",

        /* INFO */
        "--info-bg": "#3b82f6",
        "--info-border": "#2563eb",
        "--info-text": "white",

        "--border-radius": "10px",
      }}
      {...props}
    />
  );
};

export { Toaster };
