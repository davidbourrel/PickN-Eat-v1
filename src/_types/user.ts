export interface userLoginInterface {
  email: string;
  password: any;
}

export enum userRoleEnum {
  admin = '1',
  user = '2',
}

export interface userInformationInterface {
  id: string;
  first_name: string;
  last_name: string;
  age: number;
  email: string;
  hashedPassword: any;
  roles_id: string;
}
