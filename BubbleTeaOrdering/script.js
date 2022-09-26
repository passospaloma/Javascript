var toppings = [];

function AllToppings(tea, milk, toppings) {
    this.tea = tea;
    this.milk = milk;
    this.toppings = toppings;
}
let order = [];
var cost = 0;

function addTopping() {
    var valueT = document.getElementsByName("toppings");
    let output = document.getElementById("output");
    var tp = "";

    for (var i = 0; i < valueT.length; i++) {
        if (valueT[i].checked) {
            tp = valueT[i].value;
            toppings.push(tp);
        }
    }
    for (var i = 0; i < toppings.length; i++) {
        var item = document.createElement("li");
        item.appendChild(document.createTextNode(toppings[i]));
        output.appendChild(item);
    }
}

function removeTopping() {
    var els = document.getElementsByTagName("li");
    var removeEl = els[els.length - 1];
    toppings.pop();
    var containerEl = removeEl.parentNode;
    containerEl.removeChild(removeEl);
    console.log(toppings);
}

function addDrink() {
    var value = document.getElementsByName("teaType");
    var t = "";
    var m = document.getElementById("milkOption").value;
    for (var i = 0; i < value.length; i++) {
        if (value[i].checked) {
            t = value[i].value;
        }
    }

    let drink = new AllToppings(t, m, toppings);
    order.push(drink);
    calculateCost(drink);
    printRow(drink, cost);
    console.log(drink);
}

function removeDrink() {
    var otd = document.getElementsByTagName("tr");
    var removeEl = otd[otd.length - 1];
    order.pop();
    var containerEl = removeEl.parentNode;
    containerEl.removeChild(removeEl);
    console.log(order);
}

function printRow(data, c) {
    var table = document.getElementById("myTable");
    var row = `<tr>
        <td>${data.tea}</td>
        <td>${data.milk}</td>
        <td>${data.toppings}</td>
        <td>${c}</td>
    </tr>`;
    table.innerHTML += row;
}

function emptyOrder() {
    order = [];
    var table = document.getElementById("myTable");
    table.remove();
    console.log(order);
}

function calculateCost(d) {
    if (d.tea == "Red") {
        cost += 3.0;
    } else if (d.tea == "Green") {
        cost += 2.5;
    } else {
        d.tea == "Black";
        cost += 2.0;
    }

    for (i = 0; i < d.toppings.length; i++) {
        if (d.toppings == "Pears") {
            cost += 0.25;
        }
        if (d.toppings == "Mango Stars") {
            cost += 1.0;
        }
        if (d.toppings == "Grass Jelly") {
            cost += 0.5;
        }
        if (d.toppings == "Coconut Jelly") {
            cost += 0.75;
        }
    }
    if (d.milk == "true") {
        cost += 1.0;
    }
    return cost;
}
