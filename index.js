let todo = {
	title: "Stage-0 Task",
	description: document.querySelector('[data-testid="test-todo-description"]').textContent,
	status: "In Progress",
	priority: "Low",
	dueDate: new Date("2026-04-16T23:59:00").toISOString().split("T")[0],
	completed: false,
};

const editBtn = document.getElementById("edit-button");
const deleteBtn = document.getElementById("delete-button");
const saveBtn = document.getElementById("save-btn");
const cancelBtn = document.getElementById("cancel-btn");
const checkInput = document.querySelector('input[type="checkbox"]');
const checkLabel = document.querySelector("label");
const statusIndicator = document.getElementById("status-indicator");
const statusMessage = statusIndicator.querySelector(".status-message");
const activeStatus = statusIndicator.querySelector(".active");
const priorityEl = document.querySelector('[data-testid="test-todo-priority"]');
const form = document.getElementById("edit-form");

const handleEdit = () => {
	form.hidden = false;

	document.getElementById("edit-title").value = todo.title;
	document.getElementById("edit-description").value = todo.description;
	document.getElementById("edit-priority").value = todo.priority;
	if (!(todo.dueDate instanceof Date)) {
		todo.dueDate = new Date(todo.dueDate);
	}
	document.getElementById("edit-date").value = todo.dueDate.toISOString().split("T")[0];
};

const handleDelete = () => {
	alert("Delete button was clicked");
};

const expandBtn = document.getElementById("expand-btn");
const collapseSection = document.getElementById("collapsible-section");

expandBtn.addEventListener("click", () => {
	const isExpanded = expandBtn.getAttribute("aria-expanded") === "true";

	expandBtn.setAttribute("aria-expanded", !isExpanded);
	collapseSection.classList.toggle("expanded");

	expandBtn.textContent = isExpanded ? "Show more" : "Show less";
});

const getTimeRemaining = (dueDate) => {
	const now = new Date();
	const diff = dueDate - now;

	const minutes = Math.floor(diff / (1000 * 60));
	const hours = Math.floor(diff / (1000 * 60 * 60));
	const days = Math.floor(diff / (1000 * 60 * 60 * 24));

	if (diff < 0) {
		const overdueHours = Math.abs(hours);
		return `Overdue by ${overdueHours} hour${hours !== 1 ? "s" : ""}`;
	}

	if (minutes < 1) {
		return "Due now!";
	}

	if (hours < 24) {
		return `Due in ${hours} hour${hours !== 1 ? "s" : ""}`;
	}

	if (days < 1) {
		return "Due tomorrow";
	}

	return `Due in ${days} day${days !== 1 ? "s" : ""}`;
};

const timeRemainingEl = document.querySelector('[data-testid="test-todo-time-remaining"]');

setInterval(() => {
	if (todo.status === "Done") {
		timeRemainingEl.textContent = "Completed";
		return;
	}

	const dueDateText = getTimeRemaining(new Date(todo.dueDate));
	timeRemainingEl.textContent = dueDateText;

	// Overdue indicator
	const overdueEl = document.querySelector('[data-testid="test-todo-overdue-indicator"]');
	if (overdueEl) {
		overdueEl.textContent = dueDateText.includes("Overdue") ? "Overdue" : "";
		overdueEl.style.color = "#dd2a2a";
	}
}, 30000);

function updateUI() {
	// Title & Description
	document.querySelector('[data-testid="test-todo-title"]').textContent = todo.title;
	document.querySelector('[data-testid="test-todo-description"]').textContent = todo.description;
	document.querySelector('[data-testid="test-todo-due-date"]').textContent = todo.dueDate;

	// Status
	statusMessage.innerText = todo.status;

	if (todo.status === "Done") {
		checkLabel.style.textDecoration = "line-through";
		statusIndicator.style.backgroundColor = "#eefcee";
		activeStatus.style.backgroundColor = "limegreen";
	} else if (todo.status === "In Progress") {
		checkLabel.style.textDecoration = "none";
		statusIndicator.style.backgroundColor = "#fcf5cc";
		activeStatus.style.backgroundColor = "#c28c05";
	} else {
		checkLabel.style.textDecoration = "none";
		statusIndicator.style.backgroundColor = "#eee";
		activeStatus.style.backgroundColor = "#999";
	}

	// Sync controls
	checkInput.checked = todo.completed;
	statusControl.value = todo.status;

	// Priority

	if (priorityEl) {
		priorityEl.textContent = todo.priority;

		// simple visual
		priorityEl.style.color =
			todo.priority === "High" ? "#f80606"
			: todo.priority === "Medium" ? "orange"
			: "green";
	}

	if (todo.priority === "High") {
		priorityEl.style.background = "#f7e4e4";
		priorityEl.style.color = "#dd2a2a";
	} else if (todo.priority === "Medium") {
		priorityEl.style.background = "#f3eed5";
		priorityEl.style.color = "#d8b505";
	} else {
		priorityEl.style.background = "#ddf5e8";
		priorityEl.style.color = "#16c063";
	}
}

editBtn.addEventListener("click", handleEdit);
deleteBtn.addEventListener("click", handleDelete);
checkInput.addEventListener("change", () => {
	todo.completed = checkInput.checked;
	todo.status = checkInput.checked ? "Done" : "Pending";

	updateUI();
});

const statusControl = document.getElementById("status-control");

statusControl.addEventListener("change", () => {
	todo.status = statusControl.value;
	todo.completed = todo.status === "Done";

	updateUI();
});

saveBtn.addEventListener("click", () => {
	const dateValue = document.getElementById("edit-date").value;

	todo.title = document.getElementById("edit-title").value;
	todo.description = document.getElementById("edit-description").value;
	todo.priority = document.getElementById("edit-priority").value;
	todo.dueDate = new Date(dateValue + "T23:59:00").toISOString().split("T")[0];

	updateUI();
	form.hidden = true;
});

cancelBtn.addEventListener("click", () => {
	form.hidden = true;
});

updateUI();
