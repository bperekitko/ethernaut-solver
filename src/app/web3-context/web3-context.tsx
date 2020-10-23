import React, { FunctionComponent, useState } from 'react';
import Web3 from 'web3';
import Web3Model from './web3-context.model';

const Web3Context = React.createContext<Web3Model | undefined>(undefined);
const Web3ContextInitializer = React.createContext<{ init: () => void } | undefined>(undefined);

const Web3Provider: FunctionComponent<unknown> = ({ children }) => {
  const [web3, setWeb3] = useState({ balance: '', address: '' });

  const load = async () => {
    const ethereum = window['ethereum'];
    await ethereum.enable();
    const web3 = new Web3(window['ethereum']);
    const accounts = await web3.eth.getAccounts();
    const balance = await web3.eth.getBalance(accounts[0]);
    const etherBalance = web3.utils.fromWei(balance, 'ether');

    setWeb3({ address: accounts[0], balance: etherBalance });

    ethereum.on('accountsChanged', async (accounts: string) => {
      const balance = await web3.eth.getBalance(accounts[0]);
      const etherBalance = web3.utils.fromWei(balance, 'ether');
      setWeb3({ address: accounts[0], balance: etherBalance });
    });
  };

  const initializer = { init: load };

  return (
    <Web3Context.Provider value={web3}>
      <Web3ContextInitializer.Provider value={initializer}>{children}</Web3ContextInitializer.Provider>
    </Web3Context.Provider>
  );
};

function useWeb3Context(): Web3Model {
  const context = React.useContext(Web3Context);
  if (context === undefined) {
    throw new Error('useWeb3Context must be used within a Web3Provider');
  }
  return context;
}

function useWeb3Initializer(): { init: () => void } {
  const context = React.useContext(Web3ContextInitializer);
  if (context === undefined) {
    throw new Error('useWeb3Initializer must be used within a Web3Provider');
  }
  return context;
}
export { Web3Provider, useWeb3Context, useWeb3Initializer };
