import { Guest } from './guest';

export interface Registrations {
  id: number;
  guest: Guest;
  roomId: number;
  active: boolean;
}
