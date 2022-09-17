function calcularPrecioConDescuento(precio, descuento){
    const porcentajePrecioConDesuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDesuento) / 100;

    return precioConDescuento;
}

function onClickButtonPriceDiscount(){
    const inputPrice = document.getElementById("InputPrice")
    const priceValue = inputPrice.value;

    //const InputDiscount = document.getElementById("InputDiscount")
    //const discountValue = InputDiscount.value;

    const inputCoupon = document.getElementById("InputCoupon");
    const couponValue = inputCoupon.value;

    const coupons = [
        {
            name: "fgm",
            discount: 15,
        },
        {
            name: "collectors",
            discount: 30,
        },
        {
            name: "verano",
            discount: 25,
        },
    ];

    const isCouponValueValid = function (coupon) {
        return coupon.name === couponValue;
    };
    
    const userCoupon = coupons.find(isCouponValueValid);
    

    if (!userCoupon) {
        alert("El cupón " + couponValue + "no es válido");
    } else {
        const descuento = userCoupon.discount;
        const precioConDescuento = calcularPrecioConDescuento(priceValue, descuento);
    
        const resultP = document.getElementById("ResultP");
        resultP.innerText = "El precio con descuento son: $" + precioConDescuento;
    }
}
