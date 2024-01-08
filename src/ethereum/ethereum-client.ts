import { BaseWallet, TransactionRequest, TransactionResponse } from 'ethers';
import { HardhatRuntimeEnvironment } from 'hardhat/types';

export type EthereumClient = {
    stripZerosLeft(implementation: string): string;
    getContract<T>(name: string, address: string): Promise<T>;
    getPlayerAddress(): Promise<string>;
    sendRawTx(tx: TransactionRequest): Promise<TransactionResponse>;
    createCallData(name: string, singatureArgTypes?: string[], args?: any[] | undefined): string;
    deployContract<T>(contractName: string, constructorArgs?: string[]): Promise<T>;
    getStorageValue(address: string, index: string): Promise<string>;
    parseEther(eth: string): bigint;
    createRandomWallet(): BaseWallet;
    calculateContractCreationAddress (from: string, nonce: number): string;
    encodeAs32Bytes(input: string): string;
    convertToHex(input: number, width: number):string,
    padZerosRight(hex: string, width: number): string;
}

export const getHardHatEthereumClient = (hre: HardhatRuntimeEnvironment): EthereumClient => {
    return {
        sendRawTx: async (tx: TransactionRequest) => {
            return (await hre.ethers.getSigners())[0].sendTransaction(tx);
        },
        getContract: async <T>(name: string, address: string): Promise<T> => {
            return await hre.ethers.getContractAt(name, address) as T;
        },
        getPlayerAddress: async (): Promise<string> => {
            return (await hre.ethers.getSigners())[0].address;
        },
        createCallData: (name: string, singatureArgTypes?: string[], args?: any[] | undefined): string => {
            const signature = `function ${name}(${singatureArgTypes || ''})`;
            return new hre.ethers.Interface([signature]).encodeFunctionData(name, args);
        },
        deployContract: async <T>(contractName: string, constructorArgs?: string[]): Promise<T> => {
            const contract = !!constructorArgs
                ? await hre.ethers.deployContract(contractName, constructorArgs)
                : await hre.ethers.deployContract(contractName);

            return await contract.waitForDeployment() as T;
        },
        getStorageValue: async (address: string, index: string): Promise<string> => {
            return await hre.ethers.provider.getStorage(address, index);
        },
        parseEther: (eth: string): bigint => hre.ethers.parseEther(eth),
        createRandomWallet: (): BaseWallet => hre.ethers.Wallet.createRandom(hre.ethers.provider),
        calculateContractCreationAddress: (from: string, nonce: number): string => hre.ethers.getCreateAddress({from, nonce}),
        encodeAs32Bytes: (input: string) => hre.ethers.encodeBytes32String(input),
        stripZerosLeft: (input: string) => hre.ethers.stripZerosLeft(input),
        convertToHex: (input: number, width: number) => hre.ethers.toBeHex(input, width),
        padZerosRight: (hex: string, width: number) => hre.ethers.zeroPadBytes(hex, width),

    }
}