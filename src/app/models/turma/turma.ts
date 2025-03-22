import { Aluno } from "../aluno/aluno";
import { Curso } from "../curso/curso";
import { Professor } from "../professor/professor";

export class Turma {
    id!: number;
    nome!: string;
    semestre!: string;
    ano!: string;
    turno!: string;
    alunos!: Aluno;
    professores!: Professor;
    curso!: Curso;
}
