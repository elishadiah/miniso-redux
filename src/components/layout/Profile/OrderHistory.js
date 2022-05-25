import axios from 'axios';
import moment from 'moment';
import React, { useEffect, useState } from 'react';
const OrderHistory = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const username = localStorage.getItem('username');
    const url = `http://3.16.73.177:9080/public/products/allorderwithcustomer?user_name=${username}`;
    axios
      .get(url)
      .then((res) => {
        setOrders(res.data?.body?.[0]?.orders || []);
        console.log(res.data?.body);
      })
      .catch((e) => console.log(e));
  }, []);

  return (
    <div>
      <table class='table'>
        <tbody>
          <tr>
            <th scope='row'>No. De Order</th>
            <td>Estado</td>
            <td>Fecha registrado</td>
            <td>Total</td>
          </tr>
          {orders.map((order) => (
            <tr key={order.id}>
              <td>#{order.id}</td>
              <td>{order.state}</td>
              <td>{moment(order.fecha).format('L')}</td>
              <td>Q{order.granTotal}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OrderHistory;
