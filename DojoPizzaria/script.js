var pizza = {
    crustType: ["regular", "deepdish", "hand-tossed"],
    sauceType: ["traditional","marinara",],
    cheeses: ["feta", "mozzarella", "blue-cheese"],
    toppings: ["pepperoni", "bacon", "sausage", "olives", "mushrooms", "onions"],
}


function pizzaOven(crustType, sauceType, cheeses, toppings) {
    var pizza = {};
    pizza.crustType = crustType;
    pizza.sauceType = sauceType;
    pizza.cheeses = cheeses;
    pizza.toppings = toppings;
    return pizza;
}

var newpizza0= pizzaOven("deepdish", "traditional", ["mozzarella"], ["pepperoni", "sausage"]);
console.log("Heres your pizza", newpizza0)

var newpizza1 = pizzaOven("hand-tossed", "marinara", ["mozzarella", "feta"], ["mushrooms", "olives", "onions"]);
console.log("Heres your pizza", newpizza1)

var newpizza2 = pizzaOven("regular", "traditional", "feta", "olives")
console.log("Heres your pizza", newpizza2)

var newpizza3 = pizzaOven("hand-tossed", "marinara", "blue-cheese", "mushroom")
console.log("Heres your pizza", newpizza3)

function randomPizza(){

}


