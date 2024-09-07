import { ethers } from "ethers";
import { connectWallet } from "./wallet";

export async function sendTransaction(toAddress, amount) {
  try {
    const signer = await connectWallet();
    const tx = await signer.sendTransaction({
      to: toAddress,
      value: ethers.parseEther(amount), // amount in AVAX
    });

    console.log("Transaction sent:", tx);
    await tx.wait(); // Wait for the transaction to be confirmed
    console.log("Transaction confirmed:", tx);
  } catch (error) {
    console.error("Error sending transaction:", error);
  }
}