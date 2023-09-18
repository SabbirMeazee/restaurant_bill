// common funtion================
function handlerValue(value,id) {
    const quantityField = document.getElementById(`${id}`);
    const quantityValue = quantityField.value;
    const quantityInt = parseInt(quantityValue);
    let newValue;
    if (value==true) {
         newValue = quantityInt + 1;
    }
    else {
         newValue = quantityInt - 1;
    }
    if(newValue<0){
        return 0;
    }
    quantityField.value = newValue;
    return newValue;
}

function updateTotal(itemNumber,price,id){
    const total = itemNumber * price;
    document.getElementById(`${id}`).innerHTML = total;
}

///burger==================

document.getElementById('brg-plus').addEventListener('click', function () {
    const itemNumber = handlerValue(true, 'burg-value');
    updateTotal(itemNumber, 15,'brg_amount');
})

document.getElementById('brg-minus').addEventListener('click', function () {
   const item= handlerValue(false,'burg-value');
    updateTotal(item,15, 'brg_amount');
})
// pizza=============

document.getElementById('pizza-plus').addEventListener('click', function () {
    const itemNumber = handlerValue(true, 'pizza-value');
    updateTotal(itemNumber, 27, 'pizza_amount');
})

document.getElementById('pizza-minus').addEventListener('click', function () {
    const item = handlerValue(false,'pizza-value');
    updateTotal(item, 27, 'pizza_amount');
})

// Mutton=================
document.getElementById('mutton-plus').addEventListener('click', function () {
    const itemNumber = handlerValue(true, 'mutton-value');
    updateTotal(itemNumber, 27, 'mutton_amount');
})

document.getElementById('mutton-minus').addEventListener('click', function () {
    const item = handlerValue(false, 'mutton-value');
    updateTotal(item, 27, 'mutton_amount');
})
// Fried Chicken=================
document.getElementById('fried-plus').addEventListener('click', function () {
    const itemNumber = handlerValue(true, 'fried-value');
    updateTotal(itemNumber, 27, 'fried_amount');
})

document.getElementById('fried-minus').addEventListener('click', function () {
    const item = handlerValue(false, 'fried-value');
    updateTotal(item, 27, 'fried_amount');
})