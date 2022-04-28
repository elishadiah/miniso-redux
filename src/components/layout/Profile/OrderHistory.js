import axios from "axios";
import moment from "moment";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
const OrderHistory = () => {
  const [orders, setOrders] = useState([]);
  const user_name = useSelector((state) => state.user.currentUser?.user_name);

  useEffect(() => {
    const url = `http://3.16.73.177:9080/public/products/allorderwithcustomer?user_name=${user_name}`;
    axios
      .get(url)
      .then((res) => {
        setOrders(res.data?.body?.[0]?.orders);
        console.log(res.data?.body);
      })
      .catch((e) => console.log(e));
  }, [user_name]);

  return (
    <div>
      <table class="table">
        <tbody>
          <tr>
            <th scope="row">No. De Order</th>
            <td>Estodo</td>
            <td>Fecha registrado</td>
            <td>No. De Productions</td>
            <td>Clients</td>
            <td>Total</td>
          </tr>
          {orders.map((order) => (
            <tr key={order.id}>
              <td>#{order.id}</td>
              <td>{order.state}</td>
              <td>{moment(order.fecha).format("L")}</td>
              <td></td>
              <td></td>
              <td>Q{order.granTotal}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OrderHistory;
