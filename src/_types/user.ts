export interface userLoginInterface {
  email: string;
  password: any;
}

export interface userInformationInterface {
  id: number;
  email: string;
  last_name: string;
  first_name: string;
  age: number;
  hashedPassword: any;
  roles_id: number;
}
