let mTask = [];   
const inputel = document.getElementById("input-el");
const addbtn = document.getElementById("add-btn");
const formel = document.getElementById("form-el");
const deletebtn = document.getElementById("delete-btn");
const localStorageVar = JSON.parse(localStorage.getItem("mTask")); 

if (localStorageVar) {
    mTask = localStorageVar;
    render(mTask);
}

addbtn.addEventListener("click", function() {    
    if (inputel.value.trim() !== "") {   
        mTask.push(inputel.value.trim());
        inputel.value = "";
        localStorage.setItem("mTask", JSON.stringify(mTask));
        render(mTask);
    }
});

function render(task) {
    console.log(task)
    let list = "";
    for (let i = 0; i < task.length; i++) {
        list += ` 
            <li>
                <input type="checkbox" id="${i}">
                ${task[i]}
                <button onclick="delThis(${i})">
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed">
                        <path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"/>
                    </svg>
                </button>
            </li>
        `;  
    }
    formel.innerHTML = list;
}

deletebtn.addEventListener("dblclick", function() {
    localStorage.clear();
    mTask = [];
    render(mTask);
});

function delThis(index) {
    mTask.splice(index, 1);  // Remove the task from the array
    localStorage.setItem("mTask", JSON.stringify(mTask)); // Update localStorage
    render(mTask);
}
