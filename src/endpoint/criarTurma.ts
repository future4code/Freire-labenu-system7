import { Request, Response } from "express";
import connection from "../connection";
//import types from "../types/types"

export const criarTurma = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const id = Date.now().toString();
    const { nome, modulo } = req.body;

    await connection("turma")
    .insert({ id, nome, modulo });

    res.status(200).send("Turma cadastrada com sucesso");

  } catch (error: any) {
    
    res.status(500).send("Não foi possível cadastrar a turma");
  }
};

console.log("teste");
