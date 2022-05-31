import Container from "@mui/material/Container";
import axios from "axios";
import { Component } from "react";
import classes from "./Success.module.css";

export class Success extends Component {
  descargar() {
    let username = localStorage.getItem("username");
    var d = new Date();
    var datestring =
      ("0" + d.getDate()).slice(-2) +
      "-" +
      ("0" + (d.getMonth() + 1)).slice(-2) +
      "-" +
      d.getFullYear() +
      " " +
      ("0" + d.getHours()).slice(-2) +
      ":" +
      ("0" + d.getMinutes()).slice(-2);

    axios({
      url: `https://2leucj6c3a.execute-api.us-east-2.amazonaws.com/API/public/voucher/user?userName=${username}`,
      method: "GET",
      responseType: "blob", // important
    }).then((response) => {
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", `VL_${datestring}.pdf`); //or any other extension
      document.body.appendChild(link);
      link.click();
    });
  }

  render() {
    return (
      <div>
        <Container fixed>
          <div className={classes.WrapperSuccess}>
            <h1>¡GRACIAS POR TU COMPRA!</h1>
            <p>
              Puedes acercarte a la Tienda Miniso - Oakland Mall.
              <br />
              En 2 dias con el comprobante que descargaste
              <br />
              puedes recoger tu pedido.
              <br />
            </p>
          </div>

          <div class="d-flex justify-content-center">
            <button className="bTnProperty" onClick={this.descargar}>
              Descargar Comprobante de Pago
            </button>
          </div>
        </Container>
      </div>
    );
  }
}

export default Success;
