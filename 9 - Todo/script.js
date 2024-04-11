const exampleData = [
	{
		id: 0,
		task: 'A sample task 1',
		isCompleted: true,
	},
	{
		id: 1,
		task: 'A sample task 2',
		isCompleted: false,
	},
];

const cardTasks = document.querySelector("div.card__task__container");

function displayData() {
	// clear the container first
	cardTasks.innerHTML = "";

	// displays all the todos from array

	if (exampleData.length !== 0) {
		exampleData.forEach((data) => {
			cardTasks.innerHTML += `
            <div class="card__tasks">
                <div class="card__desc">
                    <input type="checkbox" name="" id="checkBox" data-id="${data.id}" ${data.isCompleted === true ? 'checked' : ""}>
                    <input class="card__input-box hidden" type="text" name=" ">
                    <p class="card__tasks_desc ${data.isCompleted === true ? 'completed' : ''}" >
                        ${data.task}
                    </p>
                </div>
                <div class="card__btn__group">
                    <!-- edit button -->
                    <button class="card__btn small" id="editBtn" data-id="${data.id}"><i class='bx bxs-edit-alt'></i></button>
                    <!-- delete button -->
                    <button class="card__btn small" id="deleteBtn" data-id="${data.id}"><i class='bx bxs-trash'></i></button>
                </div>
            </div>        
            `;

			const deleteBtns = document.querySelectorAll("#deleteBtn");

			deleteBtns.forEach((deleteBtn) => {
				deleteBtn.addEventListener("click", () => {
					const id = parseInt(deleteBtn.dataset.id);
					deleteItem(id);
				});
			});

			const checkBoxes = document.querySelectorAll('#checkBox');
			checkBoxes.forEach((checkbox => {
				checkbox.addEventListener('change', e => {
					const id = parseInt(checkbox.dataset.id);
					if(e.target.checked === true) { 
						updateCheckItem(id, true);
					} else { 
						updateCheckItem(id, false);
					}

					
				})
			}))
			


		});
	} else {
		cardTasks.innerHTML += `
        <div class="card__tasks">
        <p>No Items</p>
        </div>
        `;
	}
}

// display initial data
displayData();

const allBtn = document.getElementById("allBtn");
const completeBtn = document.getElementById("completedBtn");

allBtn.addEventListener("click", () => {
	displayData();
	completeBtn.classList.remove("active");
	allBtn.classList.add("active");
});

completeBtn.addEventListener("click", () => {
	showComplete();
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
			cardTasks.innerHTML += `
            <div class="card__tasks">
                <div class="card__desc">
                    <input type="checkbox" name="" id="checkBox" data-id="${data.id}" ${data.isCompleted === true ? 'checked' : ""}>
                    <input class="card__input-box hidden" type="text" name=" ">
                    <p class="card__tasks_desc ${data.isCompleted === true ? 'completed' : ''}" >
                        ${data.task}
                    </p>
                </div>
                <div class="card__btn__group">
                    <!-- edit button -->
                    <button class="card__btn small" id="editBtn" data-id="${data.id}"><i class='bx bxs-edit-alt'></i></button>
                    <!-- delete button -->
                    <button class="card__btn small" id="deleteBtn" data-id="${data.id}"><i class='bx bxs-trash'></i></button>
                </div>
            </div>            
            `;
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
		displayData();
	} else {
		console.log("Please add todo");
	}
}

function deleteItem(id) {
	const index = exampleData.findIndex((todo) => todo.id === id);
	if (index !== -1) {
		exampleData.splice(index, 1);
		displayData();
	}
}

function updateCheckItem(id, condition) { 
	const index = exampleData.findIndex((todo) => todo.id === id);
	exampleData[index].isCompleted = condition;
	displayData();
}
