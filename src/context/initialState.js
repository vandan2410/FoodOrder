import { fetchuser,fetchCart } from "../utils/fetchlocalstoragedata"

const userInfo =fetchuser()
const cartInfo = fetchCart();

export const initialState ={
    user: userInfo,
    foodItems:null,
    cartShow: false,
    cartItems: cartInfo,
};
