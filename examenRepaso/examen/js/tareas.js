window.addEventListener("load", () => {
    const taskForm = document.getElementById('taskForm');
    const taskInput = document.getElementById('taskInput');
    const loadTasksButton = document.getElementById('loadTasks');
    const taskList = document.getElementById('taskList');
    const searchInput = document.getElementById('searchInput');

    taskForm.addEventListener('submit', function (event) {
        event.preventDefault();
        addTask(taskInput.value);
        taskInput.value = '';
    });

    loadTasksButton.addEventListener('click', function () {
        loadTasksFromRemote();
    });

    searchInput.addEventListener('input', function () {
        searchTasks(searchInput.value);
    });

    function addTask(taskText) {
        const taskItem = document.createElement('li');
        taskItem.textContent = taskText;

        const deleteButton = document.createElement('button');
        deleteButton.innerHTML = '<i class="fa fa-minus-circle"></i>';
        deleteButton.addEventListener('click', function () {
            deleteTask(taskItem);
        });

        taskItem.appendChild(deleteButton);
        taskList.appendChild(taskItem);
    }

    function deleteTask(taskItem) {
        taskList.removeChild(taskItem);
    }

    function searchTasks(query) {
        const tasks = Array.from(taskList.children);

        tasks.forEach(function (task) {
            const taskText = task.textContent.toLowerCase();
            const isVisible = taskText.includes(query.toLowerCase());
            task.style.display = isVisible ? 'block' : 'none';
        });
    }

    function loadTasksFromRemote() {
        fetch('data/tareas.json') // Ruta relativa al archivo en la carpeta "data"
            .then(response => response.json())
            .then(tasks => {
                tasks.forEach(task => {
                    addTask(task.tarea);
                });
                alert('Descarga de tareas desde el servidor remoto completada.');
            })
            .catch(error => {
                console.error('Error al cargar tareas desde el servidor remoto:', error);
                alert('Error al cargar tareas desde el servidor remoto.');
            });
    }
});
