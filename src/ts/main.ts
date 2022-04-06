import { App } from "./models/App";

let t = new App("Bli klar med JS in inlämning!", false);
let t2 = new App("Ring elektriker", true);
let t3 = new App("Betala riskettan", true);
let t4 = new App("Köp mjölk", false);

let tasklist = [t, t2, t3, t4];

let ul = document.getElementById("To-do List");
let list = document.getElementById("To-do List");
list.innerHTML = "Todo"; 
document.body.appendChild(list);







