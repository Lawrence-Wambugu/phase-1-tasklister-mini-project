document.addEventListener("DOMContentLoaded", () => {
  const taskForm = document.getElementById("create-task-form");
  const taskList = document.getElementById("tasks");

  taskForm.addEventListener("submit", function(event) {
      event.preventDefault(); // Prevents default form submission behavior

      const taskInput = document.getElementById("new-task-description");
      const taskDescription = taskInput.value.trim();

      if (taskDescription === "") return; // Ignore empty input

      // Create a new list item for the task
      const taskItem = document.createElement("li");
      taskItem.textContent = taskDescription;

      // Append task to the list
      taskList.appendChild(taskItem);

      // Clear input field
      taskInput.value = "";
  });
});


  
