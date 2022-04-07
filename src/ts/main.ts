import { App } from "./models/App";

let t = new App("Bli klar med JS inlämning!", false);
let t2 = new App("Ring elektriker", true);
let t3 = new App("Betala riskettan", true);
let t4 = new App("Köp mjölk", false);
let t5 = new App("Köp nya linser", false);

let taskList: App[] = [t, t2, t3, t4, t5];

let ul = document.getElementById("TodoList");

  let list = document.getElementById("TodoList");
list.innerHTML = "Tasks"; 
document.body.appendChild(list); 

for (let i = 0; i < taskList.length; i++){
    const App = taskList[i];

   let button = document.createElement("button");
    button.addEventListener("click", handleClick);
    button.innerHTML = "Done!"

    let li = document.createElement("li");
    li.setAttribute("class", "d-flex justify-content-between list-group-item");
    li.innerHTML = App.todo ;
    list.appendChild(li);
    li.appendChild(button);


    
    function handleClick(){
        console.log(taskList[i].done);
        if(taskList[i].done ==true){
            taskList[i].done = false
        }

        else {
            taskList[i].done = true;
            li.innerHTML = "";
            li.setAttribute("class", "d-none");
        }; 

    }
}

console.log(taskList);
