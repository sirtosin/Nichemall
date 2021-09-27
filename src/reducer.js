const reducer = (state, action) => {
  if (action.type === "SET_USER") {
    return { ...state, user: action.user };
  }
  if (action.type === "CLEAR_CART") {
    return { ...state, cart: [], qty: 0, total: 0 };
  }
  if (action.type === "ADD") {
    console.log(state);
    return {
      ...state,
      cart: [...state.cart, action.payload],
      qty: state.qty + action.payload.qty,
      total: state.total + action.payload.price,
      loading: false,
    };
  }
  if (action.type === "REMOVE") {
    //console.log(action.payload);
    console.log(state.cart._id);

    return {
      ...state,
      cart: state.cart.filter(
        (cartItem) => cartItem._id !== action.payload._id
      ),

      qty: state.qty - action.payload.qty,
      total: state.total - action.payload.price,
    };
  }
  // if (action.type === "INCREASE") {
  //   let tempCart = state.cart.map((cartItem) => {
  //     if (cartItem._id === action.payload._id) {
  //       return { ...cartItem, qty: cartItem.qty + 1 };
  //     }
  //     return cartItem;
  //   });
  //   return { ...state, cart: tempCart };
  // }
  // if (action.type === "DECREASE") {
  //   let tempCart = state.cart
  //     .map((cartItem) => {
  //       if (cartItem._id === action.payload) {
  //         return { ...cartItem, qty: cartItem.qty - 1 };
  //       }
  //       return cartItem;
  //     })
  //     .filter((cartItem) => cartItem.qty !== 0);
  //   return { ...state, cart: tempCart };
  // }
  if (action.type === "GET_TOTALS") {
    let { total, qty } = state.cart.reduce(
      (cartTotal, cartItem) => {
        const { price, qty } = cartItem;
        const itemTotal = price * qty;

        cartTotal.total += itemTotal;
        cartTotal.qty += qty;
        return cartTotal;
      },
      {
        total: 0,
        qty: 0,
      }
    );
    total = parseFloat(total.toFixed(2));

    return { ...state, total, qty };
  }

  if (action.type === "LOADING") {
    return { ...state, loading: true };
  }
  if (action.type === "DISPLAY_ITEMS") {
    return {
      ...state,
      cart: state.cart,
      loading: false,
    };
  }
  if (action.type === "TOGGLE_AMOUNT") {
    let tempCart = state.cart
      .map((cartItem) => {
        if (cartItem._id === action.payload._id) {
          if (action.payload.type === "inc") {
            return { ...cartItem, qty: cartItem.qty + 1 };
          }
          if (action.payload.type === "dec") {
            return { ...cartItem, qty: cartItem.qty - 1 };
          }
        }
        return cartItem;
      })
      .filter((cartItem) => cartItem.qty !== 0);
    return { ...state, cart: tempCart };
  }
  throw new Error("no matching action type");
  // return state
};

export default reducer;
