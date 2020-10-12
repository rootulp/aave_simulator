/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
} from "ethers";
import {
  Contract,
  ContractTransaction,
  PayableOverrides,
  CallOverrides,
} from "@ethersproject/contracts";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";

interface IKyberNetworkProxyInterfaceInterface extends ethers.utils.Interface {
  functions: {
    "maxGasPrice()": FunctionFragment;
    "getUserCapInWei(address)": FunctionFragment;
    "getUserCapInTokenWei(address,address)": FunctionFragment;
    "enabled()": FunctionFragment;
    "info(bytes32)": FunctionFragment;
    "getExpectedRate(address,address,uint256)": FunctionFragment;
    "tradeWithHint(address,uint256,address,address,uint256,uint256,address,bytes)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "maxGasPrice",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getUserCapInWei",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "getUserCapInTokenWei",
    values: [string, string]
  ): string;
  encodeFunctionData(functionFragment: "enabled", values?: undefined): string;
  encodeFunctionData(functionFragment: "info", values: [BytesLike]): string;
  encodeFunctionData(
    functionFragment: "getExpectedRate",
    values: [string, string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "tradeWithHint",
    values: [
      string,
      BigNumberish,
      string,
      string,
      BigNumberish,
      BigNumberish,
      string,
      BytesLike
    ]
  ): string;

  decodeFunctionResult(
    functionFragment: "maxGasPrice",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getUserCapInWei",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getUserCapInTokenWei",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "enabled", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "info", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getExpectedRate",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "tradeWithHint",
    data: BytesLike
  ): Result;

  events: {};
}

export class IKyberNetworkProxyInterface extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: IKyberNetworkProxyInterfaceInterface;

