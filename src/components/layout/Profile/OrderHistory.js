import moment from 'moment';
import { useEffect, useState } from 'react';
import axiosInstance from '../../../services/axiosInstance';
const OrderHistory = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const username = localStorage.getItem('username');
    const url = `/public/products/allorderwithcustomer?user_name=${username}`;
    axiosInstance
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
            <th scope='row'>No. De Orden</th>
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
