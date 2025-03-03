let tasks=[];
function addTask() 
{
    const taskName = document.getElementById("name").value.trim();
    const priority = document.getElementById("priority").value.trim();
    
    //sort by priority
    const task ={
        name: taskName,
        priority: parseInt(priority)
        
    };

    tasks.push(task);
    tasks.sort((a,b) => a.priority - b.priority);
    document.getElementById("name").value = "";
    document.getElementById("priority").value = "";
    displaytask();

}

function displaytask()
{
    const taskList = document.getElementById("taskList");
    taskList.innerHTML ="";

    tasks.forEach(task =>{
        const listItem = document.createElement("li");
        listItem.textContent = `${task.name} - Priority: ${task.priority}`;

        if(task.priority<=3)
        {
            listItem.style.backgroundColor="#70ed76";
        }
        else if(task.priority<= 6)
        {
            listItem.style.backgroundColor ="#edc570 ";
        }
        else
        {
            listItem.style.backgroundColor="#ed7b70";
        }
        taskList.appendChild(listItem);
    });
}