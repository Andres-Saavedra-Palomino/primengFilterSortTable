import { Status } from './status.model';

export interface User {
  username: string;
  fullname: string;
  email: string;
  cellphoneNumber: string;
  status: Partial<Status>;
}
