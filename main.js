let input = document.querySelector("input.wr")
let add = document.querySelector("input[type = submit]")
let tasksContainer = document.querySelector(".tasks")
let noTasks = document.querySelector(".no-tasks")
let tasksCount = document.querySelector(".tasks-num span")
let completingCount = document.querySelector(".tasks-completed span")
let error1 = document.querySelector(".error.one")
let error2 = document.querySelector(".error.two")
let errorBT = document.querySelector(".error.one button")
let errorBT2 = document.querySelector(".error.two button")
let deleteAllBT = document.querySelector(".delete-all")
let completeAllBT = document.querySelector(".complete-all")




add.addEventListener("click" , function(){
    let errorFinder = function(){
        let taskList =[]
        let taskSpan = Array.from(document.querySelectorAll(".tasks .task span"))
        for(let i = 0; i < taskSpan.length; i++){
            if(taskSpan[i].parentNode.classList.contains("task")){
                taskList.push(taskSpan[i].innerHTML)
            }
        }
        console.log(taskList)
        if(input.value !== ""){
        for (let i = 0; i < taskList.length; i++){
            if(input.value === taskList[i]){
                if(error2.classList.contains("show")){
                    error2.classList.add("vibr")
                }
                if(error2.classList.contains("vibr")){
                    setTimeout(function(){
                    error2.classList.remove("vibr")
                    },1500)
                    error2.classList.add("vibr")
                }
                error2.classList.add("show")
                input.value = ""
                return
                }else{
                    error2.classList.remove("show")
                }
        }
        error1.classList.remove("show")
        error1.classList.remove("vibr")
        noTasks.classList.add("hide")
        let task = document.createElement("div")
        task.classList.add("task")
        let taskName = document.createElement("span")
        taskName.textContent = input.value
        tasksContainer.appendChild(task)
        let del = document.createElement("button")
        del.textContent = "Delete"
        del.classList.add("delete")
        input.value = ""
        task.appendChild(taskName)
        task.appendChild(del)
    }else{
        if(error1.classList.contains("show")){
            error1.classList.add("vibr")
        }
        if(error1.classList.contains("vibr")){
            setTimeout(function(){
                error1.classList.remove("vibr")
            },1500)
            error1.classList.add("vibr")
        }
        // if(error.classList.contains("vibrR")){
        //     error.classList.add("vibr")
        // }
        error1.classList.add("show")
    }
    }
    errorFinder()
    calculateTasks()
})
errorBT.addEventListener("click" , function(){
    error1.classList.remove("show")
    error1.classList.remove("vibr")
})
errorBT2.addEventListener("click" , function(){
    error2.classList.remove("show")
    error2.classList.remove("vibr")
})

document.addEventListener("click" , function(e){
    if (e.target.classList.contains("delete")){
        e.target.parentNode.remove()
        let childList = tasksContainer.children
        if(childList.length == 2){
            noTasks.classList.remove("hide")
        }
        calculateTasks()
    }
    if (e.target.classList.contains("task")){
        e.target.classList.toggle("completed")
    }
    if(e.target.classList.contains("delete-all")){
        let childList = []
        let list = Array.from(tasksContainer.children)
        for(let i = 0; i < list.length; i++){
            if(list[i].classList.contains("task")){
                childList.push(list[i])
            }
        }
        for(let i = 0; i < childList.length ; i++){
            childList[i].remove()
            noTasks.classList.remove("hide")
        }
        calculateTasks()
    }
    if(e.target.classList.contains("complete-all")){
        let childList = []
        let list = Array.from(tasksContainer.children)
        for(let i = 0; i < list.length; i++){
            if(list[i].classList.contains("task")){
                childList.push(list[i])
            }
        }
        for(let i = 0; i < childList.length ; i++){
            childList[i].classList.toggle("completed")
        }
    }
    calculateTasks()
})

calculateTasks = function(){
    let childrenList = Array.from(tasksContainer.children)
    let taskList = []
    let completedList = []
    for(let i = 0; i < childrenList.length ; i++){
        if(childrenList[i].classList.contains("task")){
            taskList.push(childrenList[i])
        }
        if(childrenList[i].classList.contains("completed")){
            completedList.push(childrenList[i])
        }
    }
    tasksCount.innerHTML = taskList.length
    completingCount.innerHTML = completedList.length
}

