

import { ethers } from "ethers";
import { useEffect, useState } from "react"

export interface IUseEthereum {
    provider: ethers.providers.Web3Provider | null,
    signer: ethers.Signer | null,
    address: string | null,
    isConnected: boolean,
    connect: () => void,
}

export const emptyEthereum: IUseEthereum = {
    provider: null,
    signer: null,
    address: null,
    isConnected: false,
    connect: () => console.log("connect of emptyEthereum")
}


export const useEthereum = (): IUseEthereum => {
    const [provider, setProvider] = useState<ethers.providers.Web3Provider | null>(null);
    const [signer, setSigner] = useState<ethers.Signer | null>(null);
    const [address, setAddress] = useState<string | null>(null)
    const [isConnected, setIsConnected] = useState<boolean>(false)


    const connect = () => {
        if(typeof window === 'undefined') {
            throw new Error("window is not undefined")
        }

        const newProvider = new ethers.providers.Web3Provider((window as any).ethereum)
        newProvider.send("eth_requestAccounts", []).then(res => {
            setProvider(newProvider)
            setAddress(res[0])
        })

        const signer = newProvider.getSigner();
        setSigner(signer);

        setIsConnected(true)
    }

    return {
        provider,
        signer,
        address,
        isConnected,
        connect
    }
}