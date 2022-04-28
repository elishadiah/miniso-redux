import axios from "axios";
import { addProduct, clear, removeProduct, updateCart } from "./cartRedux";
export const addProductToCart = (product, quantity, toast) => (dispatch) => {
  const { barra, codInt } = product.productosPkDto;
  let username = localStorage.getItem("username");
  let token = JSON.parse(localStorage.getItem("user")).access_token;
  let api = `http://3.16.73.177:9080/private/cart/add?userName=${username}`;
  //   let api = `/api/private/cart/add?userName=${username}`;
  let reqData = {
    codInt,
    barra,
    cantidad: quantity,
  };

  axios({
    method: "post",
    url: api,
    widthCredentials: true,
    crossdomain: true,
    headers: {
      Authorization: `Bearer ${token}`,
    },
    data: reqData,
  })
    .then(() => {
      dispatch(addProduct({ ...product, amount: quantity }));
      toast.success("¡Producto agregado correctamente!");
    })
    .catch((error) => {
      console.log("...." + error?.message);
      toast.error("Product added failed!");
    });
};

export const removeProductFromCart = (codInt, barra) => (dispatch) => {
  let username = localStorage.getItem("username");
  let token = JSON.parse(localStorage.getItem("user")).access_token;
  let api = `http://3.16.73.177:9080/private/cart/add?userName=${username}`;
  //   let api = `/api/private/cart/add?userName=${username}`;
  let reqData = {
    codInt,
    barra,
    cantidad: 0,
  };

  axios({
    method: "post",
    url: api,
    widthCredentials: true,
    crossdomain: true,
    headers: {
      Authorization: `Bearer ${token}`,
    },
    data: reqData,
  })
    .then(() => dispatch(removeProduct({ codInt, barra })))
    .catch((error) => {
      console.log(error?.response);
    });
};
export const updateCartFromServer = (codInt, barra) => async (dispatch) => {
  try {
    let username = localStorage.getItem("username");
    let token = JSON.parse(localStorage.getItem("user"))?.access_token;
    const api = `http://3.16.73.177:9080/private/cart/find?userName=${username}`;
    //   let api = `/api/private/cart/find?userName=${username}`;

    axios
      .get(api, {
        widthCredentials: true,
        crossdomain: true,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(async (res) => {
        const items = res?.data?.body?.itemsDtos;
        console.log(items);
        const dataListPromise = items.map(
          async ({ codeInt, codeBarrra, amount }) => {
            const resData = await axios.get(
              `http://3.16.73.177:9080/public/products/pk?codeInt=${codeInt}&barra=${codeBarrra}`
            );
            resData.amount = amount;
            return resData;
          }
        );
        const dataWithResponse = await Promise.all(dataListPromise);
        console.log(dataWithResponse);
        const allProducts = dataWithResponse.map((item) => {
          item.data.body.amount = item.amount;
          return item.data.body;
        });
        dispatch(updateCart(allProducts));
      });
  } catch (error) {
    console.log("err-----", error);
  }
};
export const clearCart = () => async (dispatch) => {
  dispatch(clear());
};
