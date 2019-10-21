/*
todo-response


button_get_all_todos

button_get_unique_todo
	get_unique_inputID

button_put_todo_active
	put_todo_active_id_input
	put_todo_active_active_select  {VALUE : TRUE :: FALSE}

button_put_todo_text
	put_todo_text_id_input
	put_todo_text_text_input

button_delete_todo
	delete_todo_id_input

button_add_todo
	post_todo_text_input
*/

var BASE_URL_TODO = "http://localhost:2424/api/";
var base_todo = {
        id: 1,
        text: "",
        active: false
    }
/************************************************************************************/
/************************************************************************************/
/************************************************************************************/
/************************************************************************************/
$("#button_get_all_todos").click(function(){
  var type = "GET";
  var url = BASE_URL_TODO + "todos";
  console.log(type+" request issued:  " + url);
$.ajax({
          type: type,
          url: url,
          async:true,
          success: function(data){
            printString = '<table class="table"> <thead><tr><th scope="col">#</th><th scope="col">Text</th><th scope="col">Active</th></tr></thead><tbody>';
            //var obj = JSON.parse(data.responseText);
            data.forEach( todo => {
              printString += "<tr><td>" + todo.id +"</td><td>" + todo.text + "</td><td> " + todo.active + "</td></tr>";
            });
            printString += '</tbody></table>';
            $('#todo-response').html(printString);
             //$('#todo-response').html(data);
          },
          error(jqXHR, textStatus, errorThrown){
            $('#todo-response').html("ERROR : textSTATUS : " + textStatus);
          }
        });
});
/************************************************************************************/
/************************************************************************************/
/************************************************************************************/
/************************************************************************************/
$("#button_get_unique_todo").click(function(){
  var type = "GET";
  var id_input = $("#get_unique_inputID").val();
  var url = BASE_URL_TODO + "todo/" + id_input;
  console.log(type+"  request issued:  " + url);
$.ajax({
          type: type,
          url: url,
          async:true,
          success: function(data){
            if(data==""){
              $('#todo-response').html("<div class='alert alert-danger' role='alert'>Ops there was an error! Server sent an empty body</div> ");
              return;
            }
            printString = '<table class="table"> <thead><tr><th scope="col">#</th><th scope="col">Text</th><th scope="col">Active</th></tr></thead><tbody>';
            //var obj = JSON.parse(data.responseText);

            printString += "<tr><td>" + data.id +"</td><td>" + data.text + "</td><td> " + data.active + "</td></tr>";

            printString += '</tbody></table>';
            $('#todo-response').html(printString);
             //$('#todo-response').html(data);
          },
          error(jqXHR, textStatus, errorThrown){
            if (typeof jqXHR.responseJSON !== 'undefined'){
              $('#todo-response').html("<div class='alert alert-danger' role='alert'>ERROR : " + JSON.stringify(jqXHR.responseJSON.status)+"</div>");

            } else if(typeof jqXHR.responseText !== 'undefined') {
              $('#todo-response').html("<div class='alert alert-danger' role='alert'>ERROR : " + JSON.stringify(jqXHR.responseText)+"</div>");
            }
          }
        });
  $('#getUniqueModal').modal('hide')
});
/************************************************************************************/
/************************************************************************************/
/************************************************************************************/
/************************************************************************************/
$("#button_put_todo_active").click(function(){
  var type = "PUT";
  var id_input = $("#put_todo_active_id_input").val();
  var active_input = $("#put_todo_active_active_select").val().toLowerCase();
  var url = BASE_URL_TODO + "todo/active";
  console.log(type+" request issued:  " + url);

  base_todo.id = id_input;
  base_todo.active = active_input
$.ajax({
          type: type,
          url: url,
          data: JSON.stringify(base_todo),
          async:true,
          contentType: "application/json; charset=utf-8", // send json
          success: function(data){
            printString = '<table class="table"> <thead><tr><th scope="col">#</th><th scope="col">Text</th><th scope="col">Active</th></tr></thead><tbody>';
            printString += "<tr><td>" + data.id +"</td><td>" + data.text + "</td><td> " + data.active + "</td></tr>";
            printString += '</tbody></table>';
            $('#todo-response').html(printString);
          },
          error(jqXHR, textStatus, errorThrown){
            if (typeof jqXHR.responseJSON !== 'undefined'){
              $('#todo-response').html("<div class='alert alert-danger' role='alert'>ERROR : " + JSON.stringify(jqXHR.responseJSON.status)+"</div>");

            } else if(typeof jqXHR.responseText !== 'undefined') {
              $('#todo-response').html("<div class='alert alert-danger' role='alert'>ERROR : " + JSON.stringify(jqXHR.responseText)+"</div>");
            }
          }
        });
  $('#putTodoActiveModal').modal('hide')
});
/************************************************************************************/
/************************************************************************************/
/************************************************************************************/
/************************************************************************************/
$("#button_put_todo_text").click(function(){
  var type = "PUT";
  var id_input = $("#put_todo_text_id_input").val();
  var text_input = $("#put_todo_text_text_input").val().trim();
  var url = BASE_URL_TODO + "todo/text";
  console.log(type+" request issued:  " + url);

  base_todo.id = id_input;
  base_todo.text = text_input;
$.ajax({
          type: type,
          url: url,
          data: JSON.stringify(base_todo),
          async:true,
          contentType: "application/json; charset=utf-8", // send json
          success: function(data){
            printString = '<table class="table"> <thead><tr><th scope="col">#</th><th scope="col">Text</th><th scope="col">Active</th></tr></thead><tbody>';
            printString += "<tr><td>" + data.id +"</td><td>" + data.text + "</td><td> " + data.active + "</td></tr>";
            printString += '</tbody></table>';
            $('#todo-response').html(printString);
          },
          error(jqXHR, textStatus, errorThrown){
            if (typeof jqXHR.responseJSON !== 'undefined'){
              $('#todo-response').html("<div class='alert alert-danger' role='alert'>ERROR : " + JSON.stringify(jqXHR.responseJSON.status)+"</div>");
            } else if(typeof jqXHR.responseText !== 'undefined') {
              $('#todo-response').html("<div class='alert alert-danger' role='alert'>ERROR : " + JSON.stringify(jqXHR.responseText)+"</div>");
            }
          }
        });
  $('#putTodoTextModal').modal('hide')
});
/************************************************************************************/
/************************************************************************************/
/************************************************************************************/
/************************************************************************************/
$("#button_delete_todo").click(function(){
  var type = "DELETE";
  var id_input = $("#delete_todo_id_input").val();
  var url = BASE_URL_TODO + "todo/delete";
  console.log(type+" request issued:  " + url);

  base_todo.id = id_input;
$.ajax({
          type: type,
          url: url,
          data: JSON.stringify(base_todo),
          async:true,
          contentType: "application/json; charset=utf-8", // send json
          success: function(data){
            $('#todo-response').html(data);
          },
          error(jqXHR, textStatus, errorThrown){
            if (typeof jqXHR.responseJSON !== 'undefined'){
              $('#todo-response').html("<div class='alert alert-danger' role='alert'>ERROR : " + JSON.stringify(jqXHR.responseJSON.status)+"</div>");
            } else if(typeof jqXHR.responseText !== 'undefined') {
              $('#todo-response').html("<div class='alert alert-danger' role='alert'>ERROR : " + JSON.stringify(jqXHR.responseText)+"</div>");
            }
          }
        });
  $('#deleteTodoModal').modal('hide')
});
/************************************************************************************/
/************************************************************************************/
/************************************************************************************/
/************************************************************************************/
$("#button_add_todo").click(function(){
  var type = "POST";
  var text_input = $("#post_todo_text_input").val().trim();
  if (text_input== ""){
    $('#todo-response').html("<div class='alert alert-danger' role='alert'>TEXT INPUT SHOULD NOT BE EMPTY!</div>");
    $('#addTodoModal').modal('hide');
    return;
  }
  var url = BASE_URL_TODO + "todo/add";
  console.log(type+" request issued:  " + url);

$.ajax({
          type: type,
          url: url,
          data: text_input,
          async:true,
          contentType: "application/json; charset=utf-8", // send json
          success: function(data){
            printString = '<table class="table"> <thead><tr><th scope="col">#</th><th scope="col">Text</th><th scope="col">Active</th></tr></thead><tbody>';
            printString += "<tr><td>" + data.id +"</td><td>" + data.text + "</td><td> " + data.active + "</td></tr>";
            printString += '</tbody></table>';
            $('#todo-response').html(printString);
          },
          error(jqXHR, textStatus, errorThrown){
            if (typeof jqXHR.responseJSON !== 'undefined'){
              $('#todo-response').html("<div class='alert alert-danger' role='alert'>ERROR : " + JSON.stringify(jqXHR.responseJSON.status)+"</div>");
            } else if(typeof jqXHR.responseText !== 'undefined') {
              $('#todo-response').html("<div class='alert alert-danger' role='alert'>ERROR : " + JSON.stringify(jqXHR.responseText)+"</div>");
            }
          }
        });
  $('#addTodoModal').modal('hide')
});
