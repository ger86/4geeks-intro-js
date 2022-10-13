let tasks = [
  {
    title: "Sacar a Simba",
    isCompleted: false,
  },
  {
    title: "Comprar pan",
    isCompleted: false,
  },
  {
    title: "Grabar vídeo",
    isCompleted: false,
  },
];

function renderTaskList() {
  const taskList = document.querySelector("#taskList");
  taskList.innerHTML = "";
  for (let i = 0; i < tasks.length; i++) {
    let task = tasks[i];
    let listElement = document.createElement("li");
    listElement.classList.add("list-group-item");
    if (task.isCompleted) {
      listElement.classList.add("text-decoration-line-through");
    }
    listElement.addEventListener("click", function () {
      task.isCompleted = true;
      renderTaskList();
    });
    listElement.textContent = task.title;
    taskList.appendChild(listElement);
  }
}

renderTaskList();

const taskForm = document.querySelector("#taskForm");
taskForm.addEventListener("submit", function (event) {
  event.preventDefault();
  let formData = new FormData(taskForm);
  tasks.push({
    title: formData.get("pepito"),
    isCompleted: false,
  });
  renderTaskList();
});
