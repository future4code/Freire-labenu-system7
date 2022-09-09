export type Estudante = {
    id: string,
    nome: string,
    email: string,
    data_nasc: Date,
    turma_id: string
}

export type Turma = {
    id: string,
    nome: string,
    modulo: string

}

export type Docente = {
    id: string,
    nome: string,
    email: string,
    data_nasc: Date,
    turma_id: string
}