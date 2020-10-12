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
  CallOverrides,
} from "@ethersproject/contracts";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";

interface UintStorageInterface extends ethers.utils.Interface {
  functions: {
    "getUint(bytes32)": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "getUint", values: [BytesLike]): string;

  decodeFunctionResult(functionFragment: "getUint", data: BytesLike): Result;

  events: {};
}

export class UintStorage extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: UintStorageInterface;

  functions: {
    getUint(
      _key: BytesLike,
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    "getUint(bytes32)"(
      _key: BytesLike,
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;
  };

  getUint(_key: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;

  "getUint(bytes32)"(
    _key: BytesLike,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  callStatic: {
    getUint(_key: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;

    "getUint(bytes32)"(
      _key: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  filters: {};

  estimateGas: {
    getUint(_key: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;

    "getUint(bytes32)"(
      _key: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    getUint(
      _key: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getUint(bytes32)"(
      _key: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
