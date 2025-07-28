export let cart = JSON.parse(localStorage.getItem('cart'));


if (!cart) {
    cart = [{ // deduplication or normalizing data, no need to resave the same data
        productId: `e43638ce-6aa0-4b85-b27f-e1d07eb678c6`,
        quantity: 2,
    }, {
        productId: `15b6fc6f-327a-4ec4-896f-486349e85a3d`,
        quantity: 1,
    }];
}

function saveToStorage() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

export function addToCart(productId) {
    let matchingItem;

    cart.forEach((cartItem) => {
        if (productId === cartItem.productId) {
            matchingItem = cartItem;
        }
    });

    const selectElement = document.getElementById(`js-quantity-selector-${productId}`)

    const selectedValue = selectElement.value;
    console.log('selectedValue', selectedValue)

    if (matchingItem) {
        matchingItem.quantity += Number(selectedValue);
    } else {
        cart.push({
            productId: productId,
            quantity: Number(selectedValue)
        });
    }

    saveToStorage();
}

export function removeFromCart(productId) {
    const newCart = [];

    cart.forEach((cartItem) => {
        if (cartItem.productId !== productId) {
            newCart.push(cartItem);
        }
    });

    cart = newCart;

    saveToStorage();
}