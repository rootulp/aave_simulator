/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import { LendingPoolDataProvider } from "./LendingPoolDataProvider";

export class LendingPoolDataProviderFactory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(overrides?: Overrides): Promise<LendingPoolDataProvider> {
    return super.deploy(overrides || {}) as Promise<LendingPoolDataProvider>;
  }
  getDeployTransaction(overrides?: Overrides): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): LendingPoolDataProvider {
    return super.attach(address) as LendingPoolDataProvider;
  }
  connect(signer: Signer): LendingPoolDataProviderFactory {
    return super.connect(signer) as LendingPoolDataProviderFactory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): LendingPoolDataProvider {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as LendingPoolDataProvider;
  }
}

const _abi = [
  {
    constant: true,
    inputs: [],
    name: "DATA_PROVIDER_REVISION",
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
    constant: true,
    inputs: [],
    name: "HEALTH_FACTOR_LIQUIDATION_THRESHOLD",
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
    constant: true,
    inputs: [],
    name: "addressesProvider",
    outputs: [
      {
        internalType: "contract LendingPoolAddressesProvider",
        name: "",
        type: "address",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "core",
    outputs: [
      {
        internalType: "contract LendingPoolCore",
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
        internalType: "contract LendingPoolAddressesProvider",
        name: "_addressesProvider",
        type: "address",
      },
    ],
    name: "initialize",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        internalType: "address",
        name: "_user",
        type: "address",
      },
    ],
    name: "calculateUserGlobalData",
    outputs: [
      {
        internalType: "uint256",
        name: "totalLiquidityBalanceETH",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "totalCollateralBalanceETH",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "totalBorrowBalanceETH",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "totalFeesETH",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "currentLtv",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "currentLiquidationThreshold",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "healthFactor",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "healthFactorBelowThreshold",
        type: "bool",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        internalType: "address",
        name: "_reserve",
        type: "address",
      },
      {
        internalType: "address",
        name: "_user",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "balanceDecreaseAllowed",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
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
        internalType: "uint256",
        name: "_userCurrentBorrowBalanceTH",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_userCurrentFeesETH",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_userCurrentLtv",
        type: "uint256",
      },
    ],
    name: "calculateCollateralNeededInETH",
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
    constant: true,
    inputs: [],
    name: "getHealthFactorLiquidationThreshold",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "pure",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        internalType: "address",
        name: "_reserve",
        type: "address",
      },
    ],
    name: "getReserveConfigurationData",
    outputs: [
      {
        internalType: "uint256",
        name: "ltv",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "liquidationThreshold",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "liquidationBonus",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "rateStrategyAddress",
        type: "address",
      },
      {
        internalType: "bool",
        name: "usageAsCollateralEnabled",
        type: "bool",
      },
      {
        internalType: "bool",
        name: "borrowingEnabled",
        type: "bool",
      },
      {
        internalType: "bool",
        name: "stableBorrowRateEnabled",
        type: "bool",
      },
      {
        internalType: "bool",
        name: "isActive",
        type: "bool",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        internalType: "address",
        name: "_reserve",
        type: "address",
      },
    ],
    name: "getReserveData",
    outputs: [
      {
        internalType: "uint256",
        name: "totalLiquidity",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "availableLiquidity",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "totalBorrowsStable",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "totalBorrowsVariable",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "liquidityRate",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "variableBorrowRate",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "stableBorrowRate",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "averageStableBorrowRate",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "utilizationRate",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "liquidityIndex",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "variableBorrowIndex",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "aTokenAddress",
        type: "address",
      },
      {
        internalType: "uint40",
        name: "lastUpdateTimestamp",
        type: "uint40",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        internalType: "address",
        name: "_user",
        type: "address",
      },
    ],
    name: "getUserAccountData",
    outputs: [
      {
        internalType: "uint256",
        name: "totalLiquidityETH",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "totalCollateralETH",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "totalBorrowsETH",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "totalFeesETH",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "availableBorrowsETH",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "currentLiquidationThreshold",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "ltv",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "healthFactor",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        internalType: "address",
        name: "_reserve",
        type: "address",
      },
      {
        internalType: "address",
        name: "_user",
        type: "address",
      },
    ],
    name: "getUserReserveData",
    outputs: [
      {
        internalType: "uint256",
        name: "currentATokenBalance",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "currentBorrowBalance",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "principalBorrowBalance",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "borrowRateMode",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "borrowRate",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "liquidityRate",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "originationFee",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "variableBorrowIndex",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "lastUpdateTimestamp",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "usageAsCollateralEnabled",
        type: "bool",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x60806040526000805534801561001457600080fd5b50612947806100246000396000f3fe608060405234801561001057600080fd5b50600436106100cf5760003560e01c806376e9d6151161008c578063c3525c2811610066578063c3525c28146103e4578063c4d66de8146103ec578063c72c4d1014610414578063f2f4eb2614610438576100cf565b806376e9d6151461032b5780638daf609f14610375578063bf92857c1461037d576100cf565b806312737c33146100d457806328dd2d011461012a5780632c6d0e9b146101aa57806335ea6a75146102135780633e150141146102ae5780633e44bee814610323575b600080fd5b610118600480360360c08110156100ea57600080fd5b506001600160a01b038135169060208101359060408101359060608101359060808101359060a00135610440565b60408051918252519081900360200190f35b6101586004803603604081101561014057600080fd5b506001600160a01b0381358116916020013516610633565b604080519a8b5260208b0199909952898901979097526060890195909552608088019390935260a087019190915260c086015260e0850152610100840152151561012083015251908190036101400190f35b6101d0600480360360208110156101c057600080fd5b50356001600160a01b0316610e1e565b604080519889526020890197909752878701959095526060870193909352608086019190915260a085015260c0840152151560e083015251908190036101000190f35b6102396004803603602081101561022957600080fd5b50356001600160a01b03166113c8565b604080519d8e5260208e019c909c528c8c019a909a5260608c019890985260808b019690965260a08a019490945260c089019290925260e08801526101008701526101208601526101408501526001600160a01b031661016084015264ffffffffff1661018083015251908190036101a00190f35b6102d4600480360360208110156102c457600080fd5b50356001600160a01b0316611c6f565b604080519889526020890197909752878701959095526001600160a01b0390931660608701529015156080860152151560a0850152151560c0840152151560e083015251908190036101000190f35b610118611fe2565b6103616004803603606081101561034157600080fd5b506001600160a01b03813581169160208101359091169060400135611fee565b604080519115158252519081900360200190f35b6101186122e9565b6103a36004803603602081101561039357600080fd5b50356001600160a01b03166122ee565b604080519889526020890197909752878701959095526060870193909352608086019190915260a085015260c084015260e083015251908190036101000190f35b61011861232f565b6104126004803603602081101561040257600080fd5b50356001600160a01b031661233b565b005b61041c612477565b604080516001600160a01b039092168252519081900360200190f35b61041c612486565b6034546040805163288d4ff760e21b81526001600160a01b03898116600483015291516000938493169163a2353fdc916024808301926020929190829003018186803b15801561048f57600080fd5b505afa1580156104a3573d6000803e3d6000fd5b505050506040513d60208110156104b957600080fd5b505160355460408051631f94a27560e31b815290519293506000926001600160a01b039092169163fca513a891600480820192602092909190829003018186803b15801561050657600080fd5b505afa15801561051a573d6000803e3d6000fd5b505050506040513d602081101561053057600080fd5b5051905060006105eb600a84900a6105df6105518c8c63ffffffff61249516565b856001600160a01b031663b3596f078f6040518263ffffffff1660e01b815260040180826001600160a01b03166001600160a01b0316815260200191505060206040518083038186803b1580156105a757600080fd5b505afa1580156105bb573d6000803e3d6000fd5b505050506040513d60208110156105d157600080fd5b50519063ffffffff6124f816565b9063ffffffff61255116565b90506000610624866105df60646106188661060c8e8e63ffffffff61249516565b9063ffffffff61249516565b9063ffffffff6124f816565b9b9a5050505050505050505050565b600080600080600080600080600080603460009054906101000a90046001600160a01b03166001600160a01b03166334b3beee8d6040518263ffffffff1660e01b815260040180826001600160a01b03166001600160a01b0316815260200191505060206040518083038186803b1580156106ad57600080fd5b505afa1580156106c1573d6000803e3d6000fd5b505050506040513d60208110156106d757600080fd5b5051604080516370a0823160e01b81526001600160a01b038e81166004830152915191909216916370a08231916024808301926020929190829003018186803b15801561072357600080fd5b505afa158015610737573d6000803e3d6000fd5b505050506040513d602081101561074d57600080fd5b810190808051906020019092919050505099506000603460009054906101000a90046001600160a01b03166001600160a01b0316631ca19f198e8e6040518363ffffffff1660e01b815260040180836001600160a01b03166001600160a01b03168152602001826001600160a01b03166001600160a01b031681526020019250505060206040518083038186803b1580156107e757600080fd5b505afa1580156107fb573d6000803e3d6000fd5b505050506040513d602081101561081157600080fd5b81019080805190602001909291905050509050603460009054906101000a90046001600160a01b03166001600160a01b0316639fb8afcd8e8e6040518363ffffffff1660e01b815260040180836001600160a01b03166001600160a01b03168152602001826001600160a01b03166001600160a01b031681526020019250505060606040518083038186803b1580156108a957600080fd5b505afa1580156108bd573d6000803e3d6000fd5b505050506040513d60608110156108d357600080fd5b5080516020909101519a50985060018160028111156108ee57fe5b14156109ac57603460009054906101000a90046001600160a01b03166001600160a01b0316636fffab0c8e8e6040518363ffffffff1660e01b815260040180836001600160a01b03166001600160a01b03168152602001826001600160a01b03166001600160a01b031681526020019250505060206040518083038186803b15801561097957600080fd5b505afa15801561098d573d6000803e3d6000fd5b505050506040513d60208110156109a357600080fd5b50519650610a5a565b60028160028111156109ba57fe5b1415610a5a57603460009054906101000a90046001600160a01b03166001600160a01b031663906c0a418e6040518263ffffffff1660e01b815260040180826001600160a01b03166001600160a01b0316815260200191505060206040518083038186803b158015610a2b57600080fd5b505afa158015610a3f573d6000803e3d6000fd5b505050506040513d6020811015610a5557600080fd5b505196505b806002811115610a6657fe5b9750603460009054906101000a90046001600160a01b03166001600160a01b031663c540148e8e6040518263ffffffff1660e01b815260040180826001600160a01b03166001600160a01b0316815260200191505060206040518083038186803b158015610ad357600080fd5b505afa158015610ae7573d6000803e3d6000fd5b505050506040513d6020811015610afd57600080fd5b81019080805190602001909291905050509550603460009054906101000a90046001600160a01b03166001600160a01b031663feab31ac8e8e6040518363ffffffff1660e01b815260040180836001600160a01b03166001600160a01b03168152602001826001600160a01b03166001600160a01b031681526020019250505060206040518083038186803b158015610b9557600080fd5b505afa158015610ba9573d6000803e3d6000fd5b505050506040513d6020811015610bbf57600080fd5b81019080805190602001909291905050509450603460009054906101000a90046001600160a01b03166001600160a01b031663f6ea8d768e8e6040518363ffffffff1660e01b815260040180836001600160a01b03166001600160a01b03168152602001826001600160a01b03166001600160a01b031681526020019250505060206040518083038186803b158015610c5757600080fd5b505afa158015610c6b573d6000803e3d6000fd5b505050506040513d6020811015610c8157600080fd5b81019080805190602001909291905050509350603460009054906101000a90046001600160a01b03166001600160a01b03166366d103f38e8e6040518363ffffffff1660e01b815260040180836001600160a01b03166001600160a01b03168152602001826001600160a01b03166001600160a01b031681526020019250505060206040518083038186803b158015610d1957600080fd5b505afa158015610d2d573d6000803e3d6000fd5b505050506040513d6020811015610d4357600080fd5b81019080805190602001909291905050509250603460009054906101000a90046001600160a01b03166001600160a01b0316639e3c4f3b8e8e6040518363ffffffff1660e01b815260040180836001600160a01b03166001600160a01b03168152602001826001600160a01b03166001600160a01b031681526020019250505060206040518083038186803b158015610ddb57600080fd5b505afa158015610def573d6000803e3d6000fd5b505050506040513d6020811015610e0557600080fd5b50519a9d999c50979a5095989497939650919450929091565b6000806000806000806000806000603560009054906101000a90046001600160a01b03166001600160a01b031663fca513a86040518163ffffffff1660e01b815260040160206040518083038186803b158015610e7a57600080fd5b505afa158015610e8e573d6000803e3d6000fd5b505050506040513d6020811015610ea457600080fd5b50519050610eb0612800565b60345460408051630240bc6b60e21b815290516060926001600160a01b031691630902f1ac916004808301926000929190829003018186803b158015610ef557600080fd5b505afa158015610f09573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526020811015610f3257600080fd5b8101908080516040519392919084640100000000821115610f5257600080fd5b908301906020820185811115610f6757600080fd5b8251866020820283011164010000000082111715610f8457600080fd5b82525081516020918201928201910280838360005b83811015610fb1578181015183820152602001610f99565b50505050905001604052505050905060008090505b815181101561135c57818181518110610fdb57fe5b60200260200101518361014001906001600160a01b031690816001600160a01b031681525050603460009054906101000a90046001600160a01b03166001600160a01b031663e10076ad8461014001518f6040518363ffffffff1660e01b815260040180836001600160a01b03166001600160a01b03168152602001826001600160a01b03166001600160a01b031681526020019250505060806040518083038186803b15801561108b57600080fd5b505afa15801561109f573d6000803e3d6000fd5b505050506040513d60808110156110b557600080fd5b5080516020820151604080840151606094850151151561012089015260e0880152928601529084018190521580156110ef57506060830151155b156110f957611354565b60345461014084015160408051635fc526ff60e01b81526001600160a01b03928316600482015290519190921691635fc526ff916024808301926080929190829003018186803b15801561114c57600080fd5b505afa158015611160573d6000803e3d6000fd5b505050506040513d608081101561117657600080fd5b508051602080830151604080850151606090950151151561010089015260c088019490945260a087015260808601829052600a9190910a85820152610140850151825163b3596f0760e01b81526001600160a01b03918216600482015292519087169263b3596f07926024808301939192829003018186803b1580156111fb57600080fd5b505afa15801561120f573d6000803e3d6000fd5b505050506040513d602081101561122557600080fd5b505183526040830151156112ec57600061125884602001516105df866040015187600001516124f890919063ffffffff16565b905061126a8d8263ffffffff61249516565b9c50836101000151801561128057508361012001515b156112ea576112958c8263ffffffff61249516565b9b506112be6112b18560a00151836124f890919063ffffffff16565b8a9063ffffffff61249516565b98506112e76112da8560c00151836124f890919063ffffffff16565b899063ffffffff61249516565b97505b505b6060830151156113545761132961131c84602001516105df866060015187600001516124f890919063ffffffff16565b8b9063ffffffff61249516565b99506113516112b184602001516105df86600001518760e001516124f890919063ffffffff16565b98505b600101610fc6565b5060008a1161136c57600061137c565b61137c878b63ffffffff61255116565b965060008a1161138d57600061139d565b61139d868b63ffffffff61255116565b95506113ab8a8a8a896125bb565b9450670de0b6b3a764000085109350505050919395975091939597565b6000806000806000806000806000806000806000603460009054906101000a90046001600160a01b03166001600160a01b031663c33cfd908f6040518263ffffffff1660e01b815260040180826001600160a01b03166001600160a01b0316815260200191505060206040518083038186803b15801561144757600080fd5b505afa15801561145b573d6000803e3d6000fd5b505050506040513d602081101561147157600080fd5b81019080805190602001909291905050509c50603460009054906101000a90046001600160a01b03166001600160a01b031663e24030198f6040518263ffffffff1660e01b815260040180826001600160a01b03166001600160a01b0316815260200191505060206040518083038186803b1580156114ef57600080fd5b505afa158015611503573d6000803e3d6000fd5b505050506040513d602081101561151957600080fd5b81019080805190602001909291905050509b50603460009054906101000a90046001600160a01b03166001600160a01b0316637f90fec58f6040518263ffffffff1660e01b815260040180826001600160a01b03166001600160a01b0316815260200191505060206040518083038186803b15801561159757600080fd5b505afa1580156115ab573d6000803e3d6000fd5b505050506040513d60208110156115c157600080fd5b81019080805190602001909291905050509a50603460009054906101000a90046001600160a01b03166001600160a01b03166398bd47378f6040518263ffffffff1660e01b815260040180826001600160a01b03166001600160a01b0316815260200191505060206040518083038186803b15801561163f57600080fd5b505afa158015611653573d6000803e3d6000fd5b505050506040513d602081101561166957600080fd5b81019080805190602001909291905050509950603460009054906101000a90046001600160a01b03166001600160a01b031663c540148e8f6040518263ffffffff1660e01b815260040180826001600160a01b03166001600160a01b0316815260200191505060206040518083038186803b1580156116e757600080fd5b505afa1580156116fb573d6000803e3d6000fd5b505050506040513d602081101561171157600080fd5b81019080805190602001909291905050509850603460009054906101000a90046001600160a01b03166001600160a01b031663906c0a418f6040518263ffffffff1660e01b815260040180826001600160a01b03166001600160a01b0316815260200191505060206040518083038186803b15801561178f57600080fd5b505afa1580156117a3573d6000803e3d6000fd5b505050506040513d60208110156117b957600080fd5b81019080805190602001909291905050509750603460009054906101000a90046001600160a01b03166001600160a01b03166388079d888f6040518263ffffffff1660e01b815260040180826001600160a01b03166001600160a01b0316815260200191505060206040518083038186803b15801561183757600080fd5b505afa15801561184b573d6000803e3d6000fd5b505050506040513d602081101561186157600080fd5b81019080805190602001909291905050509650603460009054906101000a90046001600160a01b03166001600160a01b03166346bc0f288f6040518263ffffffff1660e01b815260040180826001600160a01b03166001600160a01b0316815260200191505060206040518083038186803b1580156118df57600080fd5b505afa1580156118f3573d6000803e3d6000fd5b505050506040513d602081101561190957600080fd5b81019080805190602001909291905050509550603460009054906101000a90046001600160a01b03166001600160a01b031663bfacad848f6040518263ffffffff1660e01b815260040180826001600160a01b03166001600160a01b0316815260200191505060206040518083038186803b15801561198757600080fd5b505afa15801561199b573d6000803e3d6000fd5b505050506040513d60208110156119b157600080fd5b81019080805190602001909291905050509450603460009054906101000a90046001600160a01b03166001600160a01b031663bd7fd79a8f6040518263ffffffff1660e01b815260040180826001600160a01b03166001600160a01b0316815260200191505060206040518083038186803b158015611a2f57600080fd5b505afa158015611a43573d6000803e3d6000fd5b505050506040513d6020811015611a5957600080fd5b81019080805190602001909291905050509350603460009054906101000a90046001600160a01b03166001600160a01b031663b701d0938f6040518263ffffffff1660e01b815260040180826001600160a01b03166001600160a01b0316815260200191505060206040518083038186803b158015611ad757600080fd5b505afa158015611aeb573d6000803e3d6000fd5b505050506040513d6020811015611b0157600080fd5b81019080805190602001909291905050509250603460009054906101000a90046001600160a01b03166001600160a01b03166334b3beee8f6040518263ffffffff1660e01b815260040180826001600160a01b03166001600160a01b0316815260200191505060206040518083038186803b158015611b7f57600080fd5b505afa158015611b93573d6000803e3d6000fd5b505050506040513d6020811015611ba957600080fd5b81019080805190602001909291905050509150603460009054906101000a90046001600160a01b03166001600160a01b0316634f1446098f6040518263ffffffff1660e01b815260040180826001600160a01b03166001600160a01b0316815260200191505060206040518083038186803b158015611c2757600080fd5b505afa158015611c3b573d6000803e3d6000fd5b505050506040513d6020811015611c5157600080fd5b50519c9e9b9d50999b989a9799509597949693959294919390929190565b600080600080600080600080603460009054906101000a90046001600160a01b03166001600160a01b0316635fc526ff8a6040518263ffffffff1660e01b815260040180826001600160a01b03166001600160a01b0316815260200191505060806040518083038186803b158015611ce657600080fd5b505afa158015611cfa573d6000803e3d6000fd5b505050506040513d6080811015611d1057600080fd5b810190808051906020019092919080519060200190929190805190602001909291908051906020019092919050505090919250809650819950829a50505050603460009054906101000a90046001600160a01b03166001600160a01b0316639e6748488a6040518263ffffffff1660e01b815260040180826001600160a01b03166001600160a01b0316815260200191505060206040518083038186803b158015611dba57600080fd5b505afa158015611dce573d6000803e3d6000fd5b505050506040513d6020811015611de457600080fd5b505160345460408051632e79732b60e11b81526001600160a01b038d811660048301529151939550911691635cf2e65691602480820192602092909190829003018186803b158015611e3557600080fd5b505afa158015611e49573d6000803e3d6000fd5b505050506040513d6020811015611e5f57600080fd5b505160345460408051630283aeb760e11b81526001600160a01b038d8116600483015291519396509116916305075d6e91602480820192602092909190829003018186803b158015611eb057600080fd5b505afa158015611ec4573d6000803e3d6000fd5b505050506040513d6020811015611eda57600080fd5b5051603454604080516331da9b2760e21b81526001600160a01b038d81166004830152915193945091169163c76a6c9c91602480820192602092909190829003018186803b158015611f2b57600080fd5b505afa158015611f3f573d6000803e3d6000fd5b505050506040513d6020811015611f5557600080fd5b505160345460408051633570a20b60e11b81526001600160a01b038d811660048301529151939950911691636ae1441691602480820192602092909190829003018186803b158015611fa657600080fd5b505afa158015611fba573d6000803e3d6000fd5b505050506040513d6020811015611fd057600080fd5b50519799969850949695929491935091565b670de0b6b3a764000090565b6000611ff8612867565b60345460408051635fc526ff60e01b81526001600160a01b03888116600483015291519190921691635fc526ff916024808301926080929190829003018186803b15801561204557600080fd5b505afa158015612059573d6000803e3d6000fd5b505050506040513d608081101561206f57600080fd5b508051604082015160609092015115801561014085015260a0840192909252825280612119575060345460408051639e3c4f3b60e01b81526001600160a01b038881166004830152878116602483015291519190921691639e3c4f3b916044808301926020929190829003018186803b1580156120eb57600080fd5b505afa1580156120ff573d6000803e3d6000fd5b505050506040513d602081101561211557600080fd5b5051155b156121285760019150506122e2565b61213184610e1e565b505060808701525060608501526040840181905260208401919091521515905061215f5760019150506122e2565b60355460408051631f94a27560e31b815290516000926001600160a01b03169163fca513a8916004808301926020929190829003018186803b1580156121a457600080fd5b505afa1580156121b8573d6000803e3d6000fd5b505050506040513d60208110156121ce57600080fd5b505182516040805163b3596f0760e01b81526001600160a01b038a81166004830152915193945061223093600a9390930a926105df9289929087169163b3596f0791602480820192602092909190829003018186803b1580156105a757600080fd5b60c08301819052602083015161224b9163ffffffff61260a16565b60e08301819052612261576000925050506122e2565b6122ac8260e001516105df6122878560a001518660c001516124f890919063ffffffff16565b608086015160208701516122a09163ffffffff6124f816565b9063ffffffff61260a16565b610100830181905260e0830151604084015160608501516000936122d2939291906125bb565b670de0b6b3a76400001093505050505b9392505050565b600181565b60008060008060008060008061230389610e1e565b50959d50939b5091995097509094509250905061232287878785612667565b9350919395975091939597565b670de0b6b3a764000081565b60006123456127c9565b60015490915060ff168061235c575061235c6127ce565b80612368575060005481115b6123a35760405162461bcd60e51b815260040180806020018281038252602e8152602001806128e5602e913960400191505060405180910390fd5b60015460ff161580156123c2576001805460ff19168117905560008290555b603580546001600160a01b0319166001600160a01b0385169081179091556040805163076b7fbb60e51b8152905163ed6ff76091600480820192602092909190829003018186803b15801561241657600080fd5b505afa15801561242a573d6000803e3d6000fd5b505050506040513d602081101561244057600080fd5b5051603480546001600160a01b0319166001600160a01b039092169190911790558015612472576001805460ff191690555b505050565b6035546001600160a01b031681565b6034546001600160a01b031681565b6000828201838110156124ef576040805162461bcd60e51b815260206004820152601b60248201527f536166654d6174683a206164646974696f6e206f766572666c6f770000000000604482015290519081900360640190fd5b90505b92915050565b600082612507575060006124f2565b8282028284828161251457fe5b04146124ef5760405162461bcd60e51b81526004018080602001828103825260218152602001806128c46021913960400191505060405180910390fd5b60008082116125a7576040805162461bcd60e51b815260206004820152601a60248201527f536166654d6174683a206469766973696f6e206279207a65726f000000000000604482015290519081900360640190fd5b60008284816125b257fe5b04949350505050565b6000836125cb5750600019612602565b6125ff6125de858563ffffffff61249516565b6125f360646105df898763ffffffff6124f816565b9063ffffffff6127d416565b90505b949350505050565b600082821115612661576040805162461bcd60e51b815260206004820152601e60248201527f536166654d6174683a207375627472616374696f6e206f766572666c6f770000604482015290519081900360640190fd5b50900390565b60008061267f60646105df888663ffffffff6124f816565b905084811015612693576000915050612602565b6126b36126a6868663ffffffff61249516565b829063ffffffff61260a16565b90506000603560009054906101000a90046001600160a01b03166001600160a01b031663fbeefc3c6040518163ffffffff1660e01b815260040160206040518083038186803b15801561270557600080fd5b505afa158015612719573d6000803e3d6000fd5b505050506040513d602081101561272f57600080fd5b505160408051630e563a7d60e41b81523360048201526024810185905290516001600160a01b039092169163e563a7d091604480820192602092909190829003018186803b15801561278057600080fd5b505afa158015612794573d6000803e3d6000fd5b505050506040513d60208110156127aa57600080fd5b505190506127be828263ffffffff61260a16565b979650505050505050565b600190565b303b1590565b600060028204612602836105df6127f387670de0b6b3a76400006124f8565b849063ffffffff61249516565b604051806101600160405280600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160001515815260200160001515815260200160006001600160a01b031681525090565b60405180610160016040528060008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600015158152509056fe536166654d6174683a206d756c7469706c69636174696f6e206f766572666c6f77436f6e747261637420696e7374616e63652068617320616c7265616479206265656e20696e697469616c697a6564a265627a7a72315820adc898c6134d3301a904758715b45e2e49d5fe7389a407ad9602cf2edcb3049e64736f6c634300050e0032";
