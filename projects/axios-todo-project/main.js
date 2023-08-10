function getData(){
    axios.get("https://api.vschool.io/endicottisaac/todo")
    .then(response => listData(response.data))
    .catch(error => console.log(error))
}

const listData = (data) => {
    
    clearList()
    
    for(let i = 0; i < data.length; i++){
        const title = document.createElement('h3')
        title.textContent = data[i].title
        const completeCheck = data[i].completed
        if(completeCheck !== false){
            title.classList.add('completedTodo')
        }
        const img = document.createElement('img')
        img.src = data[i].imgUrl
        if(data[i].imgUrl === undefined){
            img.classList.add('displayNone')
        } else if(data[i].imgUrl === ""){
            img.classList.add('displayNone')
        }
        const description = document.createElement('h6')
        description.textContent = data[i].description
        const price = document.createElement('h6')
        price.textContent = data[i].price
        document.getElementById("todo-list").appendChild(title)
        document.getElementById("todo-list").appendChild(description)
        document.getElementById("todo-list").appendChild(price)
        document.getElementById("todo-list").appendChild(img)
        
    }
}

const clearList = () => {
    const el = document.getElementById('todo-list')
    while(el.firstChild){
        el.removeChild(el.firstChild)
    }
}

getData()


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