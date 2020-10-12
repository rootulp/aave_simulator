/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import { MockFlashLoanReceiver } from "./MockFlashLoanReceiver";

export class MockFlashLoanReceiverFactory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    _provider: string,
    overrides?: Overrides
  ): Promise<MockFlashLoanReceiver> {
    return super.deploy(_provider, overrides || {}) as Promise<
      MockFlashLoanReceiver
    >;
  }
  getDeployTransaction(
    _provider: string,
    overrides?: Overrides
  ): TransactionRequest {
    return super.getDeployTransaction(_provider, overrides || {});
  }
  attach(address: string): MockFlashLoanReceiver {
    return super.attach(address) as MockFlashLoanReceiver;
  }
  connect(signer: Signer): MockFlashLoanReceiverFactory {
    return super.connect(signer) as MockFlashLoanReceiverFactory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): MockFlashLoanReceiver {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as MockFlashLoanReceiver;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "contract ILendingPoolAddressesProvider",
        name: "_provider",
        type: "address",
      },
    ],
    payable: false,
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "_reserve",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_fee",
        type: "uint256",
      },
    ],
    name: "ExecutedWithFail",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "_reserve",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_fee",
        type: "uint256",
      },
    ],
    name: "ExecutedWithSuccess",
    type: "event",
  },
  {
    payable: true,
    stateMutability: "payable",
    type: "fallback",
  },
  {
    constant: true,
    inputs: [],
    name: "addressesProvider",
    outputs: [
      {
        internalType: "contract ILendingPoolAddressesProvider",
        name: "",
        type: "address",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        internalType: "bool",
        name: "_fail",
        type: "bool",
      },
    ],
    name: "setFailExecutionTransfer",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        internalType: "address",
        name: "_reserve",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_fee",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "_params",
        type: "bytes",
      },
    ],
    name: "executeOperation",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040526000805460ff60a01b1916905534801561001d57600080fd5b5060405161087e38038061087e8339818101604052602081101561004057600080fd5b5051600080546001600160a01b039092166001600160a01b031990921691909117905561080c806100726000396000f3fe6080604052600436106100345760003560e01c8063388f70f114610036578063c72c4d1014610062578063ee87255814610093575b005b34801561004257600080fd5b506100346004803603602081101561005957600080fd5b50351515610162565b34801561006e57600080fd5b50610077610180565b604080516001600160a01b039092168252519081900360200190f35b34801561009f57600080fd5b50610034600480360360808110156100b657600080fd5b6001600160a01b0382351691602081013591604082013591908101906080810160608201356401000000008111156100ed57600080fd5b8201836020820111156100ff57600080fd5b8035906020019184600183028401116401000000008311171561012157600080fd5b91908080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525092955061018f945050505050565b60008054911515600160a01b0260ff60a01b19909216919091179055565b6000546001600160a01b031681565b8361019a308261034c565b8411156101ee576040805162461bcd60e51b815260206004820181905260248201527f496e76616c69642062616c616e636520666f722074686520636f6e7472616374604482015290519081900360640190fd5b600054600160a01b900460ff161561024f57604080516001600160a01b03871681526020810186905280820185905290517f816f6a6bc084e1996be1a831afa1af30763d0501b6b43b9e1922a11f347366d79181900360600190a150610346565b61025761040b565b6001600160a01b0316856001600160a01b0316146102e257806001600160a01b031663a0712d68846040518263ffffffff1660e01b815260040180828152602001915050602060405180830381600087803b1580156102b557600080fd5b505af11580156102c9573d6000803e3d6000fd5b505050506040513d60208110156102df57600080fd5b50505b6102fb856102f6868663ffffffff61042316565b610484565b604080516001600160a01b03871681526020810186905280820185905290517f7d94e9d0c906b8d7b2b52a581b9e9ba728aa6f8cd8532bd87243d193f47401be9181900360600190a1505b50505050565b600061035661040b565b6001600160a01b0316826001600160a01b0316141561038057506001600160a01b03821631610405565b816001600160a01b03166370a08231846040518263ffffffff1660e01b815260040180826001600160a01b03166001600160a01b0316815260200191505060206040518083038186803b1580156103d657600080fd5b505afa1580156103ea573d6000803e3d6000fd5b505050506040513d602081101561040057600080fd5b505190505b92915050565b73eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee90565b60008282018381101561047d576040805162461bcd60e51b815260206004820152601b60248201527f536166654d6174683a206164646974696f6e206f766572666c6f770000000000604482015290519081900360640190fd5b9392505050565b60008060009054906101000a90046001600160a01b03166001600160a01b031663ed6ff7606040518163ffffffff1660e01b815260040160206040518083038186803b1580156104d357600080fd5b505afa1580156104e7573d6000803e3d6000fd5b505050506040513d60208110156104fd57600080fd5b5051905061050c818484610511565b505050565b61051961040b565b6001600160a01b0316826001600160a01b03161415610588576040516001600160a01b038416908290600081818185875af1925050503d806000811461057b576040519150601f19603f3d011682016040523d82523d6000602084013e610580565b606091505b50505061050c565b61050c6001600160a01b038316848363ffffffff6105a216565b604080516001600160a01b038416602482015260448082018490528251808303909101815260649091019091526020810180516001600160e01b031663a9059cbb60e01b17905261050c908490610601826001600160a01b03166107a7565b610652576040805162461bcd60e51b815260206004820152601f60248201527f5361666545524332303a2063616c6c20746f206e6f6e2d636f6e747261637400604482015290519081900360640190fd5b60006060836001600160a01b0316836040518082805190602001908083835b602083106106905780518252601f199092019160209182019101610671565b6001836020036101000a0380198251168184511680821785525050505050509050019150506000604051808303816000865af19150503d80600081146106f2576040519150601f19603f3d011682016040523d82523d6000602084013e6106f7565b606091505b50915091508161074e576040805162461bcd60e51b815260206004820181905260248201527f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564604482015290519081900360640190fd5b8051156103465780806020019051602081101561076a57600080fd5b50516103465760405162461bcd60e51b815260040180806020018281038252602a8152602001806107ae602a913960400191505060405180910390fd5b3b15159056fe5361666545524332303a204552433230206f7065726174696f6e20646964206e6f742073756363656564a265627a7a7231582084c35044b506b6ddd743494983ede2edc13faf032217a9bd443d590eda2834cb64736f6c634300050e0032";
