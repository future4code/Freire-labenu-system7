import axios from "axios";
import { Request, Response } from "express";
import { Turma } from "../types/types";

export const getTurma = async (id:string): Promise<Turma | undefined> =>{
    try{
        const result = await axios.get(`http://localhost:3003/turma/${id}/json`)
        const turma: Turma = {
            id: result.data.id,
            nome: result.data.nome,
            modulo: result.data.modulo
        }
        return turma
    }catch(error:any){
        return undefined
    }
}