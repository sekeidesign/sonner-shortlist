'use client';

import { Toaster, toast } from 'sonner';
import { useState } from 'react';
import { data } from './data';
import ToastCard from './components/ToastCard';
import OutsideClickHandler from 'react-outside-click-handler';
import { motion } from 'framer-motion';

export default function Home() {
  const [shortlist, setShortlist] = useState([]);
  const [showShortlist, setShowShortlist] = useState(false);

  const deleteItem = (item) => {
    console.log(shortlist);
    setShortlist(shortlist.filter((i) => i !== item));
  };

  const addToShortlist = (item) => {
    setShortlist([...shortlist, item]);
    toast.custom(
      (t) => (
        <div>
          <ToastCard item={item} onEvent={deleteItem}></ToastCard>
        </div>
      ),
      {
        duration: 20000,
      }
    );
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="mb-32 grid gap-8 text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
        {data.map((item, index) => (
          <div key={index} onClick={() => addToShortlist(item)}>
            <ToastCard item={item} hasImage></ToastCard>
          </div>
        ))}
        {data.map((item, index) => (
          <div key={index} onClick={() => addToShortlist(item)}>
            <ToastCard item={item} hasImage></ToastCard>
          </div>
        ))}
        {data.map((item, index) => (
          <div key={index} onClick={() => addToShortlist(item)}>
            <ToastCard item={item} hasImage></ToastCard>
          </div>
        ))}
        {data.map((item, index) => (
          <div key={index} onClick={() => addToShortlist(item)}>
            <ToastCard item={item} hasImage></ToastCard>
          </div>
        ))}
        {data.map((item, index) => (
          <div key={index} onClick={() => addToShortlist(item)}>
            <ToastCard item={item} hasImage></ToastCard>
          </div>
        ))}
      </div>
      <Toaster position="bottom-right" visibleToasts={5} offset={80} />
      <div className="fixed bottom-4 right-4">
        <button
          className="bg-gray-900 text-white py-2 px-4 rounded"
          onClick={() => setShowShortlist(true)}
        >
          View full shortlist {shortlist.length}
        </button>
      </div>
      <div
        className={`fixed top-0 right-0 shadow-2xl h-full p-12 transform transition-transform duration-500 bg-white ${
          showShortlist ? 'translate-x-0' : ' translate-x-full'
        }`}
      >
        <OutsideClickHandler
          onOutsideClick={() => {
            showShortlist ? setShowShortlist(false) : null;
          }}
        >
          <h2 className="text-4xl font-bold mb-8">Shortlist</h2>
          <div className="flex flex-col gap-8 text-center ">
            {shortlist.map((item, index) => (
              <div key={index}>
                <ToastCard item={item} hasImage></ToastCard>
              </div>
            ))}
          </div>
        </OutsideClickHandler>
      </div>
    </main>
  );
}
