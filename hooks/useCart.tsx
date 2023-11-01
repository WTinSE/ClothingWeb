"use client"
import { CartProductType } from "@/app/product/[productId]/ProductDetails";
import { product } from "@/utils/product";
import { createContext,useCallback,useContext,useEffect,useState } from "react";
import toast, { Toast } from "react-hot-toast";

type CartContextType ={
    cartTotalQty:number
    cartProducts:CartProductType[] | null;
    handleAddProductToCart:(product:CartProductType)=> void
    handleRemoveProductFromCart:(product:CartProductType)=> void
    handleCartQtyIncrease:(product:CartProductType)=> void
    handleCartQtyDecrease:(product:CartProductType)=> void
    handleClearCart:()=> void
}

export const CartContext =  createContext<CartContextType|null>(null);
interface Props{
    [propName:string]:any;
}export const CartContextProvider = (props: Props) => {
    const [cartTotalQty, setCartTotalQty] = useState(10);
    const [cartProducts, setCartProducts] = useState<CartProductType[] | null>(null);

    // Initialize cart products from local storage when the component mounts.
    useEffect(() => {
        const cartItems: any = localStorage.getItem('eShopCartItems');
        const cProducts: CartProductType[] | null = JSON.parse(cartItems);

        setCartProducts(cProducts);
    }, []);

    // Define a function to add a product to the cart.
    const handleAddProductToCart = useCallback((product: CartProductType) => {
        setCartProducts((prev) => {
            let updatedCart;

            if (prev) {
                updatedCart = [...prev, product];
            } else {
                updatedCart = [product];
            }
            toast.success("Product added to cart");
            localStorage.setItem('eShopCartItems', JSON.stringify(updatedCart));
            return updatedCart;
        });
    }, []);

    // Define a function to remove a product from the cart.
    const handleRemoveProductFromCart = useCallback((product: CartProductType) => {
        if (cartProducts) {
            const filteredProducts = cartProducts.filter((item) => item.id !== product.id);
            setCartProducts(filteredProducts);
            toast.success("Product removed from cart");
            localStorage.setItem("eShopCartItems", JSON.stringify(filteredProducts));
        }
    }, [cartProducts]);
        const handleCartQtyIncrease = useCallback((product:CartProductType)=>{
            let updatedCart;
            if(product.quantity ==99)
            {
                return toast.error("Quá số lượng rồi!")
            }
            if(cartProducts){
                updatedCart = [...cartProducts]
                const existingIndex = cartProducts.findIndex((item)=>item.id === product.id );
                if(existingIndex > -1 ){
                    updatedCart[existingIndex].quantity = 
                    ++ updatedCart[existingIndex].quantity 
                }
                setCartProducts(updatedCart);
                localStorage.setItem('eShopCartItems',JSON.stringify(updatedCart))
            }
        },[cartProducts]);

        //giam so luong san pham
        const handleCartQtyDecrease = useCallback((product:CartProductType)=>{
            let updatedCart;
            if(product.quantity ==1)
            {
                return toast.error("Không thể giảm được nữa!")
            }
            if(cartProducts){
                updatedCart = [...cartProducts]
                const existingIndex = cartProducts.findIndex((item)=>item.id === product.id );
                if(existingIndex > -1 ){
                    updatedCart[existingIndex].quantity = 
                    -- updatedCart[existingIndex].quantity 
                }
                setCartProducts(updatedCart);
                localStorage.setItem('eShopCartItems',JSON.stringify(updatedCart))
            }
        },[cartProducts]);

        const handleClearCart = useCallback(()=>{
            setCartProducts(null)
            setCartTotalQty(0)
            localStorage.setItem('eShopCartItems',JSON.stringify(null));
        },[cartProducts])
    // Provide the cart context value to consumers.
    const value = {
        cartTotalQty,
        cartProducts,
        handleAddProductToCart,
        handleRemoveProductFromCart,
        handleCartQtyIncrease,
        handleCartQtyDecrease,
        handleClearCart
    };

    return <CartContext.Provider value={value} {...props} />;
};

export const useCart =()=>{
     const context = useContext(CartContext);
     if(context=== null)
     {
        throw new Error("useCart must be used within a CartContextProvider")
     }
     return context;
};

