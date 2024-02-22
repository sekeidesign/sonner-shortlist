'use client';

import Image from 'next/image';
import { Toaster, toast } from 'sonner';
import { useState } from 'react';
import { data } from './data';
import ToastCard from './components/ToastCard';

export default function Home() {
  const [shortlist, setShortlist] = useState([]);
  const [showShortlist, setShowShortlist] = useState(false);

  const addToShortlist = (item) => {
    setShortlist([...shortlist, item]);
    toast.custom((t) => (
      <div>
        <ToastCard item={item}></ToastCard>
      </div>
    ));
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="mb-32 grid gap-8 text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
        {data.map((item, index) => (
          <div key={index} onClick={() => addToShortlist(item)}>
            <ToastCard item={item}></ToastCard>
          </div>
        ))}
      </div>
      <Toaster position="bottom-right" offset={80} />
      <div className="fixed bottom-4 right-32 ">
        <button
          className="bg-gray-900 text-white py-2 px-4 rounded"
          onClick={() => setShowShortlist(true)}
        >
          View full shortlist {shortlist.length}
        </button>
      </div>
      <div
        className={`fixed top-0 right-0 shadow-2xl h-full p-12 transform transition-transform duration-500 bg-white ${
          showShortlist ? 'translate-x-0' : 'hidden translate-x-full'
        }`}
      >
        <h2 className="text-4xl font-bold mb-8">Shortlist</h2>
        <div className="flex flex-col gap-8 text-center ">
          {shortlist.map((item, index) => (
            <div key={index}>
              <ToastCard item={item}></ToastCard>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
