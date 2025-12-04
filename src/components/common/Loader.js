// Loader.js
"use client";

import React from "react";

function Loader() {
  return (
    <div className="flex items-center justify-center">
      <div className="w-10 h-10 border-4 border-t-orange-500 border-r-orange-500 border-b-transparent border-l-transparent rounded-full animate-spin"></div>
    </div>
  );
}

export default Loader;
