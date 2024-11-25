import { DatePipe } from "@angular/common";

export interface ITask{
    id:number;
    completed:boolean,
    important?:boolean,
    title:string,
    date?:Date
}

export const TASKS: ITask[] = [
    {id:1,completed: false, important:false, title: "Hit the gym", date: new Date("2023.04.01")},
    {id:2,completed: true, important:true, title: "Pay bills"},
    {id:3,completed: false, important:false, title: "Meet John"},
    {id:4,completed: false, important:false, title: "Buy eggs",  date: new Date("2023.03.29")},
    {id:5,completed: true, important:false, title: "Read a book"},
    {id:6,completed: false, important:false, title: "Organize office"},
    {id:7,completed: false, important:false, title: "Eat dinner"},
    {id:8,completed: false, important:true, title: "Buy apples", date: new Date("2023.03.5")},
    {id:9,completed: false, important:true, title: "Meet George"},
    {id:10,completed: false, important:false, title: "Feed the cat"},
    {id:11,completed: true, important:false, title: "Write a letter"}, 
    {id:12,completed: false, important:false, title: "Run 1 km", date: new Date("2022.01.15")},
]