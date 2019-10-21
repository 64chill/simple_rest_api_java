package com.example.demo1.todos;

import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;

@Component
public class TodoDaoService {

    private static int todoCount=3;

    private static List<Todo> todosList=new ArrayList<>();

    static{

        todosList.add(new Todo(1,"TODO 1",false) );
        todosList.add(new Todo(2,"TODO 2",false) );
        todosList.add(new Todo(3,"TODO 3",true) );
    }

    // _______________________get_AllTodos ______________________________________________________________   1
    public List<Todo> get_AllTodos(){
        return todosList;
    }

    // _______________________ get_UniqueTodo ____________________________________________________________  2
    public Todo get_UniqueTodo(int in_id){
        for (Todo t: todosList){
            if(t.getId() == in_id){
                return t;
            }
        }
        return null;
    }

    //________________________ update_Todo_Active ________________________________________________________  3
    public Todo update_Todo_Active(int in_todoID, boolean in_active){
        for (Todo t: todosList){
            if(t.getId() == in_todoID){
                t.setActive(in_active);
                return t;
            }
        }
        return null;
    }

    //_____________________ update_Todo_Text _____________________________________________________________  4
    public Todo update_Todo_Text(int in_todoID, String in_text){
        for (Todo t: todosList){
            if(t.getId() == in_todoID){
                t.setText(in_text);
                System.out.println(t.getText());
                return t;
            }
        }
        return null;
    }

    // _______________________ delete_Todo _________________________________________________________________  5
    public boolean delete_Todo(int in_todoID){
        for (Todo t: todosList){
            if(t.getId() == in_todoID){
                todosList.remove(t);
                todoCount--;
                return true;
            }
        }
        return false;
    }

    // _______________________ add_Todo _______________________________________________________________  5
    public Todo add_Todo(String in_text){
        Integer numberNextInt = this.todosList.get(todoCount-1).getId() +1;
        Todo new_todo = new Todo(numberNextInt, in_text , false);
        todosList.add(new_todo);
        todoCount++;
        return new_todo;
    }


}
