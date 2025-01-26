import React from 'react';

export const UserHeader = () => {
  return (
    <div className="bg-gradient-to-r from-[#2277d9] to-[#5aa1ff] p-2 w-full rounded-t-lg">
      <div className="flex items-center space-x-3">
        <div className="w-12 h-12 rounded-lg border-2 border-white bg-[#D3E4FD] flex items-center justify-center text-vista-accent">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="w-8 h-8"
          >
            <circle cx="12" cy="8" r="5" />
            <path d="M20 21a8 8 0 1 0-16 0" />
          </svg>
        </div>
        <span className="text-white font-bold text-lg">Degen</span>
      </div>
    </div>
  );
};