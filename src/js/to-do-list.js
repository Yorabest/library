const refs = {
    form: document.querySelector('form'),
    input: document.querySelector('#newTask'),
    countainer: document.querySelector('#taskList')
}

refs.form.addEventListener('submit', onSubmit);
refs.countainer.addEventListener('click', onTaskEvent)

function onSubmit(e) {
    e.preventDefault();
    const task = refs.input.value;

    if (task.length === 0) {
        return
    };

    const elements = {
        item: document.createElement('li'),
        checkbox: document.createElement('input'),
        buttonDel: document.createElement('button'),
        taskText: document.createElement('p')
    }

    elements.checkbox.type = 'checkbox';
    elements.taskText.textContent = task;
    elements.buttonDel.textContent = 'Delete';

    elements.item.append(elements.checkbox, elements.taskText, elements.buttonDel);
    refs.countainer.appendChild(elements.item)

    refs.form.reset()
}

function onTaskEvent(e) {
    const target = e.target;
    const currentItem = target.parentElement;
    const currentTask = currentItem.childNodes[1];
  
    if (target.tagName === 'BUTTON') {
        onDeleteTask(currentItem)
    } else if (target.checked) {
        onCheckboxEvent(currentTask)
    }else if (!target.checked) {
        onCheckboxEvent(currentTask)
    } 
}

function onCheckboxEvent(task) {
    task.classList.toggle('complited');
}

function onDeleteTask(item) {
    item.remove()
}