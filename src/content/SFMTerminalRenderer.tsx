import { atom, createStore } from 'jotai';
import React from 'react';
import JupiterApp from 'src/components/Jupiter';
import { ContextProvider } from 'src/contexts/ContextProvider';
import { ScreenProvider } from 'src/contexts/ScreenProvider';
import { TokenContextProvider } from 'src/contexts/TokenContextProvider';
import WalletPassthroughProvider from 'src/contexts/WalletPassthroughProvider';
import { IInit } from 'src/types';

const SFMTerminalRenderer: React.FC<IInit> = (props) => {
  const store = createStore();
  const appProps = atom<IInit | undefined>(undefined);
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

SFMTerminalRenderer.displayName = 'SFMTerminalRenderer';

export default SFMTerminalRenderer;
