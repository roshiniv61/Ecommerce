import { createContext, useState, useEffect } from "react";
import products from "../data/products";
import categories from "../data/categories";
import LogoImg from '../assets/Logo.png'; // Import your logo image

export const ShopContext = createContext();

const ShopContextProvider = (props) => {
  function generateUniqueCode(customerId) {
    const timestamp = Date.now().toString(36); // Base-36 representation of current timestamp
    const randomPart = Math.random().toString(36).substring(2, 8); // Random string of 6 characters
    return `${customerId}-${timestamp}-${randomPart}`; // Combine customer ID, timestamp, and random part
  }

  // Usage example
  const customerId = 'customer123'; // This should be unique for each customer
  const uniqueCodePromoCode = generateUniqueCode(customerId);
  // console.log(uniqueCodePromoCode); // e.g., "customer123-kf8w6o3-abc123"



  const [productsData, setProductsData] = useState(products);
  const [counters, setCounters] = useState([]);
  const [paymentMethod, setPaymentMethod] = useState('');
  const [promoCode, setPromoCode] = useState('');
  const [finalPriceDetails, setFinalPriceDetails] = useState('');
  const [finalData, setFinalData] = useState('');



  const currency = "$";
  const delivery_fee = 10;
  const categoriesData = categories;

  const [search, setSearch] = useState('');
  const [cartItems, setCartItems] = useState(() => {
    try {
      const savedCart = localStorage.getItem('cartItems');
      console.log("Saved cart value:", savedCart);

      const parsedCart = savedCart ? JSON.parse(savedCart) : {};
      // Clean up any null entries
      delete parsedCart['null'];
      return parsedCart;
    } catch (error) {
      console.error("Failed to parse cart items from localStorage:", error);
      return {}; // Return empty object if parsing fails
    }
  });

  const updateLocalStorage = (items) => {
    if (items) {
      // Clean up null entries before saving
      const cleanedItems = Object.fromEntries(
        Object.entries(items).filter(([key, value]) => value !== null)
      );
      setCounters(cleanedItems?.sizes);
      localStorage.setItem('cartItems', JSON.stringify(cleanedItems));
    } else {
      console.error('Trying to save undefined items to localStorage');
    }
  };


  const isValidCartItem = (item) => (
    item && item.productId && item.productName && item.price
  );

  // const removeNullEntries = (cart) => {
  //   const cleanedCart = { ...cart };
  //   delete cleanedCart['null'];
  //   return cleanedCart;
  // };


  // When setting the cart items

  const addToCart = (newItems) => {
    if (typeof newItems === 'object' && newItems !== null) {
      const validItems = Object.values(newItems).every(isValidCartItem);

      if (validItems) {
        const itemsWithLogo = Object.keys(newItems).reduce((acc, key) => {
          acc[key] = {
            ...newItems[key],
            logo: {}
          };
          return acc;
        }, {});

        const updatedCart = { ...cartItems, ...itemsWithLogo };


        setCartItems(updatedCart);
        updateLocalStorage(updatedCart);

      } else {
        console.error('Invalid cart items: Each item must have productId, productName, and price.');
      }
    } else {
      console.error('Invalid input: Cart items should be an object.');
    }
  };

  const removeFromCart = (productId) => {
    setCartItems(prevItems => {
      const newCartItems = { ...prevItems };
      delete newCartItems[productId];
      updateLocalStorage(newCartItems);
      return newCartItems;
    });
  };

  const updateCartItemLogo = (productId, newLogo) => {
    setCartItems(prevItems => {
      const updatedItems = {
        ...prevItems,
        [productId]: {
          ...prevItems[productId],
          logo: newLogo
        }
      };
      updateLocalStorage(updatedItems);
      return updatedItems;
    });
  };


  const handleCloseCounterSize = (index) => {
    setCounters(prevCounters => {
      return prevCounters.filter((_, i) => i !== index);
    });
  };

  // Increment handler
  const handleIncrementCounterSize = (index) => {
    // if (!Array.isArray(prevCounters)) {
    //   console.error("prevCounters is not an array:", prevCounters);
    //   return []; // Return an empty array or handle the error as needed
    // }
    setCounters(prevCounters => {
      const newCounters = [...prevCounters];
      newCounters[index].count = (newCounters[index].count || 0) + 1; // Increment the counter at the specified index
      return newCounters;
    });
  };

  // Decrement handler
  const handleDecrementCounterSize = (index) => {
    setCounters(prevCounters => {
      // if (!Array.isArray(prevCounters)) {
      //   console.error("prevCounters is not an array:", prevCounters);
      //   return []; // Return an empty array or handle the error as needed
      // }

      const newCounters = [...prevCounters];
      newCounters[index].count = Math.max((newCounters[index].count || 0) - 1, 0); // Decrement but not below 0
      return newCounters;
    });
  };

  const handleSizeClick = (index, size) => {
    setCounters(prevCounters => {
      if (!Array.isArray(prevCounters)) {
        console.error("prevCounters is not an array:", prevCounters);
        return []; // Return an empty array or handle the error as needed
      }
      const newCounters = [...prevCounters];
      const sizeIndex = newCounters.findIndex(counter => counter?.size === size);

      if (sizeIndex > -1) {
        // Size already exists, update the count
        newCounters[sizeIndex].count = (newCounters[sizeIndex].count || 0) + 1;
      } else {
        // Size doesn't exist, add new entry
        newCounters.push({ size, count: 1 });
      }

      return newCounters;
    });
    // console.log(index, size);
  };

  useEffect(() => {
    const newFinalData = {
      cartItems,
      finalPriceDetails,
      promoCode,
      paymentMethod,
    };
    setFinalData(newFinalData);
    console.log(newFinalData, "ShopContextProvider--finalData");
  }, [cartItems, finalPriceDetails, promoCode, paymentMethod]);
  console.log(finalData, ' console.log(finalData,')



  const value = {
    productsData,
    setProductsData,
    categoriesData,
    currency,
    delivery_fee,
    cartItems,
    setCartItems,
    addToCart,
    removeFromCart,
    updateCartItemLogo,
    search,
    setSearch,
    paymentMethod, setPaymentMethod,
    promoCode, setPromoCode,
    uniqueCodePromoCode,
    finalPriceDetails, setFinalPriceDetails,
    finalData, setFinalData,
    counters, setCounters, handleCloseCounterSize, handleIncrementCounterSize, handleDecrementCounterSize, handleSizeClick
  };

  return (
    <ShopContext.Provider value={value}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;

