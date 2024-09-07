'use client';
import { useState } from 'react';
import { sendTransaction } from '@/utils/transaction';

export default function Page() {
  const [toAddress, setToAddress] = useState('');
  const [amount, setAmount] = useState('');

  const handleSend = async () => {
    await sendTransaction(toAddress, amount);
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-900 text-white p-6">
      <h1 className="text-2xl font-bold mb-6">Next Tx - Avalanche L1 Transaction</h1>
      
      <div className="flex flex-col gap-4 w-full max-w-md">
        {/* Recipient Address Input */}
        <input
          type="text"
          placeholder="Recipient Address"
          className="w-full p-3 rounded-lg border border-gray-700 bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-red-600"
          value={toAddress}
          onChange={(e) => setToAddress(e.target.value)}
        />

        {/* Amount Input */}
        <input
          type="text"
          placeholder="Amount in AVAX"
          className="w-full p-3 rounded-lg border border-gray-700 bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-red-600"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />

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
