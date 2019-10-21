package com.example.demo1.todos;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
public class TodoResource {
    @Autowired
    private TodoDaoService service;

    // _______________________ /api/todos ____________________________________________________________
    @GetMapping(path = "/api/todos")
    public List<Todo> res_listAllTodos() {
        List<Todo> ltodo = service.get_AllTodos();
        return ltodo;
    }

    // _______________________ /api/todo/{todo_id} ____________________________________________________________
    @GetMapping(path = "/api/todo/{todo_id}")
    public ResponseEntity res_ListUniqueTodo(@PathVariable int todo_id) {
        Todo responseTodo;
        responseTodo = service.get_UniqueTodo(todo_id);
        if (null == responseTodo) {
            return new ResponseEntity("No TODO found for ID " + String.valueOf(todo_id), HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity(responseTodo, HttpStatus.OK);
    }

    // _______________________ /api/todo/active  ____________________________________________________________
    @PutMapping("/api/todo/active")
    public ResponseEntity res_updateTodoActive(@RequestBody Todo req_todo) {
        // to-do ID can't be changed thats why we are receiving only the object
        Todo responseTodo = service.update_Todo_Active(req_todo.getId(),req_todo.isActive());
        if (null == responseTodo) {
            return new ResponseEntity("No TODO found for ID " + req_todo.getId(), HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity(responseTodo, HttpStatus.OK);
    }

    // _______________________ /api/todo/text/ ____________________________________________________________
    @PutMapping("/api/todo/text")
    public ResponseEntity res_updateTodoText (@RequestBody Todo req_todo) {
        // to-do ID can't be changed thats why we are receiving only the object
        Todo responseTodo = service.update_Todo_Text(req_todo.getId(),req_todo.getText());
        if (null == responseTodo) {
            return new ResponseEntity("No TODO found for ID " + req_todo.getId(), HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity(responseTodo, HttpStatus.OK);
    }

    // _______________________ /api/todo/delete ____________________________________________________________
    @DeleteMapping ("/api/todo/delete")
    public ResponseEntity res_deleteTodo (@RequestBody Todo req_todo) {
        // to-do ID can't be changed thats why we are receiving only the object
        boolean boolean_response = service.delete_Todo(req_todo.getId());
        if (boolean_response == false) {
            return new ResponseEntity("No TODO found for ID " +req_todo.getId(), HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity("success" ,HttpStatus.OK);
    }

    // _______________________ /api/todo/add/ __ ____________________________________________________________
    @PostMapping("/api/todo/add")
    public ResponseEntity res_addNewTodo (@RequestBody String req_text) {
        Todo todo_response = service.add_Todo(req_text);
        if (null == todo_response) {
            return new ResponseEntity("Ops there was some problem trying to add the todo", HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity(todo_response,HttpStatus.OK);
    }

}
