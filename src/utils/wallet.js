import { ethers } from "ethers";

export async function connectWallet() {
  // Detect Core wallet instead of MetaMask
  if (typeof window.core !== "undefined") {
    try {
      // Request accounts from the Core wallet
      await window.core.request({ method: "eth_requestAccounts" });
      const provider = new ethers.BrowserProvider(window.core);
      const signer = await provider.getSigner();
      return signer;
    } catch (error) {
      console.error("Error connecting to Core wallet:", error);
    }
  } else {
    alert("Please install the Core wallet.");
  }
}