export const getAllProducts=async()=>{
    try{
        const response=await fetch('http://localhost:8000/products');
        if(!response.ok){
            throw new Error('Network response not ok');
        }
        const data=await response.json();
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
        body:JSON.stringify(obj),
        credentials: 'include'
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

// cart API
export const getAllCartItems=async()=>{
    try{
        const response=await fetch('http://localhost:8000/cart',{
          credentials: 'include'
        });
        if(!response.ok){
            throw new Error('Network response not ok');
        }
        const cartList=await response.json();
        return cartList;
    }catch(error){
        console.error('could not fetch cartItems',error);
        return error;
    }
}

export const addItemToCart = async (productId) => {
    try{
        const response=await fetch(`http://localhost:8000/cart/add-item/${productId.toString()}`,{
          credentials: 'include'
        });
        if(!response.ok){
           throw new Error('Network response not ok');
        }
        const data=await response.json();
        return data;
     } catch (error) {
        console.error('Could not add product to the cart', error);
        return error;
    }
};

export const deleteCartItem = async (id) => {
    try {
      const response = await fetch(`http://localhost:8000/cart/${id}`, {
        method: 'DELETE', 
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include'
      });
  
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
  
      const data = await response.json();
      return data; 
    } catch (error) {
      console.error('Could not delete the product from the cart', error);
      return error; 
    }
  };

  export const checkoutCart=async()=>{
     try{
       const response=await fetch('http://localhost:8000/cart/checkout',{
        credentials: 'include'
       });
       if(!response.ok){
         throw new Error('Network response not ok');
       }
       return response;
     }catch(error){
       console.error('Could not process the checkout method',error);
       return error;
     }
  };

  export const getAllOrders=async()=>{
    try{
      const response=await fetch('http://localhost:8000/cart/orders',{
        credentials: 'include'
      });
      if(!response.ok){
        throw new Error('Network response not ok');
      }
      const data=await response.json();
      return data;
    }catch(error){
      console.error('Could not get orders',error);
      return error;
    }
  }

  export const userSignUp=async(credentials)=>{
     try{
        const response=await fetch('http://localhost:8000/auth/signup',{
           method:'POST',
           headers:{
             'Content-type':'application/json'
           },
           body:JSON.stringify(credentials),
           credentials:'include'
        });
         const data=await response.json();
         if(!response.ok){
           throw new Error(data.message);
         }
         return data;
     }catch(error){
        console.error('can not sign-ip user',error);
        return {message:error.message};
     }
  }

  export const userLogin=async(credentials)=>{
     try{
      const response=await fetch('http://localhost:8000/auth/login',{
        method:'POST',
        headers:{
          'Content-type':'application/json'
        },
        credentials: 'include',
        body:JSON.stringify(credentials),
        credentials: 'include'
      });
      const data=await response.json();
      if(!response.ok){
        throw new Error(data.message);
      }
       return data;
     }catch(error){
       console.error('can not login user',error);
       return {message:error.message};
     }
  }

  export const logoutUser=async()=>{
     try{
      const response=await fetch('http://localhost:8000/auth/logout',{
        credentials:'include'
     });
     if(!response.ok){
       throw new Error('Network response was not ok');
     }
     return response;
     }catch(error){
        console.error('can not logout user',error);
        return error;
     }
  }