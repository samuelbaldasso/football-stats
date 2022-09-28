import { Pais } from './pais';

export interface Times{
    id: number;
    name: string;
    shortCode: string;
    logo: string;
    country: Pais;
}
