import React from "react";
import styled from "styled-components";
import DiscountsItem from "./DiscountsItem";
import { disCountsSection } from "../../../data";

const Wrapper = styled.div`
  padding-top: 100px;
`;

const Title = styled.div`
  padding-left: 30px;
`;

const Container = styled.div`
  display: flex;
  padding: 20px;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Discounts = () => {
  return (
    <Wrapper>
      <Title>{/*<h1>Discounts</h1>*/}</Title>
      <Container>
        {disCountsSection.map((item) => (
          <DiscountsItem item={item} key={item.id} />
        ))}
      </Container>
    </Wrapper>
  );
};

export default Discounts;
