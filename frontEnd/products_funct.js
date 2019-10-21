/*
product-response

button_get_all_products


button_get_unique_product
	get_unique_product_id


button_put_product_price
	put_product_price_id_input
	put_product_price_price_input

button_add_new_product
	post_product_name
	post_product_description
	post_product_price

button_deete_product
	delete_product_id

*/
var base_product = {
       name: "",
       quantitySold: 0,
       description: "",
       price: 0.0,
       id: 1
   }

var BASE_URL = "http://localhost:3434/api/";

async function issueAjaxRequest(type, url, data_to_send=""){
  var returnData;
  console.log(type+"  request issued:  " + url);
  if (typeof data_to_send == "object"){
    data_to_send = JSON.stringify(data_to_send);
  }


  await $.ajax({
            type: type,
            url: url,
            data : data_to_send,
            contentType: "application/json; charset=utf-8", // send json
            async:true,
            success: function(data){
              if(data==""){
                $('#product-response').html("<div class='alert alert-danger' role='alert'>Ops there was an error! Server sent an empty body</div> ");
                return;
              }
              returnData =  data;
            },
            error(jqXHR, textStatus, errorThrown){
              var status_code = jqXHR.status;

              if (typeof jqXHR.responseJSON !== 'undefined'){
                $('#product-response').html("<div class='alert alert-danger' role='alert'>ERROR : " + JSON.stringify(jqXHR.responseJSON.status)+"</div>");

              } else if(typeof jqXHR.responseText !== 'undefined') {
                $('#product-response').html("<div class='alert alert-danger' role='alert'>ERROR : " + JSON.stringify(jqXHR.responseText)+"</div>");
              }
              return "";
            }
          });
          return returnData;

}
/************************************************************************************/
/************************************************************************************/
/************************************************************************************/
/************************************************************************************/

$("#button_get_all_products").click(async function(){
  var type = "GET";
  var url = BASE_URL + "products";
  var out_data;

  issueAjaxRequest(type, url).then(out_data => {
    if (out_data ==""){return;}
    var printString = '<table class="table"> <thead><tr><th scope="col">#</th><th scope="col">Name</th><th scope="col">Quantity Sold</th><th scope="col">Description</th><th scope="col">Price</th></thead><tbody>';
    out_data.forEach( product => {
      printString += "<tr><td>" + product.id +"</td><td>" + product.name + "</td><td> " + product.quantitySold +"</td><td>" + product.description + "</td><td>"+ product.price +  "</td></tr>";
    });
    printString += '</tbody></table>';
    $('#product-response').html(printString);
  })

  /*out_data = await issueAjaxRequest(type, url);

  console.log(out_data);
  var printString = '<table class="table"> <thead><tr><th scope="col">#</th><th scope="col">Name</th><th scope="col">Quantity Sold</th></tr><th scope="col">Description</th><th scope="col">Price</th></thead><tbody>';
  //var obj = JSON.parse(data.responseText);
  out_data.forEach( product => {
    printString += "<tr><td>" + product.id +"</td><td>" + product.name + "</td><td> " + product.quantitySold +"</td><td>" + product.description + "</td><td>"+ product.price +  "</td></tr>";
  });
  printString += '</tbody></table>';
  $('#product-response').html(printString);*/
});
/************************************************************************************/
/************************************************************************************/
/************************************************************************************/
/************************************************************************************/

