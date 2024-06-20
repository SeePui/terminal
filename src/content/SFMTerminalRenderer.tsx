import { atom, createStore } from 'jotai';
import React from 'react';
import { JupiterApp } from 'src/components';
import { ContextProvider } from 'src/contexts/ContextProvider';
import { ScreenProvider } from 'src/contexts/ScreenProvider';
import { TokenContextProvider } from 'src/contexts/TokenContextProvider';
import WalletPassthroughProvider from 'src/contexts/WalletPassthroughProvider';
import { IInit } from 'types';

// Create a store
const store = createStore();

// Define and export the appProps atom
export const appProps = atom<IInit | undefined>(undefined);

// Define and export the SolanafmTerminalRenderer component
export const SolanafmTerminalRenderer: React.FC<IInit> = (props) => {
  // Set the appProps in the store
  store.set(appProps, { ...props });

  return (
    <ContextProvider {...props}>
      <WalletPassthroughProvider>
        <TokenContextProvider {...props}>
          <ScreenProvider>
            <JupiterApp {...props} />
          </ScreenProvider>
        </TokenContextProvider>
      </WalletPassthroughProvider>
    </ContextProvider>
  );
};