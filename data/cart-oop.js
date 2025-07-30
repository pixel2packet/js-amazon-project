const cart = {
    cartItems: undefined,

    loadFromStorage() {
        this.cartItems = JSON.parse(localStorage.getItem('cart-oop'));

        if (!this.cartItems) {
            this.cartItems = [{ // deduplication or normalizing data, no need to resave the same data
                productId: `e43638ce-6aa0-4b85-b27f-e1d07eb678c6`,
                quantity: 2,
                deliveryOptionId: '1',
            }, {
                productId: `15b6fc6f-327a-4ec4-896f-486349e85a3d`,
                quantity: 1,
                deliveryOptionId: '2',
            }];
        }
    },

    saveToStorage() {
        localStorage.setItem('cart-oop', JSON.stringify(this.cartItems));
    },

    addToCartDirect(productId, quantity) {
        let matchingItem;

        this.cartItems.forEach((cartItem) => {
            if (productId === cartItem.productId) {
                matchingItem = cartItem;
            }
        });

        if (matchingItem) {
            matchingItem.quantity += Number(quantity);
        } else {
            this.cartItems.push({
                productId: productId,
                quantity: Number(quantity),
                deliveryOptionId: '1',
            });
        }
        this.saveToStorage();
    },

    // addToCart(productId) {
    //     let matchingItem;

    //     this.cartItems.forEach((cartItem) => {
    //         if (productId === cartItem.productId) {
    //             matchingItem = cartItem;
    //         }
    //     });

    //     const selectElement = document.getElementById(`js-quantity-selector-${productId}`)

    //     // const selectedValue = selectElement.value;
    //     // console.log('selectedValue', selectedValue)
    //     if (!selectElement) {
    //         console.warn(`Quantity selector not found for productId: ${productId}`);
    //         return;
    //     }

    //     const selectedValue = selectElement.value;

    //     if (matchingItem) {
    //         matchingItem.quantity += Number(selectedValue);
    //     } else {
    //         this.cartItems.push({
    //             productId: productId,
    //             quantity: Number(selectedValue),
    //             deliveryOptionId: '1',
    //         });
    //     }
    //     this.saveToStorage();
    // },

    removeFromCart(productId) {
        // const newCart = [];

        const newCart = this.cartItems.filter((cartItem) => {
            return cartItem.productId !== productId
        });

        this.cartItems = newCart;

        this.saveToStorage();
    },

    calculateCartQuantity() {
        // let cartQuantity = 0;

        // cart.forEach((cartItem) => {
        // cartQuantity += cartItem.quantity;
        // });

        // return cartQuantity;

        return this.cartItems.reduce((acc, item) => {return acc + item?.quantity;}, 0);
    },

    updateQuantity(productId, newQuantity) {
        let matchingItem;

        this.cartItems.forEach((cartItem) => {
            if (productId === cartItem.productId) {
            matchingItem = cartItem;
            }
        });

        matchingItem.quantity = newQuantity;

        this.saveToStorage();
    },

    updateDeliveryOption(productId, deliveryOptionId) {
        let matchingItem;

        this.cartItems.forEach((cartItem) => {
            if (productId === cartItem.productId) {
                matchingItem = cartItem;
            }
        });

        matchingItem.deliveryOptionId = deliveryOptionId;

        this.saveToStorage();
    },
}

cart.loadFromStorage();

// window.addEventListener('DOMContentLoaded', () => {
//     cart.loadFromStorage();
//     cart.addToCart('83d4ca15-0f35-48f5-b7a3-1ea210004f2e');
// });
cart.addToCartDirect('83d4ca15-0f35-48f5-b7a3-1ea210004f2e');

console.log(cart);





 