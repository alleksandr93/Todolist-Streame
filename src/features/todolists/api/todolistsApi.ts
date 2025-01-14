import axios from "axios"
import type { Todolist } from "./todolistsApi.types"
import { instance } from "common/instance/instance"
import type { BaseResponse } from "common/types"

export const todolistsApi = {
  getTodolists: () => {
    return instance.get<Todolist[]>("todo-lists")
  },
  createTodolist: (title: string) => {
    return instance.post<BaseResponse<{ item: Todolist }>>("todo-lists", { title })
  },
  deleteTodolist: (id: string) => {
    return instance.delete<BaseResponse>(`todo-lists/${id}`)
  },
  updateTodolist: (arg: { id: string; title: string }) => {
    const { id, title } = arg
    return instance.put<BaseResponse>(`todo-lists/${id}`, { title })
  },
}
