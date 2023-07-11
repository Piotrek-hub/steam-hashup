import { createContext, ReactNode, useContext, useEffect } from 'react';
import { emptyEthereum, IUseEthereum, useEthereum } from '../../hooks/utils/useEthereum';

export const EthereumProvider = ({ children }: { children: ReactNode }) => {
  const ethereum = useEthereum();

  return <EthereumContext.Provider value={ethereum}>{children}</EthereumContext.Provider>;
};

const EthereumContext = createContext<IUseEthereum>(emptyEthereum);

export const useEthereumProvider = () => {
  const context = useContext(EthereumContext);

  if (!context) {
    throw new Error('`useEthereumProvider` cannot be used outside of a `EthereumProvider`!');
  }
  return context;
};
