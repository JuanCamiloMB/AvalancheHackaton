import { ethers } from "ethers";
import { connectWallet } from "./wallet";

export async function sendTransaction(toAddress, amount, setTransactionState) {
  try {
    setTransactionState(1)
    const signer = await connectWallet();
    const tx = await signer.sendTransaction({
      to: toAddress,
      value: ethers.parseEther(amount), // amount in AVAX
    });

    console.log("Transaction sent:", tx);
    setTransactionState(2)
    await tx.wait(); // Wait for the transaction to be confirmed
    console.log("Transaction confirmed:", tx);
    setTransactionState(3)
  } catch (error) {
    setTransactionState(-1)
    console.error("Error sending transaction:", error);
  }
}