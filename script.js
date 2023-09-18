document.getElementById('brg-plus').addEventListener('click', function(){
    const quantityField = document.getElementById('burg-value');
    const quantityValue = quantityField.value;
    const quantityInt= parseInt(quantityValue);
    console.log(quantityValue)
    const newValue= quantityInt+1;
    quantityField.value=newValue;

})