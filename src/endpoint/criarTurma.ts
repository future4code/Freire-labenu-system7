import { Request, Response } from "express";
import createTurma from "../data/createTurma";
import { getTurma } from "../services/getTurma";


export const criarTurma = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const id = req.params.id

    const turma = await getTurma(id)
    if (!turma || undefined){
      throw new Error("ID inválido")
    }await createTurma(turma)
    res.status(200).send("Turma cadastrada com sucesso");

  } catch (error: any) {
    
    res.status(500).send("Não foi possível cadastrar a turma");
  }
};

console.log("teste");
