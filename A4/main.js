const taskForm = document.forms["createTask"];
const createTaskInput = taskForm["task"];
const allTasks = document.querySelector(".allTasks");

taskForm.onsubmit = (e) => {
  e.preventDefault();
  const newTask = createTaskInput.value;
  if (newTask === "") {
    return alert("Please, enter a task in the input field.");
  }

  const singleTask = document.createElement("div");
  singleTask.classList.add("singleTask");
  allTasks.append(singleTask);

  const inputTaskElement = document.createElement("input");
  inputTaskElement.value = newTask;
  inputTaskElement.setAttribute("readonly", "readonly");
  singleTask.append(inputTaskElement);

  const actions = document.createElement("div");
  actions.classList.add("actions");
  singleTask.append(actions);

  const editBtn = document.createElement("button");
  editBtn.classList.add("edit");
  editBtn.innerHTML = "Edit";
  actions.append(editBtn);

  const deleteBtn = document.createElement("button");
  deleteBtn.classList.add("delete");
  deleteBtn.innerHTML = "Delete";
  actions.append(deleteBtn);

  editBtn.addEventListener("click", () => {
    if (editBtn.innerHTML.toLowerCase() === "edit") {
      inputTaskElement.removeAttribute("readonly");
      inputTaskElement.focus();

      editBtn.innerHTML = "Save";
    } else {
      inputTaskElement.setAttribute("readonly", true);
      editBtn.innerHTML = "Edit";
    }
  });

  deleteBtn.addEventListener("click", () => {
    if (confirm("Do you want to delete this task?")) {
      allTasks.removeChild(singleTask);
    }
  });

  createTaskInput.value = "";
};
