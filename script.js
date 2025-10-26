
const inputTask = document.querySelector("#inputTask");
const inputBtn = document.querySelector("#inputBtn");
const ul = document.querySelector("#viewTask");
const div = document.querySelector('#containerTask')

let btnDlt = document.createElement('button')
    btnDlt.classList.add('btnDlt')


ul.addEventListener('click', (e) => {
    if (e.target.classList.contains('btnDlt')) {
        console.log(e.target)
        e.target.parentElement.remove();
    }

    if (e.target.classList.contains('btnInsert')) {
        const divTask = e.target.parentElement
        const li = divTask.querySelector('.task')
        const oldValue = li.textContent

        const inputEdit = document.createElement('input');
        inputEdit.type = 'text';
        inputEdit.value = oldValue;
        inputEdit.classList.add('editField');

        li.textContent = ''; 
        li.appendChild(inputEdit);
        inputEdit.focus();

        inputEdit.addEventListener('blur', () => {
            li.textContent = inputEdit.value;
        });

        inputEdit.addEventListener('keydown', (e)=> {
            if (e.key === "Enter") {
                li.textContent = inputEdit.value;
            }
        })

        
    }

    if (e.target.classList.contains('task')) {
            e.target.classList.toggle('crossedOut')
        }
});



    

inputBtn.addEventListener('click', () =>{
    let inputValue = inputTask.value;
    if (inputValue === '') {
        alert('Insira um valor valido')
    } else {
        let divTask = document.createElement('div');
    divTask.classList.add('containerTask');

    let li = document.createElement('li');
    li.classList.add('task');

    let btnDlt = document.createElement('button');
    btnDlt.innerHTML = "Del"
    btnDlt.classList.add('btnDlt')

    let btnInsert = document.createElement('button')
    btnInsert.textContent = "Edit"
    btnInsert.classList.add('btnInsert')

    divTask.appendChild(li);
    divTask.appendChild(btnDlt);
    divTask.appendChild(btnInsert);
    ul.appendChild(divTask);




    li.innerHTML = inputValue;
    inputTask.value = "";

    }
})

btnDlt.addEventListener('click', () => {
    alert('entrou')
})


ul.addEventListener('click', (e) => {
        
    })



    
