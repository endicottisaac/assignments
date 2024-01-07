const express = require("express")
const todoRouter = express()
const {v4: uuidv4} = require('uuid')

const todos = [
    {
      name: "Buy Groceries",
      description: "Purchase fruits, vegetables, and other essential items for the week.",
      imageUrl: "http://www.example.com/grocery.jpg",
      completed: false,
      _id: uuidv4()
    },
    {
      name: "Exercise",
      description: "Go for a 30-minute jog or workout at the gym.",
      imageUrl: "http://www.example.com/exercise.jpg",
      completed: false,
      _id: uuidv4()
    },
    {
      name: "Read a Book",
      description: "Spend at least 1 hour reading a book of your choice.",
      imageUrl: "http://www.example.com/book.jpg",
      completed: false,
      _id: uuidv4()
    },
    {
      name: "Work on Project",
      description: "Dedicate 2 hours to make progress on an ongoing project.",
      imageUrl: "http://www.example.com/project.jpg",
      completed: false,
      _id: uuidv4()
    },
    {
      name: "Call Family",
      description: "Catch up with family members over a phone call.",
      imageUrl: "http://www.example.com/family.jpg",
      completed: false,
      _id: uuidv4()
    },
    {
      name: "Write Blog Post",
      description: "Create a new blog post on an interesting topic.",
      imageUrl: "http://www.example.com/blog.jpg",
      completed: false,
      _id: uuidv4()
    },
    {
      name: "Learn a New Recipe",
      description: "Find and try cooking a new recipe for dinner.",
      imageUrl: "http://www.example.com/recipe.jpg",
      completed: false,
      _id: uuidv4()
    },
    {
      name: "Practice Meditation",
      description: "Take 15 minutes to practice mindfulness meditation.",
      imageUrl: "http://www.example.com/meditation.jpg",
      completed: false,
      _id: uuidv4()
    }
  ];
  
todoRouter.get("/", (req, res) => {
    res.send(todos)
})

todoRouter.put("/", (req, res) => {
    const newTodo = req.body
    newTodo._id = uuidv4()
    todos.push(newTodo)
    res.send("Added your new 'Todo'")
})

todoRouter.delete("/:todoId", (req, res) => {
    const todoId = req.params.todoId
    const todoIndex = todos.findIndex(todo => todo._id === todoId)
    if(todoIndex !== -1){
      todos.splice(todoIndex, 1)
      res.send("Successfully deleted Todo")
    } else {
      res.send("Could not find Todo")
    }
})

todoRouter.post("/:todoId", (req, res) => {
    const todoId = req.params.todoId
    const updatedObject = req.body
    const todoIndex = todos.findIndex(todo => todo._id === todoId)
    if(todoIndex !== -1){
        const updatedTodo = Object.assign(todos[todoIndex], updatedObject)
        res.send(updatedTodo)
    } else{
        res.status(404).send('Todo not found')
    }
})

todoRouter.get("/:todoId", (req, res) => {
    const todoId = req.params.todoId
    const wantedTodo = todos.find(todo => todo._id === todoId)
    res.send(wantedTodo)
})


module.exports = todoRouter