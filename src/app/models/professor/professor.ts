import { Turma } from "../turma/turma";

export class Professor {
    id!: number;
    nome!: string;
    cpf!: string;
    email!: string;
    especialidade!: string;
    turmas!: Turma;
}
