document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("taskInputBtn").addEventListener("click", function() {
        var taskTitle = document.getElementById("taskInput").value;
        
        if(taskTitle.trim() === "") {
            alert("Deyer daxil edin!");
            return;
        }
        
        var newTask = document.createElement("p");
        newTask.textContent = taskTitle;
        newTask.classList.add("task");
        
        var todoList = document.querySelector(".tasksToDo .taskItemContainer");
        todoList.appendChild(newTask);
        
        document.getElementById("taskInput").value = "";
    });
    

    document.querySelector(".rightArrow").addEventListener("click", function() {
        var todoList = document.querySelector(".tasksToDo .taskItemContainer");
        var tasks = todoList.querySelectorAll(".task");
        
        if(tasks.length === 0) {
            alert("Görülücək işlər yoxdur!");
            return;
        }
        
        var taskToMove = tasks[0];
        todoList.removeChild(taskToMove);
        
        var inProcessList = document.querySelector(".tasksInProcess .taskItemContainer");
        inProcessList.appendChild(taskToMove);
    });

});
