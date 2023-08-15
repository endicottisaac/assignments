function getData(){
    axios.get("https://api.vschool.io/endicottisaac/todo")
    .then(response => listData(response.data))
    .catch(error => console.log(error))
}
//Create the delete and check box within the for loop using the same way of tagging to connect it, will also need to add event listener within the for loop    
const listData = (data) => {
    
    clearList()
    
    for(let i = 0; i < data.length; i++){

        //Title
        const title = document.createElement('h3')
        title.textContent = data[i].title

        //Checkbox
        const checkbox = document.createElement('input')
        checkbox.type = "checkbox"
        checkbox.classList.add('checkbox')
        checkbox.name = "checkbox"
        const todoId = data[i]._id
        checkbox.id = todoId;

        //delte button
        const deleteButton = document.createElement('button')
        deleteButton.textContent = "X"
        deleteButton.name = todoId
        deleteButton.classList.add('deleteButton')
        
        

        //Checks if complete, if so the title will have a line through it 
        // const completeCheck = data[i].completed
        // if(completeCheck == true){
        //     title.classList.add('completedTodo')
        //     checkbox.checked = true;
        // } else if(completeCheck == false) {
        //     checkbox.checked = false;
        // }

        //img, if no image then the display is turned to none 
        const img = document.createElement('img')
        img.src = data[i].imgUrl
        img.alt = "No Image Found"
        // if(data[i].imgUrl === undefined){
        //     img.classList.add('displayNone')
        // } else if(data[i].imgUrl === ""){
        //     img.classList.add('displayNone')
        // }

        //description
        const description = document.createElement('h6')
        description.textContent = data[i].description

        //price
        const price = document.createElement('h6')
        price.textContent = data[i].price

        //adding pieces to the document 
        document.getElementById("todo-list").appendChild(checkbox)
        document.getElementById("todo-list").appendChild(title)
        document.getElementById("todo-list").appendChild(deleteButton)
        document.getElementById("todo-list").appendChild(description)
        document.getElementById("todo-list").appendChild(price)
        document.getElementById("todo-list").appendChild(img)
        
        checkboxInputs(checkbox)
        deleteButtonInput(deleteButton)

        const completeCheck = data[i].completed
        if(completeCheck == true){
            title.classList.add('completedTodo')
            checkbox.checked = true;
        } else if(completeCheck == false) {
            checkbox.checked = false;
        }
    }
}

const clearList = () => {
    const el = document.getElementById('todo-list')
    while(el.firstChild){
        el.removeChild(el.firstChild)
    }
}
getData()

const deleteButtonInput = (deleteButtons) => {
    deleteButtons.addEventListener("click", function() {
        const deleteID = deleteButtons.name
        axios.delete("https://api.vschool.io/endicottisaac/todo/" + deleteID)
        .then(response => console.log(response.data))
        .catch(error => console.log(error))
        getData()
    })
}

const checkboxInputs = (inputs) => {
    const notCompleted = {
        completed: false
    }
    const completed = {
        completed: true
    }
        inputs.addEventListener("click", function() {
            const todoId = inputs.id
            if(inputs.checked == true) {
                axios.put("https://api.vschool.io/endicottisaac/todo/" + todoId, completed)
                .then(response => console.log(response.data))
                .catch(error => console.log(error))
                
            } else if(inputs.checked == false) {
                axios.put("https://api.vschool.io/endicottisaac/todo/" + todoId, notCompleted)
                .then(response => console.log(response.data))
                .catch(error => console.log(error))
                
            }
            getData()
        })
       
}

const todoForm = document["add-todo"]

todoForm.addEventListener("submit", function(e){
    e.preventDefault()
    
    const newTodo = {
        title: todoForm.title.value,
        description: todoForm.description.value,
        price: todoForm.price.value,
        imgUrl: todoForm.imgUrl.value
    }
    
    todoForm.title.value = ""
    todoForm.description.value = ""
    todoForm.price.value = ""
    todoForm.imgUrl.value = ""
    
    axios.post("https://api.vschool.io/endicottisaac/todo", newTodo)
        .then(res => getData())
        .catch(err => console.log(err))
})

