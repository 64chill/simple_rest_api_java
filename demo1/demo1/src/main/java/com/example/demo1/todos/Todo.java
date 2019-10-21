package com.example.demo1.todos;

public class Todo {
    private String text;
    private boolean active;
    private Integer id;

    public Todo(){}

    //CONSTRUCTOR __________________________________________________________________
    public Todo(Integer id , String text, boolean active ) {
        this.text = text;
        this.active = active;
        this.id = id;
    }
 // GETERS AND SETTERS _________________________________________________________
    public String getText() {
        return text;
    }

    public void setText(String name) {
        this.text = name;
    }

    public boolean isActive() {
        return active;
    }

    public void setActive(boolean active) {
        this.active = active;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }
}
