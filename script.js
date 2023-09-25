function getTextValue(id) {
    const totalid = document.getElementById(`${id}`).innerText;
    const totalValue = parseInt(totalid)
    return totalValue;

}
// common funtion================
function handlerValue(value, id) {
    const quantityField = document.getElementById(`${id}`);

    const quantityValue = quantityField.value;
    const quantityInt = parseInt(quantityValue);
    let newValue;
    if (value == true) {
        newValue = quantityInt + 1;
    }
    else {
        newValue = quantityInt - 1;
    }
    if (newValue < 0) {
        return 0;
    }
    quantityField.value = newValue;
    return newValue;
}

function updateTotal(itemNumber, price, id) {
    const total = itemNumber * price;
    document.getElementById(`${id}`).innerHTML = total;
    return total;
}
function CalculateSub() {
    const burgerTotal = getTextValue('brg_amount')
    const pizzaTotal = getTextValue('pizza_amount')
    const MuttonTotal = getTextValue('mutton_amount')
    const FriedTotal = getTextValue('fried_amount')
    const drinkTotal = getTextValue('drink_amount')
    const subTotal = burgerTotal + pizzaTotal + MuttonTotal + FriedTotal + drinkTotal;
    document.getElementById('subTotal').innerText = subTotal;
    //calculate tax=========
    const tax= (subTotal*0.06).toFixed(2)
  document.getElementById('tax').innerText=tax;
    const tax2 = document.getElementById('tax').innerText
   const tax3= parseFloat(tax2)
    //total==========
    const total = subTotal+tax3;
    document.getElementById('total').innerText = total;

}

///burger==================

document.getElementById('brg-plus').addEventListener('click', function () {
    const itemNumber = handlerValue(true, 'burg-value');
    updateTotal(itemNumber, 15, 'brg_amount');
    CalculateSub()

})

document.getElementById('brg-minus').addEventListener('click', function () {
    const item = handlerValue(false, 'burg-value');
    updateTotal(item, 15, 'brg_amount');
    CalculateSub()
})
// pizza=============

document.getElementById('pizza-plus').addEventListener('click', function () {
    const itemNumber = handlerValue(true, 'pizza-value');
    updateTotal(itemNumber, 27, 'pizza_amount');
    CalculateSub()
})

document.getElementById('pizza-minus').addEventListener('click', function () {
    const item = handlerValue(false, 'pizza-value');
    updateTotal(item, 27, 'pizza_amount');
})

// Mutton=================
document.getElementById('mutton-plus').addEventListener('click', function () {
    const itemNumber = handlerValue(true, 'mutton-value');
    updateTotal(itemNumber, 30, 'mutton_amount');
    CalculateSub()
})

document.getElementById('mutton-minus').addEventListener('click', function () {
    const item = handlerValue(false, 'mutton-value');
    updateTotal(item, 30, 'mutton_amount');
    CalculateSub()
})
// Fried Chicken=================
document.getElementById('fried-plus').addEventListener('click', function () {
    const itemNumber = handlerValue(true, 'fried-value');
    updateTotal(itemNumber, 24, 'fried_amount');
    CalculateSub()
})

document.getElementById('fried-minus').addEventListener('click', function () {
    const item = handlerValue(false, 'fried-value');
    updateTotal(item, 24, 'fried_amount');
    CalculateSub()
})
// Drink=================
document.getElementById('drink-plus').addEventListener('click', function () {
    const itemNumber = handlerValue(true, 'drink-value');
    updateTotal(itemNumber, 5, 'drink_amount');
    CalculateSub()
})

document.getElementById('drink-minus').addEventListener('click', function () {
    const item = handlerValue(false, 'drink-value');
    updateTotal(item, 5, 'drink_amount');
    CalculateSub()
})