$("#button_get_unique_product").click(async function(){
  var id_input = $("#get_unique_product_id").val();
  var type = "GET";
  var url = BASE_URL + "product/"+id_input;

  issueAjaxRequest(type, url).then(product => {
    if (product ==""){return;}
    var printString = '<table class="table"> <thead><tr><th scope="col">#</th><th scope="col">Name</th><th scope="col">Quantity Sold</th><th scope="col">Description</th><th scope="col">Price</th></thead><tbody>';
      printString += "<tr><td>" + product.id +"</td><td>" + product.name + "</td><td> " + product.quantitySold +"</td><td>" + product.description + "</td><td>"+ product.price +  "</td></tr>";
    printString += '</tbody></table>';
    $('#product-response').html(printString);
  })
  $('#getUniqueProductModal').modal('hide');
});
/************************************************************************************/
/************************************************************************************/
/************************************************************************************/
/************************************************************************************/
$("#button_get_sum_of_products").click(async function(){
  var type = "GET";
  var url = BASE_URL + "products/sold-products-sum";
  var out_data;

  issueAjaxRequest(type, url).then(out_data => {
    if (out_data ==""){return;}
    var printString = "<div class=\"alert alert-success\" role=\"alert\">Total sold products = "+out_data+"</div>";
    $('#product-response').html(printString);
  })
});
/************************************************************************************/
/************************************************************************************/
/************************************************************************************/
/************************************************************************************/
$("#button_get_income_sum").click(async function(){
  var type = "GET";
  var url = BASE_URL + "products/income-sum";
  var out_data;

  issueAjaxRequest(type, url).then(out_data => {
    if (out_data ==""){return;}
    var printString = "<div class=\"alert alert-success\" role=\"alert\">Total income = "+out_data+"</div>";
    $('#product-response').html(printString);
  })
});
/************************************************************************************/
/************************************************************************************/
/************************************************************************************/
/************************************************************************************/

$("#button_put_product_price").click(async function(){
  var id_input        = $("#put_product_price_id_input").val();
  var price_input     = $("#put_product_price_price_input").val();
  base_product.id     = id_input;
  base_product.price  = price_input;

  var type  = "PUT";
  var url   = BASE_URL + "product/update/price";

  issueAjaxRequest(type, url, base_product).then(product => {
    if (product ==""){return;}
    var printString = '<table class="table"> <thead><tr><th scope="col">#</th><th scope="col">Name</th><th scope="col">Quantity Sold</th><th scope="col">Description</th><th scope="col">Price</th></thead><tbody>';
      printString += "<tr><td>" + product.id +"</td><td>" + product.name + "</td><td> " + product.quantitySold +"</td><td>" + product.description + "</td><td>"+ product.price +  "</td></tr>";
    printString += '</tbody></table>';
    $('#product-response').html(printString);
  })
  $('#putProductPriceModal').modal('hide');
});

/************************************************************************************/
/************************************************************************************/
/************************************************************************************/
/************************************************************************************/

$("#button_add_new_product").click(async function(){
  var name_input            = $("#post_product_name").val();
  var description_input     = $("#post_product_description").val();
  var price_input           = $("#post_product_price").val();
  base_product.name         = name_input;
  base_product.description  = description_input;
  base_product.price        = price_input;

  var type  = "POST";
  var url   = BASE_URL + "product/add";

  issueAjaxRequest(type, url, base_product).then(product => {
    if (product ==""){return;}
    var printString = '<table class="table"> <thead><tr><th scope="col">#</th><th scope="col">Name</th><th scope="col">Quantity Sold</th><th scope="col">Description</th><th scope="col">Price</th></thead><tbody>';
      printString += "<tr><td>" + product.id +"</td><td>" + product.name + "</td><td> " + product.quantitySold +"</td><td>" + product.description + "</td><td>"+ product.price +  "</td></tr>";
    printString += '</tbody></table>';
    $('#product-response').html(printString);
  })
  $('#putProductPriceModal').modal('hide');
});
/************************************************************************************/
/************************************************************************************/
/************************************************************************************/
/************************************************************************************/

$("#button_deete_product").click(async function(){
  var id_input        = $("#delete_product_id").val();

  var type  = "DELETE";
  var url   = BASE_URL + "product/delete";

  issueAjaxRequest(type, url, id_input).then(out_data => {
    if (product ==""){return;}
    var printString = "<div class=\"alert alert-success\" role=\"alert\">Action = "+out_data+"</div>";
    $('#product-response').html(printString);
  })
  $('#delteProductModal').modal('hide');
});
