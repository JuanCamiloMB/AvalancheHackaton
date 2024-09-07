'use client';
import { useState } from 'react';
import { sendTransaction } from '@/utils/transaction';
import { Wallet, Coins } from 'lucide-react';

export default function Page() {
  const [toAddress, setToAddress] = useState('');
  const [amount, setAmount] = useState('');

  const handleSend = async () => {
    await sendTransaction(toAddress, amount);
  };

  return (
    <div className="flex flex-col justify-center items-center text-white absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]">
  <h1
    className="text-6xl font-black mb-8 tracking-wide font-redhat-display bg-gradient-to-r from-white via--600 to-red-500 bg-clip-text text-transparent">
    Next Tx
  </h1>

      <p className="text-lg font-semibold mb-8">Send AVAX to any address</p>
      
      <div className="flex flex-col gap-6 w-full max-w-md p-6 bg-black/40 rounded-xl shadow-lg">
        {/* Recipient Address Input */}
        <div className="relative w-full">
          <input
            type="text"
            placeholder="Recipient Address"
            className="w-full p-4 pl-14 rounded-lg border border-gray-600 bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-red-500 shadow-sm"
            value={toAddress}
            onChange={(e) => setToAddress(e.target.value)}
          />
          <Wallet className="absolute left-4 top-4 text-gray-400" size={24} />
        </div>

        {/* Amount Input */}
        <div className="relative w-full">
          <input
            type="text"
            placeholder="Amount in AVAX"
            className="w-full p-4 pl-14 rounded-lg border border-gray-600 bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-red-500 shadow-sm"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
          <Coins className="absolute left-4 top-4 text-gray-400" size={24} />
        </div>

        {/* Send Button */}
        <button
          onClick={handleSend}
          className="w-full p-4 bg-red-600 rounded-lg hover:bg-red-700 transition-all duration-300 text-white font-semibold shadow-md hover:shadow-lg"
        >
          Send Transaction
        </button>
      </div>
    </div>
  );
}
