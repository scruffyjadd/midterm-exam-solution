let tasks = [];

// Function to create a new task
function createTask(name, description) {
  try {
    if (!name || !description) {
      throw new Error("Task name and description cannot be empty!");
    }
    const newTask = {
      id: tasks.length + 1,
      name: name,
      description: description,
    };
    tasks.push(newTask);
    console.log(`Task "${name}" added successfully.`);
  } catch (error) {
    console.error("Error in createTask: " + error.message);
  }
}

// Function to read (view) all tasks
function readTasks() {
  try {
    if (tasks.length === 0) {
      throw new Error("No tasks available.");
    }
    console.log("List of Tasks:");
    tasks.forEach(task => {
      console.log(`ID: ${task.id}, Name: ${task.name}, Description: ${task.description}`);
    });
  } catch (error) {
    console.error("Error in readTasks: " + error.message);
  }
}

// Function to update a task
function updateTask(id, newName, newDescription) {
  try {
    if (isNaN(id) || id <= 0 || id > tasks.length) {
      throw new Error("Invalid task ID.");
    }
    if (!newName || !newDescription) {
      throw new Error("Task name and description cannot be empty!");
    }
    const taskIndex = tasks.findIndex(task => task.id === id);
    tasks[taskIndex].name = newName;
    tasks[taskIndex].description = newDescription;
    console.log(`Task ID ${id} updated successfully.`);
  } catch (error) {
    console.error("Error in updateTask: " + error.message);
  }
}

// Function to delete a task
function deleteTask(id) {
  try {
    if (isNaN(id) || id <= 0 || id > tasks.length) {
      throw new Error("Invalid task ID.");
    }
    const taskIndex = tasks.findIndex(task => task.id === id);
    tasks.splice(taskIndex, 1);
    console.log(`Task ID ${id} deleted successfully.`);
  } catch (error) {
    console.error("Error in deleteTask: " + error.message);
  }
}

// Function to display the menu and perform actions
function displayMenu() {
  let choice = prompt(`
  Choose an action:
  1. Add Task
  2. View Tasks
  3. Update Task
  4. Delete Task
  5. Exit
  `);

  try {
    switch (choice) {
      case '1':
        // Add task
        let taskName = prompt("Enter the task name:");
        let taskDescription = prompt("Enter the task description:");
        createTask(taskName, taskDescription);
        break;

      case '2':
        // View tasks
        readTasks();
        break;

      case '3':
        // Update task
        let updateId = parseInt(prompt("Enter the task ID to update:"), 10);
        let newName = prompt("Enter the new task name:");
        let newDescription = prompt("Enter the new task description:");
        updateTask(updateId, newName, newDescription);
        break;

      case '4':
        // Delete task
        let deleteId = parseInt(prompt("Enter the task ID to delete:"), 10);
        deleteTask(deleteId);
        break;

      case '5':
        // Exit
        alert("Goodbye!");
        return; 

      default:
        throw new Error("Invalid choice! Please try again.");
    }

  } catch (error) {
    alert(error.message); 
  }

  displayMenu();
}

displayMenu();
