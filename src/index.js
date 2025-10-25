// Wait for the entire HTML document to load before running the script
// This ensures elements like the form and input actually exist in the DOM
document.addEventListener('DOMContentLoaded', () => {

  // Select the form element by its ID
  const form = document.getElementById('create-task-form');

  // Add a 'submit' event listener to the form
  // Triggers whenever the user clicks "Create New Task" or presses Enter
  form.addEventListener('submit', (event) => {

    // Prevent the form's default behavior (reloading the page)
    event.preventDefault();

    // Select the input field where the user types their task
    const input = document.getElementById('new-task-description');

    // Get the text value that the user entered into the input box
    const taskText = input.value;

    // Call a helper function that creates and displays the new task in the list
    buildToDo(taskText);

    // Clear the input box so the user can type a new task right away
    input.value = '';
  });
});

// Define a helper function that builds and adds a new list item (<li>) to the task list
function buildToDo(task) {

  // Guard clause: if the task is empty (user pressed submit with no text), stop the function early
  if (!task) return;

  // Create a new list item element (<li>)
  const li = document.createElement('li');

  // Set the text content of the <li> to the task text
  li.textContent = task;

  // Find the <ul id="tasks"> element where all tasks are listed
  const taskList = document.getElementById('tasks');

  // Append the new <li> to the <ul>, which adds it to the visible list on the page
  taskList.appendChild(li);
}
