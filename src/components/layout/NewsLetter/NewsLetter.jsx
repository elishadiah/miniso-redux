//import { Send } from "@mui/icons-material";
import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 60vh;
  background-color: #ffffff;
  display: flex;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  width: 50%;
  padding-left: 7.5%;
`;

{
  /*const Right = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  width: 100%;
`;*/
}

const Title = styled.h1`
  font-size: 70px;
  margin-bottom: 20px;
`;

const Desc = styled.div`
  font-size: 24px;
  font-weight: 300;
  margin-bottom: 20px;
`;

{
  /*const InputContainer = styled.div`
  width: 50%;
  height: 40px;
  background-color: white;
  display: flex;
  justify-content: space-between;
  border: 1px solid lightgray;
`;

const Input = styled.input`
  border: none;
  flex: 8;
  padding-left: 20px;
`;

const Button = styled.button`
  flex: 1;

  background-color: #e90909;
  color: white;
`;

const Email = styled.p`
  font-size: 50px;
  margin-bottom: 20px;
`;*/
}

const NewsLetter = () => {
  return (
    <Container>
      <Left>
        <Title>Entérate!</Title>
        <Desc>
          De nuevas colecciones, descuentos especiales y promociones increíbles
          suscribiéndote a nuestro boletín. Prometemos darte información de
          valor. * Al momento de enviar mi correo acepto los Términos y
          condiciones y el Aviso de privacidad.
        </Desc>
      </Left>
      {/*<Right>
        <Email>Correo Electrónico</Email>
        <InputContainer>
          <Input placeholder='your email' />
          <Button>
            <Send />
          </Button>
        </InputContainer>
      </Right>*/}
    </Container>
  );
};

export default NewsLetter;
