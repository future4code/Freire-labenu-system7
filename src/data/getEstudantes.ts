import { Estudante } from "../types/types";
import connection from "./connection";

export default async function getEstudantes() {
    const result = await connection("estudante")
    .select("*")
    return result
}