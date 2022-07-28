let initial = 0;
let input = document.getElementById('inputCheck');
let btnAdd = document.getElementById('btn-add');
let main = document.getElementById('areaList');

function addTask() {

    let valueInput = input.value;

    if (valueInput !== "" && valueInput !== null && valueInput !== undefined) {

        ++initial;

        let newItem = ` <div id="${initial}" class="task">
<div onclick="newTask(${initial})" class="item-icon">
    <i id="iconBox${initial}"  class="mdi mdi-checkbox-blank-outline"></i>
</div>
<div onclick="newTask(${initial})" class="item-name">
${valueInput}
</div>
<div class="item-button">
    <button onclick="deletar(${initial})" class="delete"> <i class="mdi mdi-trash-can"></i> Deletar</button>
</div>
</div>`;

        main.innerHTML += newItem; // Add new item
        input.value = "";  // Reset
        input.focus();

    }
}

function deletar(id) {
    let task = document.getElementById(id);
    task.remove();
}

function newTask(id) {
    let item = document.getElementById(id);
    let classe = item.getAttribute("class");
    console.log(classe);

    if (classe == "task") {
        item.classList.add("taskCheck")

        let icone = document.getElementById("iconBox" + id);
        icone.classList.remove("mdi-checkbox-blank-outline");
        icone.classList.add("mdi-checkbox-intermediate");

        item.parentNode.appendChild(item);
    } else {
        item.classList.remove("taskCheck");

        let icone = document.getElementById("iconBox" + id);
        icone.classList.remove("mdi-checkbox-intermediate");
        icone.classList.add("mdi-checkbox-blank-outline");
    }
}

input.addEventListener("keyup", function (event) {  // Input enter (13)
    if (event.keyCode === 13) {
        event.preventDefault();
        btnAdd.click();
    }
});
