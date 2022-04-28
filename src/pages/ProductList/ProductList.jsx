import { Container } from "@mui/material";
import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import Products from "../../components/layout/Products/Products";
import ProductsBanner from "../../components/layout/Products/ProductsBanner";
import {
  Bottom,
  Contenitrice,
  FilterContainerResponsive,
  Info,
  Option,
  PriceInput,
  Select1,
  Sortby,
  Top,
  Wrapper,
} from "./ProductList.styled";

const imageBaseUrl = "https://minisobbs.s3.us-east-2.amazonaws.com/Zoho-admin";

const images = {
  "01": imageBaseUrl + "/fragancias+-+banner.png",
  "02": imageBaseUrl + "/cosmeticos+-+banner.png",
  "03": imageBaseUrl + "/cuidado+-+banner.png",
  "04": imageBaseUrl + "/accesorios-banner.png",
  10: imageBaseUrl + "/vida+-+banner.png",
  12: imageBaseUrl + "/libreria+-+banner.png",
  13: imageBaseUrl + "/jueguetes+-+banner.png",
  14: imageBaseUrl + "/electronicos-banner.png",
  15: imageBaseUrl + "/textil+-+banner.png",
  16: imageBaseUrl + "/bolsas+-+banner.png",
};
const ProductList = () => {
  const { category: cat } = useParams();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [cat]);

  // eslint-disable-next-line no-unused-vars
  const [filters, setFilters] = useState({
    minPrice: 0,
    maxPrice: 0,
    name: "",
  });
  const [sort, setSort] = useState("newest");
  const history = useHistory();

  const handleFilters = async (event) => {
    const value = event.target.value;
    try {
      history.push(`/productoslista/${value}`);
      // history.go(`/productoslista/${value}`);
    } catch (err) {
      console.log("- - - - - err: ", err);
    }
    /*
      setFilters({
        ...filters,
        [e.target.name]: value,
      });
      */
  };

  const [categories, setCategories] = useState([]);

  const getCategories = useCallback(async () => {
    const catUrl = "http://3.16.73.177:9080/public/categories/first";
    const res = await axios.get(catUrl, {
      crossDomain: true,
    });
    // console.log('TTT', res.data.body);
    setCategories(res.data.body);
  }, []);

  useEffect(() => {
    getCategories();
  }, [getCategories]);
  const [image, setImage] = useState("");

  useEffect(() => setImage(images[cat]), [cat]);

  return (
    <>
      <ProductsBanner image={image} />
      <Container>
        <Contenitrice>
          <Wrapper>
            <br />
            <br />
            <p></p>
            <Top className="row gx-0 gx-sm-3">
              {/*<TopButton>CONTINUE SHOPPING</TopButton>*/}
              {/* <TopTexts><TopText>No. Resultados</TopText></TopTexts> */}

              <FilterContainerResponsive className="col-12 col-sm-6 col-md-3 ">
                <h6>Categories</h6>
                <Select1
                  value={cat}
                  name="categoría"
                  className="form-control"
                  onChange={handleFilters}
                >
                  {categories.map((category) => (
                    <Option value={category.codCatUno} key={category.codCatUno}>
                      {category.descripcion}
                    </Option>
                  ))}
                </Select1>
              </FilterContainerResponsive>
              <div className="row col-12 col-sm-6 col-md-3 gx-0 gx-sm-2 mb-2 mb-sm-0">
                <div className="col-6">
                  <h6>Min Price</h6>
                  <PriceInput
                    type="number"
                    name="minPrice"
                    placeholder="min"
                    className="form-control"
                    value={filters.minPrice}
                    onChange={(e) => {
                      const value = e.target.value;
                      if (parseInt(value) > 0) {
                        setFilters((prev) => ({
                          ...prev,
                          minPrice: value,
                        }));
                      }
                    }}
                  />
                </div>
                <div className="col-6">
                  <h6>Max Price</h6>
                  <PriceInput
                    type="number"
                    name="maxPrice"
                    placeholder="max"
                    className="form-control "
                    value={filters.maxPrice}
                    onChange={(e) => {
                      const value = e.target.value;
                      if (parseInt(value) > 0) {
                        setFilters((prev) => ({
                          ...prev,
                          maxPrice: value,
                        }));
                      }
                    }}
                  />
                </div>
              </div>
              <div className="col-12 col-sm-6 mb-1 mb-sm-0 col-md-3 ">
                <h6>Search...</h6>
                <PriceInput
                  type="text"
                  placeholder="search..."
                  className="form-control"
                  value={filters.name}
                  onChange={(e) => {
                    setFilters((prev) => ({
                      ...prev,
                      name: e.target.value.toUpperCase(),
                    }));
                  }}
                />
              </div>
              <Sortby className="col-12 col-sm-6 col-md-3 ">
                <h6>Sort By</h6>
                <Select1
                  onChange={(e) => setSort(e.target.value)}
                  className="form-control"
                >
                  <Option value="newest">Ordenar </Option>
                  <Option Option value="desc">
                    Precio más alto
                  </Option>
                  <Option value="asc">Precio más bajo</Option>
                </Select1>
              </Sortby>
            </Top>
            <Bottom>
              <Info>
                <Products
                  cat={cat}
                  filters={{}}
                  filtersData={filters}
                  sort={sort}
                />
              </Info>
            </Bottom>
          </Wrapper>
        </Contenitrice>
      </Container>
    </>
  );
};

export default ProductList;
