'use client'
import { useState } from "react";
import { sendTransaction } from "@/utils/transaction";

export default function Page(){
    const [toAddress, setToAddress] = useState("");
    const [amount, setAmount] = useState("");
  
    const handleSend = async () => {
      await sendTransaction(toAddress, amount);
    };
    return(
        <div>
          <h1>Avalanche L1 Network Transaction</h1>
          <input
            type="text"
            placeholder="Recipient Address"
            value={toAddress}
            onChange={(e) => setToAddress(e.target.value)}
          />
          <input
            type="text"
            placeholder="Amount in AVAX"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
          <button onClick={handleSend}>Send Transaction</button>
        </div>
      );
}