import { ethers } from "ethers";
import storeAbi from "./config/abi.json"
import { STORE_ADDRESS, MARKETPLACE_ADDRESS, REFERRER_ADDRESS } from "./config/address";

export default async function buyLicense(signer: ethers.Signer, license: string, amount: number) {
  try {
    const store = new ethers.Contract(STORE_ADDRESS, storeAbi, signer);
    const transaction = await store.buyLicense(license, amount, MARKETPLACE_ADDRESS, REFERRER_ADDRESS, {
      gasPrice: ethers.utils.parseUnits('300', 'gwei'), 
    });
    const receipt = await transaction.wait();
    return receipt;
  } catch (error: any) {
    console.error('Contract call failed:', error);
    return error.reason;
  }
}

