/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import { UintStorage } from "./UintStorage";

export class UintStorageFactory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(overrides?: Overrides): Promise<UintStorage> {
    return super.deploy(overrides || {}) as Promise<UintStorage>;
  }
  getDeployTransaction(overrides?: Overrides): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): UintStorage {
    return super.attach(address) as UintStorage;
  }
  connect(signer: Signer): UintStorageFactory {
    return super.connect(signer) as UintStorageFactory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): UintStorage {
    return new Contract(address, _abi, signerOrProvider) as UintStorage;
  }
}

const _abi = [
  {
    constant: true,
    inputs: [
      {
        internalType: "bytes32",
        name: "_key",
        type: "bytes32",
      },
    ],
    name: "getUint",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x6080604052348015600f57600080fd5b5060a08061001e6000396000f3fe6080604052348015600f57600080fd5b506004361060285760003560e01c8063bd02d0f514602d575b600080fd5b604760048036036020811015604157600080fd5b50356059565b60408051918252519081900360200190f35b6000908152602081905260409020549056fea265627a7a7231582026bca078225c4b9d0c077fde168780f1a82a394b432c236e8519ace3b5067dc264736f6c634300050e0032";
