import styled from 'styled-components';

export const Contenitrice = styled.div``;

export const Wrapper = styled.div`
  padding-top: 20px;
  padding-right: 20px;
  padding-bottom: 20px;
  padding-left: 20px;

  @media only screen and (max-width: 887px) {
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
  }
`;

export const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`;

export const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;

/* export const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0px 350px;
`;*/

export const Sortby = styled.div`
  /* width: 15%; */
`;

export const TopTexts = styled.div``;

export const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const Info = styled.div`
  flex: 3;
`;

export const Summary = styled.div`
  display: none;
  flex: 1;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 10px;
  max-width: 196px;
  height: 55vh;

  @media only screen and (max-width: 1920px) {
  }

  @media only screen and (max-width: 1048px) {
  }

  @media only screen and (max-width: 960px) {
  }

  @media only screen and (max-width: 887px) {
    display: none;
  }

  @media only screen and (max-width: 778px) {
  }

  @media only screen and (max-width: 640px) {
  }
`;

export const FilterContainer = styled.div`
  justify-content: space-between;

  @media only screen and (max-width: 1920px) {
  }

  @media only screen and (max-width: 1048px) {
  }

  @media only screen and (max-width: 960px) {
  }

  @media only screen and (max-width: 887px) {
    display: none;
  }

  @media only screen and (max-width: 778px) {
  }

  @media only screen and (max-width: 640px) {
  }
`;

export const FilterContainerResponsive = styled.div`
  /* display: none; */

  /* @media only screen and (max-width: 887px) {
    display: flex;
    flex: 1;
    width: 50%;
    padding-left: 10px;
    padding-right: 10px;
    padding-top: 10px;
    padding-bottom: 10px;
    margin-bottom: 15px;
  } */
`;

export const Select1 = styled.select`
  margin-bottom: 10px;
  @media only screen and (min-width: 599px) {
    margin-bottom: 0;
  }

  @media only screen and (min-width: 991px) {
    font-size: 12px;
  }
`;
export const Select2 = styled.select`
  margin-bottom: 32px;
  font-size: 9px;

  @media only screen and (min-width: 640px) {
    margin-bottom: 0px;
  }

  @media only screen and (min-width: 671px) {
    font-size: 10px;
  }

  @media only screen and (min-width: 719px) {
    font-size: 12px;
  }

  @media only screen and (min-width: 887px) {
  }
`;
export const PriceInput = styled.input`
  margin-bottom: 10px;
  @media only screen and (min-width: 599px) {
    margin-bottom: 0;
  }

  @media only screen and (min-width: 991px) {
    font-size: 12px;
  }
`;

export const Option = styled.option``;

/* export const Button = styled.button`
  width: 100%;
  padding: 10px;
  margin-bottom: 20px;
  background-color: black;
  color: #ffffff;
  font-weight: 600;
  cursor: pointer;
`;*/
