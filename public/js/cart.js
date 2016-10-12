/**
 * Created by rishabhkhanna on 12/10/16.
 */

var cart = [];
$(function () {

    $('.add-items').click(function () {
            var name = $('#product').html();
            var price = $('#price').html();
            console.log(name , price);
            addItemToCart(name , price , 1);
            displayCart();
    })

});

function savecart() {
    localStorage.setItem("shoppingCart" , JSON.stringify(cart));
}

function loadCart(){
    cart = JSON.parse(localStorage.getItem("shoppingCart"));
}

function addItemToCart(name , price , count){

    for(var i in cart){

        if(cart[i].name === name){
            cart[i].count++;
            savecart();
            return;
        }

    }
    var item  = new Item(name , price , count);
    cart.push(item);
    savecart();
    displayCart();

}

    function displayCart(){
        var cartArray  = listcart();
        var output = "";
        for(var i in cartArray){
            output += "<tr><td><button onclick= \"removeItemFromCartAll("+ "'"+cartArray[i].name+"'"+");\" >X</button>"+ cartArray[i].name+"</td><td><button onclick= \"removeItemFromCart("+ "'"+cartArray[i].name+"'"+");\">-</button>"+cartArray[i].count+"<button  onclick= \"AddItemFromCart("+ "'"+cartArray[i].name+"'"+");\">+</button></td><td>"+cartArray[i].price +"</td><td>"+ cartArray[i].price * cartArray[i].count + "</td></tr>"
        }
        $(".show-cart").html(output);
        $("#total-cart").html(totalCost());

    }

