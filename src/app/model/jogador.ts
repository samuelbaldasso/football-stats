import { Pais } from './pais';
export interface Jogador{
   id: string;
   firstname: string;
   lastname: string;
   birthday: Date;
   age: number;
   weight: string;
   height: string;
   img: string;
   country: Pais;
}
