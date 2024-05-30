const product = [
    {
        id: 0,
        image: 'images/Custard.jpg',
        title: 'Custard Pie',
        price: 25,
    },
    {
        id: 1,
        image: 'images/Creamy-Spinach.jpg',
        title: 'Creamy Spinach Pie',
        price: 30,
    },
    {
        id: 2,
        image: 'images/chowfan.jpg',
        title: 'Chowfan Pie',
        price: 45,
    }
];
const categories = [...new Set(product.map((item)=>
    {return item}))]
    let i=0;
document.getElementById('root').innerHTML = categories.map((item)=>
{
    var {image, title, price} = item;
    return(
        `<div class='box'>
            <div class='img-box'>
                <img class='images' src=${image}></img>
            </div>
        <div class='bottom'>
        <p>${title}</p>
        <h2>Php ${price}.00</h2>`+
        "<button class='btn2' onclick='addtocart("+(i++)+")'>Add to cart</button>"+
        `</div>
        </div>`
    )
}).join('')

var cart = [];

function addtocart(a){
    cart.push({...categories[a]});
    displayCart();
}

function delElement(a){
    cart.splice(a, 1);
    displayCart();
}

function displayCart(a){
    let j = 0, total=0;
    document.getElementById("count").innerHTML=cart.length;
    if(cart.length==0){
        document.getElementById('cartItem').innerHTML = "Your cart is empty";
        document.getElementById("total").innerHTML = "Php "+0+".00";
    }else{
        document.getElementById("cartItem").innerHTML = cart.map((items)=>
        {
            var {image, title, price} = items;
            total=total+price;
            document.getElementById("total").innerHTML = "Php "+total+".00";
            return(
                `<div class='cart-item'>
                <div class='row-img'>
                    <img class='rowing' src=${image}>
                </div>
                <p style='font-size:1.2vw;'>${title}</p>`+
                "<i class='fa-solid fa-trash' onclick='delElement("+ (j++) +")'></i></div>"
            );
        }).join('');
    }
}

var orderNow = document.getElementById('payment');
window.onclick = function(event) {
    if (event.target == orderNow) {
        orderNow.style.display = "none";
    }
}