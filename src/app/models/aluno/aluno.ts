import { Turma } from "../turma/turma";

export class Aluno {
    id!: number;
    nome!: string;
    cpf!: string;
    telefone!: string;
    turma!: Turma;
    cadastroCompleto!: Boolean;
}
