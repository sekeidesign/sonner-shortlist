'use client';

import { motion } from 'framer-motion';

export default function ToastCard({ item, hasImage, onEvent }) {
  let startPosition = 0;
  return (
    <motion.div
      drag="x"
      dragConstraints={{ left: 0, right: 300 }}
      dragSnapToOrigin
      onDragStart={(_, info) => (startPosition = info.point.x)}
      onDragEnd={(_, info) => {
        info.point.x < startPosition - 400 && console.log('delete');
        // onEvent(item);
      }}
      className={`bg-white  rounded-md w-64 overflow-hidden cursor-pointer ${
        hasImage ? 'hover:bg-gray-50' : 'shadow-lg md:ml-40'
      }`}
    >
      <img
        src={item.image}
        alt={item.title}
        className={`w-full h-20 object-cover rounded-t-sm ${
          hasImage ? '' : 'hidden'
        }`}
      />
      <div className={`${hasImage ? 'p-6' : 'p-3'}`}>
        <h2 className="text-sm font-medium">{item.title}</h2>
        <p className="text-xs mt-2 text-gray-500">{item.description}</p>
      </div>
    </motion.div>
  );
}
