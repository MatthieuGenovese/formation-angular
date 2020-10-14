import { Role } from '../enums/role.enum';

export interface UserI {
  id: number;
  username: string;
  password: string;
  role : Role;
}
