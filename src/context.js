import React, { useState, useReducer, useEffect, useContext } from "react";
import { sublinks } from "./data";
import reducer from "./reducer";
import { useCallback } from "react";
import { auth } from "./firebase";

const url = " https://mrestapi.herokuapp.com/product";
const AppContext = React.createContext();

const initialState = {
  loading: false,
  cart: [],
  total: 0,
  qty: 0,
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // will only run once when the app component loads...

    auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS >>> ", authUser);

      if (authUser) {
        // the user just logged in / the user was logged in

        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  const fetchProduct = useCallback(async () => {
    try {
      const response = await fetch(`${url}`);
      const data = await response.json();
      console.log(data);
      dispatch({ type: "LOADING" });
      dispatch({ type: "DISPLAY_ITEMS", payload: data });

      if (data) {
        const newProduct = data.map((item) => {
          const { _id, name, image, price, qty } = item;

          return {
            id: _id,
            name: name,
            image: image,
            price: price,
            qty: qty,
          };
        });
        setProducts(newProduct);
      } else {
        setProducts([]);
      }
    } catch (error) {
      console.log(error);
    }
  });
  useEffect(() => {
    fetchProduct();
  }, []);

  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" });
  };
  const addToCart = (name, image, price, qty, id) => {
    dispatch({
      type: "ADD",
      payload: { name: name, image: image, price: price, qty: qty, _id: id },
    });
  };
  const remove = (_id, price, qty) => {
    dispatch({ type: "REMOVE", payload: { _id, price, qty } });
  };
  // const increase = (_id) => {
  //   dispatch({
  //     type: "INCREASE",
  //     payload: _id,
  //   });
  // };
  // const decrease = (_id) => {
  //   dispatch({ type: "DECREASE", payload: _id });
  // };

  const toggleAmount = (_id, type) => {
    dispatch({ type: "TOGGLE_AMOUNT", payload: { _id, type } });
  };

  useEffect(() => {
    dispatch({ type: "GET_TOTALS" });
  }, [state.cart]);

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);
  const [page, setPage] = useState({ page: "", links: [] });
  const [location, setLocation] = useState({});
  const openSidebar = () => {
    setIsSidebarOpen(true);
  };
  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };
  const openSubmenu = (text, coordinates) => {
    const page = sublinks.find((link) => link.page === text);
    setPage(page);
    setLocation(coordinates);
    setIsSubmenuOpen(true);
  };
  const closeSubmenu = () => {
    setIsSubmenuOpen(false);
  };

  return (
    <AppContext.Provider
      value={{
        isSidebarOpen,
        openSidebar,
        closeSidebar,
        isSubmenuOpen,
        openSubmenu,
        closeSubmenu,
        page,
        location,
        products,
        ...state,
        clearCart,
        remove,
        toggleAmount,
        addToCart,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
