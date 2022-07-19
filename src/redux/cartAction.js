import axiosInstance from '../services/axiosInstance';
import { addProduct, clear, removeProduct, updateCart } from './cartRedux';

export const addProductToCart = (product, quantity, toast) => (dispatch) => {
  const { barra, codInt } = product.productosPkDto;
  let username = localStorage.getItem('username');
  let token = JSON.parse(localStorage.getItem('user')).access_token;
  let api = `/private/cart/add?userName=${username}`;
  //   let api = `/api/private/cart/add?userName=${username}`;
  let reqData = {
    codInt,
    barra,
    cantidad: quantity,
  };

  axiosInstance({
    method: 'post',
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
      toast.success('¡Producto agregado correctamente!');
    })
    .catch((error) => {
      console.log('....' + error?.message);
      toast.error('Error agregando el producto, tienes sesion iniciada?');
    });
};

export const removeProductFromCart = (codInt, barra) => (dispatch) => {
  let username = localStorage.getItem('username');
  let token = JSON.parse(localStorage.getItem('user')).access_token;
  let api = `/private/cart/add?userName=${username}`;
  //   let api = `/api/private/cart/add?userName=${username}`;
  let reqData = {
    codInt,
    barra,
    cantidad: 0,
  };

  axiosInstance({
    method: 'post',
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
    let username = localStorage.getItem('username');
    let token = JSON.parse(localStorage.getItem('user'))?.access_token;
    const api = `/private/cart/find?userName=${username}`;
    //   let api = `/api/private/cart/find?userName=${username}`;

    axiosInstance
      .get(api, {
        widthCredentials: true,
        crossdomain: true,
      })
      .then(async (res) => {
        const granTotalDiscount = res.data?.body?.granTotalDiscount || 0;
        const items = res?.data?.body?.itemsDtos;
        const gastosEnvio = res.data?.body?.gastosEnvio;
        if (!items || !items.length > 0) return;

        const dataListPromise = items?.map(
          async ({ codeInt, codeBarrra, amount }) => {
            const resData = await axiosInstance.get(
              `/public/products/pk?codeInt=${codeInt}&barra=${codeBarrra}`
            );
            resData.amount = amount;
            return resData;
          }
        );
        const dataWithResponse = await Promise.all(dataListPromise);
        const allProducts = dataWithResponse?.map((item) => {
          item.data.body.amount = item.amount;
          return item.data.body;
        });
        dispatch(updateCart({ allProducts, gastosEnvio, granTotalDiscount }));
      });
  } catch (error) {
    console.log('err-----', error);
  }
};
export const clearCart = () => async (dispatch) => {
  dispatch(clear());
};
