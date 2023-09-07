function addListItems() {
    const taskInput = document.getElementById("inputItemsField");
    const taskText = taskInput.value.trim();

    if(taskText === ""){
        alert("Please enter a task!")
        return;
    }
    const tasksList = document.getElementById("gatheredItems");
    const listOfItems = document.createElement("div");

    listOfItems.innerHTML = `<label>
                                <input type="checkbox">
                                <span>${taskText}</span>
                             </label>
                            <button onclick="removeTask(this.parentNode)">Delete</button>`;

    tasksList.appendChild(listOfItems);
    taskInput.value = "";

}

function removeTask(listOfItems){
    const tasksList = document.getElementById("gatheredItems");
    tasksList.removeChild(listOfItems);
}