export interface ITask{
    checked:boolean,
    important:boolean,
    text:string,
    date?:string
}

export const TASKS: ITask[] = [
    {checked: false, important:false, text: "Hit the gym", date:"01.04.2023"},
    {checked: true, important:true, text: "Pay bills"},
    {checked: false, important:false, text: "Meet John"},
    {checked: false, important:false, text: "Buy eggs",  date:"29.03.2023"},
    {checked: true, important:false, text: "Read a book"},
    {checked: false, important:false, text: "Organize office"},
    {checked: false, important:false, text: "Eat dinner"},
    {checked: false, important:true, text: "Buy apples", date:"05.03.2023"},
    {checked: false, important:true, text: "Meet George"},
    {checked: false, important:false, text: "Feed the cat"},
    {checked: true, important:false, text: "Write a letter"}, 
    {checked: false, important:false, text: "Run 1 km", date: "15.01.2022"},
]