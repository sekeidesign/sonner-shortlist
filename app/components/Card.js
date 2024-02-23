'use client';

import { motion } from 'framer-motion';

export default function ToastCard({ item, isTiny, onEvent }) {
  return (
    <div
      className={`bg-white rounded-md mx-auto overflow-hidden cursor-pointer hover:bg-gray-50 w-full`}
    >
      <img
        src={item.image}
        alt={item.title}
        className={`w-full object-cover h-32`}
      />
      <div className={`${isTiny ? 'p-4' : 'p-3'}`}>
        <h2 className="text-sm font-medium">{item.title}</h2>
        <p className="text-xs mt-1 text-gray-500 line-clamp-2">
          {item.description}
        </p>
      </div>
    </div>
  );
}
