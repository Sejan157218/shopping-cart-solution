function quantity(product,price,isIncreasing){
    const products = document.getElementById(product + '-quantity');
    let productValue = products.value;
    if (isIncreasing==true){
        productValue = parseInt(products.value) + 1;
    }
    else if (productValue>0){
        productValue = parseInt(products.value) - 1;
    }
    products.value = productValue;
    const priceTotal = document.getElementById(product + '-price')
    const productTotalPrice = products.value * price;
    priceTotal.innerText = productTotalPrice;
    totalPrice();
}

function productValue(product){
    const products = document.getElementById(product + '-quantity');
    const productsValue = products.value;
    return productsValue;
}

function totalPrice(){
    const phoneTotal = productValue('phone');
    const caseTotal = productValue('case');
    const subTotal = phoneTotal * 1219 + caseTotal * 59;
    const tax = subTotal * 0.1;
    const total = subTotal + tax;
    document.getElementById('subtotal-amount').innerText= subTotal;
    document.getElementById('tax-amount').innerText= tax;
    document.getElementById('total-amount').innerText= total;
}

document.getElementById('phone-plus').addEventListener('click',function(){
    quantity('phone',1219,true);
})
document.getElementById('phone-minus').addEventListener('click',function(){
    quantity('phone',1219,false);
})
document.getElementById('plus-button').addEventListener('click',function(){
    quantity('case',59,true);
})
document.getElementById('minus-button').addEventListener('click',function(){
    quantity('case',59,false);
})

