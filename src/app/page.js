"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function SocialFolio() {
  const router = useRouter(); // <- client-side router
  const [file, setFile] = useState(null);
  const [status, setStatus] = useState("");

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    if (!file) {
      setStatus("Please select a PDF first.");
      return;
    }

    const formData = new FormData();
    formData.append("resume", file);
    try {
      const res = await fetch(" https://social-folio-backend-api.onrender.com/api/resume/upload", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();

      if (!res.ok) {
        setStatus("Upload failed: " + (data.message || "Unknown error"));
      } else {
        setStatus("Upload successful! Resume ID: " + data.resumeId);

        // Store userId in localStorage
        if (data.data?.userId) {
          localStorage.setItem("userId", data.data.id);
          console.log("Saved userId to localStorage:", data.data.id);
        }

        // Redirect to Dashboard
        router.push("/Dashboard"); // <- correct client-side redirect
      }
    } catch (err) {
      setStatus("Error uploading resume: " + err.message);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black text-orange-400 p-6">
      <h1 className="text-4xl font-bold mb-4">Welcome to SocialFolio</h1>
      <p className="mb-6 text-lg text-orange-200">
        This is the portfolio created by Pratik Shinde.
      </p>

      <input
        type="file"
        accept="application/pdf"
        onChange={handleFileChange}
        className="mb-4 w-full max-w-xs file:bg-orange-500 file:text-black file:px-4 file:py-2 file:rounded-lg file:border-none file:cursor-pointer"
      />

      <button
        onClick={handleUpload}
        className="bg-orange-500 hover:bg-orange-600 text-black font-semibold px-6 py-2 rounded-lg transition-colors duration-200"
      >
        Upload Resume
      </button>

      {status && (
        <p className="mt-4 text-sm text-orange-300 text-center max-w-xs">{status}</p>
      )}
    </div>
  );
}
