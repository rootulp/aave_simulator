/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, BigNumberish } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import { TokenDistributor } from "./TokenDistributor";

export class TokenDistributorFactory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    _receivers: string[],
    _percentages: BigNumberish[],
    overrides?: Overrides
  ): Promise<TokenDistributor> {
    return super.deploy(_receivers, _percentages, overrides || {}) as Promise<
      TokenDistributor
    >;
  }
  getDeployTransaction(
    _receivers: string[],
    _percentages: BigNumberish[],
    overrides?: Overrides
  ): TransactionRequest {
    return super.getDeployTransaction(
      _receivers,
      _percentages,
      overrides || {}
    );
  }
  attach(address: string): TokenDistributor {
    return super.attach(address) as TokenDistributor;
  }
  connect(signer: Signer): TokenDistributorFactory {
    return super.connect(signer) as TokenDistributorFactory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): TokenDistributor {
    return new Contract(address, _abi, signerOrProvider) as TokenDistributor;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "address[]",
        name: "_receivers",
        type: "address[]",
      },
      {
        internalType: "uint256[]",
        name: "_percentages",
        type: "uint256[]",
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
        name: "receiver",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "percentage",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "Distributed",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address[]",
        name: "receivers",
        type: "address[]",
      },
      {
        indexed: false,
        internalType: "uint256[]",
        name: "percentages",
        type: "uint256[]",
      },
    ],
    name: "DistributionUpdated",
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
    name: "DISTRIBUTION_BASE",
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
  {
    constant: false,
    inputs: [
      {
        internalType: "contract IERC20[]",
        name: "_tokens",
        type: "address[]",
      },
    ],
    name: "distribute",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "getDistribution",
    outputs: [
      {
        internalType: "address[]",
        name: "receivers",
        type: "address[]",
      },
      {
        internalType: "uint256[]",
        name: "percentages",
        type: "uint256[]",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b5060405162000e9638038062000e96833981810160405260408110156200003757600080fd5b81019080805160405193929190846401000000008211156200005857600080fd5b9083019060208201858111156200006e57600080fd5b82518660208202830111640100000000821117156200008c57600080fd5b82525081516020918201928201910280838360005b83811015620000bb578181015183820152602001620000a1565b5050505090500160405260200180516040519392919084640100000000821115620000e557600080fd5b908301906020820185811115620000fb57600080fd5b82518660208202830111640100000000821117156200011957600080fd5b82525081516020918201928201910280838360005b83811015620001485781810151838201526020016200012e565b5050505091909101604052505060016000555062000172905082826001600160e01b036200017a16565b5050620003da565b8051825114620001d1576040805162461bcd60e51b815260206004820152601d60248201527f4172726179206c656e677468732073686f756c6420626520657175616c000000604482015290519081900360640190fd5b6040805180820190915282815260208082018390528351600191620001fb918391870190620002dd565b50602082810151805162000216926001850192019062000347565b509050507fdc9f439f707945ade720b0154668dd64af0689fb88b40abdb0f0289156d23e9d8282604051808060200180602001838103835285818151815260200191508051906020019060200280838360005b838110156200028357818101518382015260200162000269565b50505050905001838103825284818151815260200191508051906020019060200280838360005b83811015620002c4578181015183820152602001620002aa565b5050505090500194505050505060405180910390a15050565b82805482825590600052602060002090810192821562000335579160200282015b828111156200033557825182546001600160a01b0319166001600160a01b03909116178255602090920191600190910190620002fe565b506200034392915062000393565b5090565b82805482825590600052602060002090810192821562000385579160200282015b828111156200038557825182559160200191906001019062000368565b5062000343929150620003bd565b620003ba91905b80821115620003435780546001600160a01b03191681556001016200039a565b90565b620003ba91905b80821115620003435760008155600101620003c4565b610aac80620003ea6000396000f3fe6080604052600436106100345760003560e01c806313520658146100365780631cced51b1461005d5780636138889b1461010b575b005b34801561004257600080fd5b5061004b6101bb565b60408051918252519081900360200190f35b34801561006957600080fd5b506100726101c1565b604051808060200180602001838103835285818151815260200191508051906020019060200280838360005b838110156100b657818101518382015260200161009e565b50505050905001838103825284818151815260200191508051906020019060200280838360005b838110156100f55781810151838201526020016100dd565b5050505090500194505050505060405180910390f35b34801561011757600080fd5b506100346004803603602081101561012e57600080fd5b81019060208101813564010000000081111561014957600080fd5b82018360208201111561015b57600080fd5b8035906020019184602083028401116401000000008311171561017d57600080fd5b91908080602002602001604051908101604052809392919081815260200183836020028082843760009201919091525092955061027d945050505050565b61271081565b606080600160000180548060200260200160405190810160405280929190818152602001828054801561021d57602002820191906000526020600020905b81546001600160a01b031681526001909101906020018083116101ff575b505050505091506001800180548060200260200160405190810160405280929190818152602001828054801561027257602002820191906000526020600020905b81548152602001906001019080831161025e575b505050505090509091565b60008054600101808255905b825181101561068a57600061029c6106e5565b6001600160a01b03168483815181106102b157fe5b60200260200101516001600160a01b031614156102ce5747610364565b8382815181106102da57fe5b60200260200101516001600160a01b03166370a08231306040518263ffffffff1660e01b815260040180826001600160a01b03166001600160a01b0316815260200191505060206040518083038186803b15801561033757600080fd5b505afa15801561034b573d6000803e3d6000fd5b505050506040513d602081101561036157600080fd5b50515b9050600081116103a55760405162461bcd60e51b815260040180806020018281038252602e815260200180610a20602e913960400191505060405180910390fd5b6103ad6109e4565b60408051600180546060602082028401810185529383018181529293919284929091849184018282801561040a57602002820191906000526020600020905b81546001600160a01b031681526001909101906020018083116103ec575b505050505081526020016001820180548060200260200160405190810160405280929190818152602001828054801561046257602002820191906000526020600020905b81548152602001906001019080831161044e575b505050505081525050905060008090505b81515181101561067f5760006104bb6127106104af8560200151858151811061049857fe5b6020026020010151876106fd90919063ffffffff16565b9063ffffffff61075f16565b90506104c56106e5565b6001600160a01b03168786815181106104da57fe5b60200260200101516001600160a01b03161461053d576105388360000151838151811061050357fe5b60200260200101518289888151811061051857fe5b60200260200101516001600160a01b03166107c99092919063ffffffff16565b6105fc565b60008360000151838151811061054f57fe5b60200260200101516001600160a01b03168260405180600001905060006040518083038185875af1925050503d80600081146105a7576040519150601f19603f3d011682016040523d82523d6000602084013e6105ac565b606091505b50509050806105fa576040805162461bcd60e51b81526020600482015260156024820152742932bb32b93a32b21022aa24103a3930b739b332b960591b604482015290519081900360640190fd5b505b7f60ce3cc2d133631eac66a476f14997a9fa682bd05a60dd993cf02285822d78d88360000151838151811061062d57fe5b60200260200101518460200151848151811061064557fe5b602090810291909101810151604080516001600160a01b03909416845291830152818101849052519081900360600190a150600101610473565b505050600101610289565b5060005481146106e1576040805162461bcd60e51b815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c00604482015290519081900360640190fd5b5050565b73eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee90565b60008261070c57506000610759565b8282028284828161071957fe5b04146107565760405162461bcd60e51b81526004018080602001828103825260218152602001806109ff6021913960400191505060405180910390fd5b90505b92915050565b60008082116107b5576040805162461bcd60e51b815260206004820152601a60248201527f536166654d6174683a206469766973696f6e206279207a65726f000000000000604482015290519081900360640190fd5b60008284816107c057fe5b04949350505050565b604080516001600160a01b038416602482015260448082018490528251808303909101815260649091019091526020810180516001600160e01b031663a9059cbb60e01b17905261081b908490610820565b505050565b610832826001600160a01b03166109de565b610883576040805162461bcd60e51b815260206004820152601f60248201527f5361666545524332303a2063616c6c20746f206e6f6e2d636f6e747261637400604482015290519081900360640190fd5b60006060836001600160a01b0316836040518082805190602001908083835b602083106108c15780518252601f1990920191602091820191016108a2565b6001836020036101000a0380198251168184511680821785525050505050509050019150506000604051808303816000865af19150503d8060008114610923576040519150601f19603f3d011682016040523d82523d6000602084013e610928565b606091505b50915091508161097f576040805162461bcd60e51b815260206004820181905260248201527f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564604482015290519081900360640190fd5b8051156109d85780806020019051602081101561099b57600080fd5b50516109d85760405162461bcd60e51b815260040180806020018281038252602a815260200180610a4e602a913960400191505060405180910390fd5b50505050565b3b151590565b60405180604001604052806060815260200160608152509056fe536166654d6174683a206d756c7469706c69636174696f6e206f766572666c6f775468657265206973206e6f2062616c616e6365206f662074686520746f6b656e20746f20646973747269627574655361666545524332303a204552433230206f7065726174696f6e20646964206e6f742073756363656564a265627a7a723158206c6848b4d6257a306cdf8aec9d1d2689d796ab9f4b14de4eee8b6811cdd354eb64736f6c634300050e0032";
