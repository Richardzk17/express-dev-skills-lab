// Import the model that we exported in the Todo.js model file
import { Skill } from '../models/skill.js'


function index(req, res) {
  Skill.find({})
  .then(skills => { 
    res.render('skills/index', {
      skills: skills,
    })
  })
  .catch(error => { 
    console.log(error)
    res.redirect('/')
  })
}

function newTodo(req, res) {
    res.render('todos/new')
  }
  
  export {
    index,
    newTodo as new,
  }

