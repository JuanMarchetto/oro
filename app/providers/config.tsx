import React, { createContext, useContext } from "react";

export const ConfigContext = createContext<
  | {
      priorityFees: string;
      slippage: string;
      rpc: string;
      customRpc: string;
    }
  | undefined
>(undefined);

export function UseConfigContext() {
  const config = useContext(ConfigContext);
  if (config === undefined) {
    throw new Error(
      "ConfigUserContext must be used within a ConfigContextProvider"
    );
  }

  return config;
}
