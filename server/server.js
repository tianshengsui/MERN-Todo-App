import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import { Todo } from './models/todo.js';
import dotenv  from "dotenv"

dotenv.config()

const app = express()
const port = process.env.PORT || 5000;

app.use(express.json())
app.use(cors())

mongoose.connect(
  process.env.MONGODB_CONNECTION_STRING,
 {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false }
 ).then(() => {
     console.log("Database Connected!")
 }).catch(err => {
     console.log(err)
 })

app.get('/api/todos', (req, res) => {
    Todo.find({}, (err, todos) => {
        if (err) {
            console.log("Error!");
        } else {
          res.json(todos)
        }
      });
})

app.get("/api/todos/:id", (req, res) => {
    Todo.findById(req.params.id, (err, foundTodo) => {
        if (err) {
            console.log('error');
        } else {
            res.json(foundTodo);
        }
    });
});

app.post("/api/todos", (req, res) => {
    Todo.create(req.body, (err, newTodo) => {
        if (err) {
            console.log('error');
        } else {
            res.json(newTodo);
        }
    });
});

app.put("/api/todos/:id", (req, res) => {
    Todo.findByIdAndUpdate(
      req.params.id,
      req.body,
      (err, updatedTodo) => {
        if (err) {
          console.log(err)
        } else {
          res.json(updatedTodo)
        }
      }
    );
  });

app.delete("/api/todos/:id", (req, res) => {
    //destory
    Todo.findByIdAndRemove(req.params.id, (err, deletedTodo) => {
        if (err) {
            console.log('error');
        } else {
            res.json(deletedTodo);
        }
    });
  });

app.listen(port, () => {
  console.log(`App is listening at http://localhost:${port}`)
})