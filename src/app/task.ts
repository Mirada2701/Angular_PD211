import { DatePipe } from "@angular/common";

export interface ITask{
    id:number;
    checked:boolean,
    important:boolean,
    text:string,
    date?:Date
}

export const TASKS: ITask[] = [
    {id:1,checked: false, important:false, text: "Hit the gym", date: new Date("2023.04.01")},
    {id:2,checked: true, important:true, text: "Pay bills"},
    {id:3,checked: false, important:false, text: "Meet John"},
    {id:4,checked: false, important:false, text: "Buy eggs",  date: new Date("2023.03.29")},
    {id:5,checked: true, important:false, text: "Read a book"},
    {id:6,checked: false, important:false, text: "Organize office"},
    {id:7,checked: false, important:false, text: "Eat dinner"},
    {id:8,checked: false, important:true, text: "Buy apples", date: new Date("2023.03.5")},
    {id:9,checked: false, important:true, text: "Meet George"},
    {id:10,checked: false, important:false, text: "Feed the cat"},
    {id:11,checked: true, important:false, text: "Write a letter"}, 
    {id:12,checked: false, important:false, text: "Run 1 km", date: new Date("2022.01.15")},
]