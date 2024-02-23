'use client';

import { motion } from 'framer-motion';

export default function ToastCard({ item, isTiny, onEvent }) {
  let startPosition = 0;
  const angleRange = 12;
  const randomAngle = Math.round(Math.random() * (angleRange * 2)) - angleRange;
  return (
    <motion.div
      drag="x"
      animate={{ rotateZ: [0, randomAngle] }}
      transition={{ delay: 0.1, duration: 0.3 }}
      dragConstraints={{ left: 0, right: 300 }}
      dragSnapToOrigin
      onDragStart={(_, info) => (startPosition = info.point.x)}
      onDragEnd={(_, info) => {
        info.point.x < startPosition - 400 && console.log('delete');
        // onEvent(item);
      }}
      className={`bg-white  rounded-md mx-auto overflow-hidden cursor-pointer ${
        isTiny ? 'hover:bg-gray-50 w-64' : 'shadow-lg mr-56 md:ml-72 w-32'
      }`}
    >
      <img
        src={item.image}
        alt={item.title}
        className={`w-full object-cover ${isTiny ? 'h-20' : 'h-12'}`}
      />
      <div className={`${isTiny ? 'p-4' : 'p-3'}`}>
        <h2 className="text-sm font-medium">{item.title}</h2>
        <p className="text-xs mt-1 text-gray-500 line-clamp-2">
          {item.description}
        </p>
      </div>
    </motion.div>
  );
}
