import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    products: [],
    quantity: 0,
    gastosEnvio: 0,
    total: 0,
    discount: 0,
  },
  reducers: {
    addProduct: (state, action) => {
      const find = state.products.find(
        (pr) =>
          pr.productosPkDto.codInt === action.payload.productosPkDto.codInt
      );
      if (find && Object.keys(find).length !== 0) {
        find.amount += action.payload.amount;
      } else {
        state.products.push(action.payload);
      }

      const quantity = state.products
        .map((item) => {
          return item.amount;
        })
        .reduce((acc, curr) => acc + curr, 0);
      const total = state.products
        .map((item) => {
          return item.precio * item.amount;
        })
        .reduce((acc, curr) => acc + curr, 0);

      state.quantity = quantity;
      state.total = total;
    },

    removeProduct: (state, action) => {
      const codInt = action.payload.codInt;
      const barra = action.payload.barra;

      const newProducts = state.products.filter((product) => {
        const { productosPkDto } = product;
        if (productosPkDto.codInt === codInt && productosPkDto.barra === barra)
          return false;
        return true;
      });
      state.products = newProducts;
      const quantity = state.products
        .map((item) => {
          return item.amount;
        })
        .reduce((acc, curr) => acc + curr, 0);
      const total = state.products
        .map((item) => {
          return item.precio * item.amount;
        })
        .reduce((acc, curr) => acc + curr, 0);

      state.quantity = quantity;
      state.total = total;
    },

    updateCart: (state, action, ...rest) => {
      const { allProducts: products, gastosEnvio } = action.payload;
      console.log(rest);
      state.products = products;
      state.gastosEnvio = gastosEnvio;
      const quantity = state.products
        .map((item) => {
          return item.amount;
        })
        .reduce((acc, curr) => acc + curr, 0);
      const total = state.products
        .map((item) => {
          return item.precio * item.amount;
        })
        .reduce((acc, curr) => acc + curr, 0);
      state.quantity = quantity;
      state.total = total;
    },
    clear: (state, action) => {
      state.products = [];
      state.quantity = 0;
      state.total = 0;
    },
  },
});
export const { addProduct, updateCart, removeProduct, clear } =
  cartSlice.actions;
export default cartSlice.reducer;
