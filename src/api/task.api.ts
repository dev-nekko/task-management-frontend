import { CreateTaskDTO } from "./dto/create-task.dto";
import { TaskDTO } from "./dto/task.dto";
import { UpdateTaskDTO } from "./dto/update-task.dto";

export class TaskAPI {
    static async getAll(): Promise<TaskDTO[]> {
        const resp = await fetch(`http://localhost:3000/task`,{
            method:"GET"
        })

        const data = await resp.json();

        return data;
    }

    public static async createOne(createRequest: CreateTaskDTO){
        const resp = await fetch(`http://localhost:3000/task`,{
            method: "POST",
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(createRequest)
        })

        const data = await resp.json();

        return data;

    }

    public static async deleteOne(taskId: number){
       await fetch(`http://localhost:3000/task/${taskId}`,{
            method: "DELETE",
        })
    }

    public static async updateOne(taskId: number, updateRequest: UpdateTaskDTO){
        const resp = await fetch(`http://localhost:3000/task/${taskId}`,{
            method: "PUT",
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updateRequest)
        })

        const data = await resp.json();

        return data;
     }


}