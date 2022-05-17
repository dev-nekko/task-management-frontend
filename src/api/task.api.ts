import { TaskDTO } from "./dto/task.dto";

export class TaskAPI {
    static async getAll(): Promise<TaskDTO[]> {
        const resp = await fetch("http://localhost:3000/task",{
            method:"GET"
        })

        const data = await resp.json();

        return data;
    }
}