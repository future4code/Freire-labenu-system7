import { Turma } from "../types/types";
import connection from "./connection";

export default async function createTurma(turma: Turma) {

    const id = Date.now().toString();
    const { nome, modulo } = turma

    await connection("turma").insert({
        id,
        nome,
        modulo
    })
    
}