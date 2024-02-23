'use client';

import { motion } from 'framer-motion';

export default function ToastCard({ item, isActive }) {
  return (
    <div
      className={`bg-white rounded-md mx-auto border border-gray-100 overflow-hidden cursor-pointer hover:bg-gray-100 hover:border-gray-200 w-full ${
        isActive
          ? 'border-blue-400 outline outline-blue-600 outline-offset-1 hover:border-blue-300 hover:outline-none hover:bg-white'
          : ''
      }`}
    >
      <img
        src={item.image}
        alt={item.title}
        className={`w-full object-cover h-32`}
      />
      <div className={`p-3`}>
        <h2 className="text-sm font-medium">{item.title}</h2>
        <p className="text-xs mt-1 text-gray-500 line-clamp-2">
          {item.description}
        </p>
      </div>
    </div>
  );
}
