import { TaskStatus } from "./task.dto";

export interface UpdateTaskDTO{
    title?:string;
    description?: string;
    status?: TaskStatus;
}