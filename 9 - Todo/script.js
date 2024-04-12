const exampleData = [
	{
		id: 0,
		task: "A sample task 1",
		isCompleted: true,
	},
	{
		id: 1,
		task: "A sample task 2",
		isCompleted: false,
	},
];

const cardTasks = document.querySelector("div.card__task__container");

// state for the view (all or completed)
let currentView = 'all';

function displayData() {
	// clear the container first
	cardTasks.innerHTML = "";

	// displays all the todos from array
	if (exampleData.length !== 0) {
		exampleData.forEach((data) => {
			displayTemplate(data);
		});
	} else {
		cardTasks.innerHTML += `
        <div class="card__tasks">
        <p>No Items</p>
        </div>
        `;
	}
}

function displayTemplate(data) { 
	cardTasks.innerHTML += `
            <div class="card__tasks">
                <div class="card__desc">
                    <input type="checkbox" name="" id="checkBox" data-id="${
						data.id
					}" ${data.isCompleted === true ? "checked" : ""}>
                    <input class="card__input-box hidden" type="text" name=" ">
                    <p class="card__tasks_desc ${
						data.isCompleted === true ? "completed" : ""
					}" >
                        ${data.task}
                    </p>
                </div>
                <div class="card__btn__group">
                    <!-- edit button -->
                    <button class="card__btn small" id="editBtn" data-id="${
						data.id
					}"><i class='bx bxs-edit-alt'></i></button>
                    <!-- delete button -->
                    <button class="card__btn small" id="deleteBtn" data-id="${
						data.id
					}"><i class='bx bxs-trash'></i></button>
                </div>
            </div>        
            `;
}

function checkView() { 
	if(currentView === 'all') {
		displayData();
	} else { 
		showComplete();
	}
}

// event delegation
cardTasks.addEventListener("click", (e) => {
	const target = e.target;

	// Find the closest ancestor button element
	const deleteButton = target.closest("button#deleteBtn");
	const editBtn = target.closest("button#editBtn");
	const checkbox = target.closest("#checkBox");

	if (deleteButton) {
		// get the id of the btn
		const id = parseInt(deleteButton.dataset.id);
		deleteItem(id);
	} else if (editBtn) {
		console.log("Edit Btn clicked");
	} else if (checkbox) {
		const id = parseInt(checkbox.dataset.id);
		if (checkbox.checked === true) updateCheckItem(id, true);
		else updateCheckItem(id, false);
	}
});

// display initial data
displayData();

const allBtn = document.getElementById("allBtn");
const completeBtn = document.getElementById("completedBtn");

allBtn.addEventListener("click", () => {
	currentView = 'all';
	checkView();
	completeBtn.classList.remove("active");
	allBtn.classList.add("active");
});

completeBtn.addEventListener("click", () => {
	currentView = 'completed';
	checkView();
	allBtn.classList.remove("active");
	completeBtn.classList.add("active");
});

function showComplete() {
	const completedData = exampleData.filter(
		(data) => data.isCompleted === true
	);

	cardTasks.innerHTML = "";

	if (completedData.length !== 0) {
		completedData.forEach((data) => {
			displayTemplate(data);
		});
	} else {
		cardTasks.innerHTML += `
        <div class="card__tasks">
        <p>No Completed Items</p>
        </div>
        `;
	}
}

// selectors
const addTodoText = document.getElementById("addTodoText");
const addTodoBtn = document.getElementById("addTodoBtn");

// listeners
addTodoBtn.addEventListener("click", () => {
	addItem();
});
addTodoText.addEventListener("keypress", (e) => {
	if (e.code === "Enter") {
		addItem();
	}
});

function addItem() {
	// checks if the value is null
	if (addTodoText.value.trim() !== "") {
		const data = {
			id: exampleData.length + 1,
			task: addTodoText.value.trim(),
			isCompleted: false,
		};
		// insert to the array
		exampleData.push(data);
		// clear the textbox
		addTodoText.value = "";

		// updates the container
		checkView();
	} else {
		console.log("Please add todo");
	}
}

function deleteItem(id) {
	const index = exampleData.findIndex((todo) => todo.id === id);
	if (index !== -1) {
		exampleData.splice(index, 1);
		checkView();
	}
}

function updateCheckItem(id, condition) {
	const index = exampleData.findIndex((todo) => todo.id === id);
	exampleData[index].isCompleted = condition;
	checkView();
}
