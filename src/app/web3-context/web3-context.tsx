import React, { FunctionComponent, useState } from 'react';
import Web3 from 'web3';
import Web3Model from './web3-context.model';

const Web3Context = React.createContext<Web3Model | undefined>(undefined);
const Web3ContextConnector = React.createContext<{ connect: () => void } | undefined>(undefined);

const useWeb3State = (): { web3State: Web3Model; connect: () => void } => {
  const [web3State, setWeb3] = useState({ balance: '', address: '', initialized: false });

  const connect = async () => {
    if (!web3State.initialized) {
      const ethereum = window['ethereum'];
      const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
      const address = accounts[0];

      const web3 = new Web3(Web3.givenProvider);
      const balance = await web3.eth.getBalance(address);
      const etherBalance = web3.utils.fromWei(balance, 'ether');

      updateState(address, etherBalance);

      ethereum.on('accountsChanged', async (accounts: string) => {
        const address = accounts[0];
        const weiBalance = await web3.eth.getBalance(address);
        const etherBalance = web3.utils.fromWei(weiBalance, 'ether');
        updateState(address, etherBalance);
      });
    }
  };

  const updateState = (address: string, balance: string, initialized = true) => {
    setWeb3({ address, balance, initialized });
  };

  return { web3State, connect };
};

const Web3Provider: FunctionComponent<unknown> = ({ children }) => {
  const { web3State, connect } = useWeb3State();
  const connector = { connect };
  return (
    <Web3Context.Provider value={web3State}>
      <Web3ContextConnector.Provider value={connector}>{children}</Web3ContextConnector.Provider>
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

function useWeb3Connector(): { connect: () => void } {
  const context = React.useContext(Web3ContextConnector);
  if (context === undefined) {
    throw new Error('useWeb3Initializer must be used within a Web3Provider');
  }
  return context;
}
export { Web3Provider, useWeb3Context, useWeb3Connector };
