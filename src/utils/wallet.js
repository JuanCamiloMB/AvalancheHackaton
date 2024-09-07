import { ethers } from "ethers";

export async function connectWallet() {
  // Detect Core wallet instead of MetaMask
  if (typeof window.ethereum !== "undefined") {
    try {
      // Request accounts from the Core wallet
      await window.ethereum.request({ method: "eth_requestAccounts" });

      // Create a provider
      const provider = new ethers.BrowserProvider(window.ethereum);

      const signer = await provider.getSigner();
      return signer;
    } catch (error) {
      console.error("Error connecting to Core wallet:", error);
    }
  } else {
    alert("Please install the Core wallet.");
  }
}