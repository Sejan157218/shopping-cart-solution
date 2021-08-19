function upDateProduct(product,price,isIncreasing){
    const productQuantity = document.getElementById(product+'-quantity');
    let productQuantityValue = productQuantity.value;
    if (isIncreasing==true){
        productQuantityValue = parseInt(productQuantityValue) + 1;
    }
    else if(productQuantityValue > 0){
        productQuantityValue = parseInt(productQuantityValue) - 1;
    }
    productQuantity.value = productQuantityValue;
    const totalPrice = document.getElementById(product+'-price');
    const newTotalPrice = price * productQuantity.value;
    totalPrice.innerText = newTotalPrice;
    calculate();
}
function getProductValue(product){
    const Product = document.getElementById(product + '-quantity');
    const ProductValue = parseInt(Product.value);
    return ProductValue;
}
// calculate
function calculate(){
    const phonePrice = getProductValue('phone') *1219;
    const casePrice = getProductValue('case') * 59;
    const subTotal = phonePrice + casePrice;
    const tax = subTotal * 0.1;
    const total = subTotal + tax;
    document.getElementById('subtotal-amount').innerText =subTotal;
    document.getElementById('tax-amount').innerText =tax;
    document.getElementById('total-amount').innerText =total;
    
}
// phone event handler
document.getElementById('phone-plus').addEventListener('click',function(){      
    upDateProduct('phone',1219,true);
})
document.getElementById('phone-minus').addEventListener('click',function(){
    upDateProduct('phone',1219,false);    
})
// // case event handler
document.getElementById('plus-button').addEventListener('click',function(){
    upDateProduct('case',59,true);
})
document.getElementById('minus-button').addEventListener('click',function(){
    upDateProduct('case',59,false);    
})