  functions: {
    maxGasPrice(
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    "maxGasPrice()"(
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    getUserCapInWei(
      user: string,
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    "getUserCapInWei(address)"(
      user: string,
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    getUserCapInTokenWei(
      user: string,
      token: string,
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    "getUserCapInTokenWei(address,address)"(
      user: string,
      token: string,
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    enabled(
      overrides?: CallOverrides
    ): Promise<{
      0: boolean;
    }>;

    "enabled()"(
      overrides?: CallOverrides
    ): Promise<{
      0: boolean;
    }>;

    info(
      id: BytesLike,
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    "info(bytes32)"(
      id: BytesLike,
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    getExpectedRate(
      src: string,
      dest: string,
      srcQty: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      expectedRate: BigNumber;
      slippageRate: BigNumber;
      0: BigNumber;
      1: BigNumber;
    }>;

    "getExpectedRate(address,address,uint256)"(
      src: string,
      dest: string,
      srcQty: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      expectedRate: BigNumber;
      slippageRate: BigNumber;
      0: BigNumber;
      1: BigNumber;
    }>;

    tradeWithHint(
      src: string,
      srcAmount: BigNumberish,
      dest: string,
      destAddress: string,
      maxDestAmount: BigNumberish,
      minConversionRate: BigNumberish,
      walletId: string,
      hint: BytesLike,
      overrides?: PayableOverrides
    ): Promise<ContractTransaction>;

    "tradeWithHint(address,uint256,address,address,uint256,uint256,address,bytes)"(
      src: string,
      srcAmount: BigNumberish,
      dest: string,
      destAddress: string,
      maxDestAmount: BigNumberish,
      minConversionRate: BigNumberish,
      walletId: string,
      hint: BytesLike,
      overrides?: PayableOverrides
    ): Promise<ContractTransaction>;
  };

  maxGasPrice(overrides?: CallOverrides): Promise<BigNumber>;

  "maxGasPrice()"(overrides?: CallOverrides): Promise<BigNumber>;

  getUserCapInWei(user: string, overrides?: CallOverrides): Promise<BigNumber>;

  "getUserCapInWei(address)"(
    user: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getUserCapInTokenWei(
    user: string,
    token: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  "getUserCapInTokenWei(address,address)"(
    user: string,
    token: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  enabled(overrides?: CallOverrides): Promise<boolean>;

  "enabled()"(overrides?: CallOverrides): Promise<boolean>;

  info(id: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;

  "info(bytes32)"(id: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;

  getExpectedRate(
    src: string,
    dest: string,
    srcQty: BigNumberish,
    overrides?: CallOverrides
  ): Promise<{
    expectedRate: BigNumber;
    slippageRate: BigNumber;
    0: BigNumber;
    1: BigNumber;
  }>;

  "getExpectedRate(address,address,uint256)"(
    src: string,
    dest: string,
    srcQty: BigNumberish,
    overrides?: CallOverrides
  ): Promise<{
    expectedRate: BigNumber;
    slippageRate: BigNumber;
    0: BigNumber;
    1: BigNumber;
  }>;

  tradeWithHint(
    src: string,
    srcAmount: BigNumberish,
    dest: string,
    destAddress: string,
    maxDestAmount: BigNumberish,
    minConversionRate: BigNumberish,
    walletId: string,
    hint: BytesLike,
    overrides?: PayableOverrides
  ): Promise<ContractTransaction>;

  "tradeWithHint(address,uint256,address,address,uint256,uint256,address,bytes)"(
    src: string,
    srcAmount: BigNumberish,
    dest: string,
    destAddress: string,
    maxDestAmount: BigNumberish,
    minConversionRate: BigNumberish,
    walletId: string,
    hint: BytesLike,
    overrides?: PayableOverrides
  ): Promise<ContractTransaction>;

  callStatic: {
    maxGasPrice(overrides?: CallOverrides): Promise<BigNumber>;

    "maxGasPrice()"(overrides?: CallOverrides): Promise<BigNumber>;

    getUserCapInWei(
      user: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getUserCapInWei(address)"(
      user: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getUserCapInTokenWei(
      user: string,
      token: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getUserCapInTokenWei(address,address)"(
      user: string,
      token: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    enabled(overrides?: CallOverrides): Promise<boolean>;

    "enabled()"(overrides?: CallOverrides): Promise<boolean>;

    info(id: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;

    "info(bytes32)"(
      id: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getExpectedRate(
      src: string,
      dest: string,
      srcQty: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      expectedRate: BigNumber;
      slippageRate: BigNumber;
      0: BigNumber;
      1: BigNumber;
    }>;

    "getExpectedRate(address,address,uint256)"(
      src: string,
      dest: string,
      srcQty: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      expectedRate: BigNumber;
      slippageRate: BigNumber;
      0: BigNumber;
      1: BigNumber;
    }>;

    tradeWithHint(
      src: string,
      srcAmount: BigNumberish,
      dest: string,
      destAddress: string,
      maxDestAmount: BigNumberish,
      minConversionRate: BigNumberish,
      walletId: string,
      hint: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "tradeWithHint(address,uint256,address,address,uint256,uint256,address,bytes)"(
      src: string,
      srcAmount: BigNumberish,
      dest: string,
      destAddress: string,
      maxDestAmount: BigNumberish,
      minConversionRate: BigNumberish,
      walletId: string,
      hint: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  filters: {};

  estimateGas: {
    maxGasPrice(overrides?: CallOverrides): Promise<BigNumber>;

    "maxGasPrice()"(overrides?: CallOverrides): Promise<BigNumber>;

    getUserCapInWei(
      user: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getUserCapInWei(address)"(
      user: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getUserCapInTokenWei(
      user: string,
      token: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getUserCapInTokenWei(address,address)"(
      user: string,
      token: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    enabled(overrides?: CallOverrides): Promise<BigNumber>;

    "enabled()"(overrides?: CallOverrides): Promise<BigNumber>;

    info(id: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;

    "info(bytes32)"(
      id: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getExpectedRate(
      src: string,
      dest: string,
      srcQty: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getExpectedRate(address,address,uint256)"(
      src: string,
      dest: string,
      srcQty: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    tradeWithHint(
      src: string,
      srcAmount: BigNumberish,
      dest: string,
      destAddress: string,
      maxDestAmount: BigNumberish,
      minConversionRate: BigNumberish,
      walletId: string,
      hint: BytesLike,
      overrides?: PayableOverrides
    ): Promise<BigNumber>;

    "tradeWithHint(address,uint256,address,address,uint256,uint256,address,bytes)"(
      src: string,
      srcAmount: BigNumberish,
      dest: string,
      destAddress: string,
      maxDestAmount: BigNumberish,
      minConversionRate: BigNumberish,
      walletId: string,
      hint: BytesLike,
      overrides?: PayableOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    maxGasPrice(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "maxGasPrice()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getUserCapInWei(
      user: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getUserCapInWei(address)"(
      user: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getUserCapInTokenWei(
      user: string,
      token: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getUserCapInTokenWei(address,address)"(
      user: string,
      token: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    enabled(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "enabled()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    info(
      id: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "info(bytes32)"(
      id: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getExpectedRate(
      src: string,
      dest: string,
      srcQty: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getExpectedRate(address,address,uint256)"(
      src: string,
      dest: string,
      srcQty: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    tradeWithHint(
      src: string,
      srcAmount: BigNumberish,
      dest: string,
      destAddress: string,
      maxDestAmount: BigNumberish,
      minConversionRate: BigNumberish,
      walletId: string,
      hint: BytesLike,
      overrides?: PayableOverrides
    ): Promise<PopulatedTransaction>;

    "tradeWithHint(address,uint256,address,address,uint256,uint256,address,bytes)"(
      src: string,
      srcAmount: BigNumberish,
      dest: string,
      destAddress: string,
      maxDestAmount: BigNumberish,
      minConversionRate: BigNumberish,
      walletId: string,
      hint: BytesLike,
      overrides?: PayableOverrides
    ): Promise<PopulatedTransaction>;
  };
}
