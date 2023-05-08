const form = document.addItem; 
const mainList = document.getElementById("list");


form.addEventListener('submit', function(e){
    event.preventDefault()
    const newItem = createListItem(e)
    mainList.append(newItem)
    form.title.value = ""
})

const createListItem = e => {

    const subItem = document.createElement('li');

    const div = document.createElement('div')
    div.textContent = form.title.value;
    // const editButton = document.createElement('button')
    // editButton.textContent = 'edit';
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'X'
    
    subItem.appendChild(div)
   // subItem.appendChild(editButton)
    subItem.appendChild(deleteButton)


    
    return subItem
}
mainList.addEventListener("click", function(e){
    if(e.target.textContent === 'X'){
        e.target.parentElement.remove()
    }
})










