const todoInput = document.querySelector('.add');
const list = document.querySelector('.todos');
const search = document.querySelector('.search');

// ADDING TODOS
const addTodo = todo => {
    const template = `<li class="list-group-item d-flex justify-content-between align-items-center">
    <span>${todo}</span>
    <i class="far fa-trash-alt delete"></i>
    </li>`;

    list.innerHTML += template;
}

todoInput.addEventListener('submit', (e) => {
    e.preventDefault();

    const todo = todoInput.add.value.trim();

    if (todo.length) {
        addTodo(todo);
        todoInput.reset();
    }
})

const deleteTodo = target => {

    if (target.classList.contains('delete')) {
        list.removeChild(target.parentElement)
    }
}

// DELETING TODOS
list.addEventListener('click', e => {
    deleteTodo(e.target);
})

const filterTodo = term => {
    const todos = Array.from(list.children);

    todos
        .filter(todo =>  !todo.textContent.toLowerCase().includes(term))
        .forEach(todo => todo.classList.add('filtered'));

    todos
        .filter(todo =>  todo.textContent.toLowerCase().includes(term))
        .forEach(todo => todo.classList.remove('filtered'));
}

// SEARCH TODOS
search.addEventListener('keyup', () => {
   const term = search.search.value.toLowerCase().trim();

   filterTodo(term);
})

// SUBMIT FORM CLEANUP
search.addEventListener('submit', e => {
    e.preventDefault();
})
