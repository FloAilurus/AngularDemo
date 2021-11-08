export interface Utilisateur {
  name: string;
  age: number;
  action: (param: string) => void;
}
