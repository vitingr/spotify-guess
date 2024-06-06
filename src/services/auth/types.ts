import { GoogleProfile } from 'next-auth/providers/google';

export interface GoogleProviderProps extends GoogleProfile {
  clientId?: string
}
