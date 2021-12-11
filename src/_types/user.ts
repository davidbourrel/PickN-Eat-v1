export interface userLoginInterface {
  email: string;
  password: any;
}

export enum userRolesEnum {
  admin = 'admin',
  user = 'user',
}

export interface userInformationInterface {
  id: string;
  first_name: string;
  last_name: string;
  age: number;
  email: string;
  hashedPassword: any;
  roles_id: string;
  role: string;
}
