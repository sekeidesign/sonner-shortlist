'use client';

import Image from 'next/image';

export default function ToastCard({ item, hasImage }) {
  return (
    <div className="bg-white rounded-md w-64 overflow-hidden shadow-lg">
      <img
        src={item.image}
        alt={item.title}
        className={`w-full h-20 object-cover rounded-t-sm ${
          hasImage ? '' : 'hidden'
        }`}
      />
      <div className="p-6">
        <h2 className="text-sm font-medium">{item.title}</h2>
        <p className="text-xs mt-2 text-gray-500">{item.description}</p>
      </div>
    </div>
  );
}
