import { useAtom } from 'jotai';
import React, { FC, MouseEvent, useCallback } from 'react';
import { useWalletPassThrough } from 'src/contexts/WalletPassthroughProvider';
import { appProps } from 'src/library';

export const WalletModalButton: FC<{ setIsWalletModalOpen(toggle: boolean): void }> = ({ setIsWalletModalOpen }) => {
  const { connecting } = useWalletPassThrough();
  const [atom] = useAtom(appProps);

  const handleClick = useCallback(
    (event: MouseEvent<HTMLButtonElement>) => {
      if (atom?.enableWalletPassthrough && atom?.onRequestConnectWallet) {
        atom.onRequestConnectWallet();
      } else {
        setIsWalletModalOpen(true);
      }
    },
    [setIsWalletModalOpen, atom],
  );

  return (
    <button
      type="button"
      className="py-2 px-3 h-7 flex items-center rounded-2xl text-xs dark:bg-dark-700/70 bg-light-400 text-grey-400 border border-transparent dark:hover:!border-purple-500/80 hover:!border-purple-300/80 hover:!text-purple-500"
      onClick={handleClick}
    >
      {connecting ? (
        <span>
          <span>Connecting...</span>
        </span>
      ) : (
        <span>
          <span>Connect Wallet</span>
        </span>
      )}
    </button>
  );
};
