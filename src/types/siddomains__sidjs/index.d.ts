declare module '@siddomains/sidjs' {
  import { Provider, ExternalProvider } from '@ethersproject/providers';

  export type SIDOptions =
    | {
        provider: Provider | ExternalProvider;
        networkId: number;
      }
    | {
        provider: Provider | ExternalProvider;
        sidAddress: string;
      };

  // eslint-disable-next-line no-restricted-syntax
  export default class SID {
    constructor(options: SIDOptions);
    getName(address: string): Promise<{ name: string }>;
  }

  export function getSidAddress(networkId: string): string | undefined;
}
