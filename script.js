tasks=[{id:1,taskName:"Task 1",discription:'A quick description about the task'},
{id:2,taskName:"Task 2",discription:'A quick description about the task'}]
// Show All Task //
tasks.forEach(element => {
                    divParent = document.createElement('div');
                    divParent.className = 'jumbo-bar jumbotron ';
                    divParent.innerHTML=`
                                        <h1>${element.taskName}</h1>
                                        <p>${element.discription}</p>
                                        <button class='btn btn-warning' onclick='editTask();'>Edit</button>
                                        <button class='btn btn-warning' onclick='deleteTask();'>Delete</button>
                                        `;
                    console.log(element);
                    document.getElementById('show').appendChild(divParent);
});

// Add New Task //
function addTask() {
    let taskTitle = document.getElementById("taskTitle").value;
    let taskDescription = document.getElementById("taskDesc").value;
    let newTask = {id:task.length+1, taskName:taskTitle, description:taskDescription};
    tasks.push(newTask);
}