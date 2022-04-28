import styled from "styled-components";

export const Contenitrice = styled.div``;
export const Wrapper = styled.div`
  padding: 20px;
`;
export const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`;

export const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 20px;
  padding-bottom: 20px;
`;

export const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;
export const Info = styled.div`
  flex: 3;
`;

export const Product = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 5px;

  @media (max-width: 500px) {
    flex-direction: column;
    align-items: start;
    border: 1px solid #0003;
    padding: 10px;
    border-radius: 3px;
    margin-bottom: 20px;
  }
`;

export const ProductDetail = styled.div`
  flex: 2;
  display: flex;
  @media (max-width: 500px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const Image = styled.img`
  width: 200px;
`;

export const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

export const ProductName = styled.span``;
export const ProductId = styled.span``;
export const BarraId = styled.span``;

export const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media (max-width: 500px) {
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
  }
`;

export const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  @media (max-width: 500px) {
    margin: 0;
  }
`;

export const ProductAmount = styled.div`
  font-size: 24px;
  margin: 5px;
`;

export const ProductPrice = styled.div`
  font-size: 30px;
  font-weight: 200;
`;

export const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;
`;

export const Summary = styled.div`
  flex: 1;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 20px;
  height: 60vh;
`;

export const SummaryTitle = styled.h1`
  font-weight: 200;
`;

export const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => props.type === "total" && "24px"};
`;

export const SummaryItemText = styled.span``;

export const SummaryItemPrice = styled.span``;
