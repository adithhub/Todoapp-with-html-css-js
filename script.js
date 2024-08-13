document.addEventListener('DOMContentLoaded', function() {
    const taskForm = document.getElementById('taskForm');
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');

    // Function to create a new task element
    function createTaskElement(taskText) {
        const li = document.createElement('li');
        li.textContent = taskText;

        // Add 'Complete' button
        const completeButton = document.createElement('button');
        completeButton.textContent = 'Complete';
        completeButton.className = 'complete-btn';
        completeButton.addEventListener('click', function() {
            li.classList.toggle('completed');
        });

        // Add 'Remove' button
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.className = 'remove-btn';
        removeButton.addEventListener('click', function() {
            taskList.removeChild(li);
        });

        li.appendChild(completeButton);
        li.appendChild(removeButton);
        return li;
    }

    // Handle form submission
    taskForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form from submitting

        const taskText = taskInput.value.trim();
        if (taskText === '') {
            alert('Please enter a task.');
            return;
        }

        const taskElement = createTaskElement(taskText);
        taskList.appendChild(taskElement);

        taskInput.value = ''; // Clear the input
    });
});
