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
    
<div class="flex flex-col justify-center items-center text-white absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"> 
  <h1 className="text-2xl font-bold mb-6">Next Tx - Avalanche L1 Transaction</h1>
      
      <div className="flex flex-col gap-4 w-full max-w-md">
        {/* Recipient Address Input */}
        <div className="relative w-full">
          <input
            type="text"
            placeholder="Recipient Address"
            className="w-full p-3 pl-12 rounded-lg border border-gray-700 bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-red-600"
            value={toAddress}
            onChange={(e) => setToAddress(e.target.value)}
          />
          <Wallet className="absolute left-3 top-3 text-gray-400" size={24} />
        </div>

        {/* Amount Input */}
        <div className="relative w-full">
        <input
          type="text"
          placeholder="Amount in AVAX"
          className="w-full p-3 pl-12 rounded-lg border border-gray-700 bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-red-600"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <Coins className="absolute left-3 top-3 text-gray-400" size={24} />
      </div>

        {/* Send Button */}
        <button
          onClick={handleSend}
          className="w-full p-3 bg-red-600 rounded-lg hover:bg-red-700 transition-colors duration-300 text-white font-semibold shadow-md"
        >
          Send Transaction
        </button>
      </div>
    </div>
  );
}

