'use client';

import { Toaster, toast } from 'sonner';
import { useState } from 'react';
import { data } from './data';
import ToastCard from './components/ToastCard';
import Card from './components/Card';
import OutsideClickHandler from 'react-outside-click-handler';
import { motion } from 'framer-motion';

export default function Home() {
  const [shortlist, setShortlist] = useState([]);
  const [showShortlist, setShowShortlist] = useState(false);
  const [activeToasts, setActiveToasts] = useState([]);

  const addToShortlist = (item) => {
    setShortlist([...shortlist, item]);
    const newToast = toast.custom(
      (t) => (
        <div>
          <ToastCard item={item}></ToastCard>
        </div>
      ),
      {
        duration: 5000,
      }
    );
    const newActiveToast = { item: item, toast: newToast };
    setActiveToasts([...activeToasts, newActiveToast]);
  };
  const removeFromShortlist = (item) => {
    setShortlist(shortlist.filter((i) => i !== item));
    const relatedToast = activeToasts.find((i) => i.item === item).toast;
    toast.dismiss(relatedToast);
    setActiveToasts(activeToasts.filter((i) => i.item !== item));
  };

  const toggleItem = (item) => {
    shortlist.includes(item) ? removeFromShortlist(item) : addToShortlist(item);
  };

  return (
    <main className="flex min-h-screen flex-col items-center bg-gray-50 justify-between p-8">
      <div className="mb-32 grid gap-4 text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
        {data.map((item, index) => (
          <div key={index} onClick={() => toggleItem(item)}>
            <Card item={item} isActive={shortlist.includes(item)}></Card>
          </div>
        ))}
      </div>
      <Toaster
        className={`md:hidden pointer-events-none transition-all transform duration-400 ${
          showShortlist
            ? 'opacity-0 -translate-x-40'
            : 'opacity-100 translate-x-0'
        }`}
        position="bottom-left"
        offset={40}
      />
      <Toaster
        className={`hidden md:flex transition-all transform duration-400 ${
          showShortlist
            ? 'opacity-0 -translate-x-40'
            : 'opacity-100 translate-x-0'
        }`}
        position="bottom-right"
        offset={80}
        gap={-8}
      />
      <div className="fixed bottom-4 right-4">
        <button
          className={`${
            shortlist.length < 1 ? 'bg-gray-400' : 'bg-gray-950'
          } text-white py-2 px-4 rounded`}
          onClick={() => setShowShortlist(true)}
        >
          Shortlist{' '}
          <span className="text-gray-50 opacity-50">{shortlist.length}</span>
        </button>
      </div>
      <div
        className={`fixed top-0 right-0 shadow-2xl h-full max-w-[75vw] p-4 md:p-8 transform transition-transform duration-500 bg-white ${
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
                <Card item={item} isTiny></Card>
              </div>
            ))}
          </div>
        </OutsideClickHandler>
      </div>
    </main>
  );
}
