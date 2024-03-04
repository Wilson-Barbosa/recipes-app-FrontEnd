export interface Register {
    id?: number;
    name: string;
    email: string;
    password: string;
    repeatedPassword?: string;
}