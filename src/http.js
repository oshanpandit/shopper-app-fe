export const getAllProducts=async()=>{
    try{
        const response=await fetch('http://localhost:8000/products');
        if(!response.ok){
            throw new Error('Network response not ok');
        }
        const data=response.json();
        return data;
    }catch(error){
        console.error('Could not fetch the products',error);
        return [];
    }
}

export const addProduct=async(obj)=>{
   try{
      const response=await fetch('http://localhost:8000/products/add-product',{
        method:'POST',
        headers:{
            'Content-type':'application/json'
        },
        body:JSON.stringify(obj)
      });
      if(!response.ok){
         throw new Error('Network response not ok');
      }
      const data=await response.json();
      return data;
   }catch(error){
      console.error('Could not add product to the product list',error);
      return error;
   }
}

export const getAllCartItems=async()=>{
    try{
        const response=await fetch('http://localhost:8000/cart');
        if(!response.ok){
            throw new Error('Network response not ok');
        }
        const cartList=await response.json();
        return cartList;
    }catch(error){
        console.error('could not fetch cartItems',error);
        return [];
    }
}

export const addItemToCart = async (id) => {
    try {
        const response = await fetch(`http://localhost:8000/cart/${id}`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Could not add product to the cart', error);
        return error;
    }
};
