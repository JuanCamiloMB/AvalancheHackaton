import { ethers } from "ethers";

const AVALANCHE_RPC_URL = 'https://rpc.ankr.com/avalanche'; // Replace with your AvaCloud RPC URL
const CHAIN_ID = 43114; // For Avalanche C-Chain Mainnet, change as needed for your L1

const provider = new ethers.JsonRpcProvider(AVALANCHE_RPC_URL);

export { provider, CHAIN_ID };