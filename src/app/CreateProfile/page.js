"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ErrorIcon from '@mui/icons-material/Error';
import DescriptionIcon from '@mui/icons-material/Description';
import { uploadResume } from "@/services/userService";

export default function CreateProfile() {
  const router = useRouter();
  const [file, setFile] = useState(null);
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];

    // Reset states
    setError(false);
    setSuccess(false);
    setStatus("");

    if (selectedFile) {
      // Validate file type
      if (selectedFile.type !== "application/pdf") {
        setError(true);
        setStatus("Please select a valid PDF file.");
        setFile(null);
        return;
      }

      // Validate file size (max 10MB)
      if (selectedFile.size > 10 * 1024 * 1024) {
        setError(true);
        setStatus("File size should be less than 10MB.");
        setFile(null);
        return;
      }

      setFile(selectedFile);
      setStatus(`Selected: ${selectedFile.name}`);
    }
  };

  const handleUpload = async () => {
    if (!file) {
      setError(true);
      setStatus("Please select a PDF file first.");
      return;
    }

    const formData = new FormData();
    formData.append("resume", file);

    setLoading(true);
    setError(false);
    setSuccess(false);
    setStatus("Uploading your resume...");

    try {
      const res = await uploadResume(formData);
      const data = res;
      // Success
      setSuccess(true);
      setError(false);
      setStatus("Upload successful! Redirecting to your portfolio...");

      // Store userId in localStorage
      if (data.data?.id) {
        localStorage.setItem("userId", data.data.id);
        console.log("Saved userId to localStorage:", data.data.id);
      }

      // Redirect to Dashboard after a short delay
      setTimeout(() => {
        router.push("/Profile");
      }, 500);

    } catch (err) {
      setError(true);
      setSuccess(false);
      setLoading(false);

      // Handle different error types
      if (err.message.includes("Failed to fetch")) {
        setStatus("Network error. Please check your internet connection and try again.");
      } else if (err.message.includes("500")) {
        setStatus("Server error. Please try again later.");
      } else if (err.message.includes("413")) {
        setStatus("File is too large. Please upload a smaller PDF.");
      } else {
        setStatus(`Upload failed: ${err.message}`);
      }

      console.error("Upload error:", err);
    }
  };

  return (
    <div className="min-h-[100vh] max-h-[100vh] flex flex-col items-center justify-center bg-gradient-to-br from-slate-900 via-orange-900 to-slate-900 text-orange-400 p-6 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-red-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="relative z-10 w-full max-w-md">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-full p-4 shadow-2xl shadow-orange-500/50">
              <DescriptionIcon sx={{ fontSize: 48, color: 'white' }} />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-3 text-white">
            Welcome to <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-400">SocialFolio</span>
          </h1>
          <p className="text-lg text-gray-300">
            Upload your resume to create an amazing portfolio
          </p>
          <p className="text-sm text-orange-400 mt-2">
            Created by Pratik Shinde
          </p>
        </div>

        {/* Upload Card */}
        <div className="bg-slate-900/50 backdrop-blur-xl border border-orange-500/30 rounded-2xl p-8 shadow-2xl shadow-orange-500/20">
          {/* File Input */}
          <div className="mb-6">
            <label
              htmlFor="file-upload"
              className="flex flex-col items-center justify-center w-full h-48 border-2 border-dashed border-orange-500/50 rounded-xl cursor-pointer bg-slate-800/50 hover:bg-slate-800/70 transition-all duration-300 hover:border-orange-400"
            >
              <div className="flex flex-col items-center justify-center pt-5 pb-6">
                <CloudUploadIcon sx={{ fontSize: 64, color: '#fb923c' }} className="mb-4" />
                <p className="mb-2 text-sm text-gray-300">
                  <span className="font-semibold">Click to upload</span> or drag and drop
                </p>
                <p className="text-xs text-gray-400">PDF files only (Max 10MB)</p>
              </div>
              <input
                id="file-upload"
                type="file"
                accept="application/pdf"
                onChange={handleFileChange}
                className="hidden"
                disabled={loading}
              />
            </label>
          </div>

          {/* Selected File Display */}
          {file && !error && (
            <div className="mb-6 p-4 bg-orange-500/10 border border-orange-500/30 rounded-lg flex items-center space-x-3">
              <DescriptionIcon sx={{ fontSize: 24, color: '#fb923c' }} />
              <div className="flex-1 min-w-0">
                <p className="text-sm text-white font-medium truncate">{file.name}</p>
                <p className="text-xs text-gray-400">{(file.size / 1024).toFixed(2)} KB</p>
              </div>
            </div>
          )}

          {/* Upload Button */}
          <button
            onClick={handleUpload}
            disabled={!file || loading}
            className={`w-full flex items-center justify-center space-x-2 px-6 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform ${!file || loading
              ? 'bg-gray-600 text-gray-400 cursor-not-allowed'
              : 'bg-gradient-to-r from-orange-500 to-red-500 text-white hover:from-orange-600 hover:to-red-600 hover:scale-105 hover:shadow-2xl hover:shadow-orange-500/50'
              }`}
          >
            {loading ? (
              <>
                <div className="w-6 h-6 border-3 border-white border-t-transparent rounded-full animate-spin"></div>
                <span>Uploading...</span>
              </>
            ) : (
              <>
                <CloudUploadIcon sx={{ fontSize: 24 }} />
                <span>Upload Resume</span>
              </>
            )}
          </button>

          {/* Status Messages */}
          {status && (
            <div className={`mt-6 p-4 rounded-lg flex items-start space-x-3 transition-all duration-300 ${error
              ? 'bg-red-900/20 border border-red-500/50'
              : success
                ? 'bg-green-900/20 border border-green-500/50'
                : 'bg-blue-900/20 border border-blue-500/50'
              }`}>
              {error && <ErrorIcon sx={{ fontSize: 24, color: '#ef4444' }} className="flex-shrink-0 mt-0.5" />}
              {success && <CheckCircleIcon sx={{ fontSize: 24, color: '#22c55e' }} className="flex-shrink-0 mt-0.5" />}
              {loading && !error && !success && (
                <div className="w-5 h-5 border-2 border-blue-500 border-t-transparent rounded-full animate-spin flex-shrink-0 mt-1"></div>
              )}
              <p className={`text-sm flex-1 ${error
                ? 'text-red-300'
                : success
                  ? 'text-green-300'
                  : 'text-blue-300'
                }`}>
                {status}
              </p>
            </div>
          )}

          {/* Instructions */}
          <div className="mt-6 pt-6 border-t border-orange-500/20">
            <p className="text-xs text-gray-400 text-center">
              Your resume will be automatically parsed to create your portfolio. Make sure it includes your work experience, skills, and projects.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}