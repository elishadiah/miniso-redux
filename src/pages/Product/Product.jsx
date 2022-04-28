//import styled from "styled-components";
import { Add, Remove } from "@mui/icons-material";
import { Container } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import ReactHelmet from "../../components/Seo/ReactHelmet";
import { addProductToCart } from "../../redux/cartAction";
import classes from "./Product.module.css";
//import sushi2 from "../../assets/card/sushi2.jpeg";
//import sushi3 from "../../assets/card/sushi3.jpeg";

const Product = () => {
  const location = useLocation();
  const pk = location.pathname.split("/")[2];
  const barra = location.pathname.split("/")[3];

  const [product, setProduct] = useState({});
  const [productosPkDto, setProductosPkDto] = useState({});

  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();
  const [thumbsRefList, setThumbsRefList] = React.useState([]);
  const [indexPhoto, setIndexPhoto] = useState(2);
  const [photos, setPhotos] = useState([]);

  const { isAuthenticated } = useSelector((state) => state.user);

  function checkIfImageExists(url, callback) {
    const img = new Image();
    img.src = url;

    if (img.complete) {
      callback(true);
    } else {
      img.onload = () => {
        callback(true);
      };

      img.onerror = () => {
        callback(false);
      };
    }
  }

  useEffect(() => {
    if (Object.keys(product).length > 0) {
      const imageUrls = [
        `${product.url}-1.jpg`,
        `${product.url}-2.jpg`,
        `${product.url}-3.jpg`,
      ];
      imageUrls.forEach((image) => {
        checkIfImageExists(image, (result) => {
          if (result) return setPhotos((prev) => [...prev, image]);
        });
      });
    }
    return () => {};
  }, [product]);

  useEffect(
    () => {
      const getProduct = async () => {
        try {
          const res = await axios.get(
            pk && barra
              ? `http://3.16.73.177:9080/public/products/pk?codeInt=${pk}&barra=${barra}`
              : ""
          );

          setProduct(res.data.body);
          setProductosPkDto(res.data.body.productosPkDto);
        } catch {}
      };
      getProduct();
      setIndexPhoto(0);
    },
    [pk],
    [barra]
  );

  const increaseQuantity = () => {
    setQuantity((prev) => prev + 1);
  };
  const decreaseQuantity = () => {
    if (quantity <= 1) return;
    setQuantity((prev) => prev - 1);
  };

  const handleTab = (index) => {
    setIndexPhoto(index);
    const images = thumbsRefList.current.children;
    for (let i = 0; i < images.length; i++) {
      images[i].className = images[i].className.replace("active", "");
    }
    images[index].className = "active";
  };

  const handleClick = () => {
    if (!isAuthenticated) {
      toast.error("Para realizar una compra, Inicia Sesión primero");
      return;
    }
    toast.success("Product added to cart");
    dispatch(addProductToCart(product, quantity));
  };

  let history = useHistory();

  return (
    <Container>
      <ReactHelmet
        title={product.descripcion}
        description={product.descripcion}
      >
        <meta name='price' content={product.precio} />
      </ReactHelmet>
      <button className={classes.bTnPropertyBack} onClick={history.goBack}>
        Atrás
      </button>
      <div className={classes.Contenitrice}>
        <div className={classes.Wrapper}>
          <div className={classes.ImgContainer}>
            <img className={classes.Image} src={photos[indexPhoto]} />
          </div>
          <div className={classes.InfoContainer}>
            <div className={classes.Row}>
              <h4 className={classes.Title}>{product.descripcion}</h4>

              {/*<span className={classes.PriceD}>Q{product.precio}</span>*/}
            </div>
            <hr style={{ color: "#999999", height: "1px" }} />
            <span className={classes.Price}>Q {product.precio}</span>
            <hr style={{ color: "#999999", height: "1px" }} />
            <span className={classes.Title}> {productosPkDto.barra}</span>
            {/*<p>{item.content}</p>*/}
            <hr style={{ color: "#999999", height: "1px" }} />
            {/*         <FilterContainer>
            <Filter>
              <FilterTitle>Color</FilterTitle>
              <FilterColor color='black' />
              <FilterColor color='darkblue' />
              <FilterColor color='gray' />
            </Filter>
            <Filter>
              <FilterTitle>Size</FilterTitle>
              <FilterSize>
                <FilterSizeOption>XS</FilterSizeOption>
                <FilterSizeOption>S</FilterSizeOption>
                <FilterSizeOption>M</FilterSizeOption>
                <FilterSizeOption>L</FilterSizeOption>
                <FilterSizeOption>XL</FilterSizeOption>
              </FilterSize>
            </Filter>
</FilterContainer>*/}
            <div className={classes.AddContainer}>
              <div className={classes.AmountContainer}>
                <Remove
                  style={{
                    cursor: "pointer",
                  }}
                  onClick={decreaseQuantity}
                />
                <span className={classes.Amount}>{quantity}</span>
                <Add style={{ cursor: "pointer" }} onClick={increaseQuantity} />
              </div>
            </div>
            <div className={classes.Thumb} ref={thumbsRefList}>
              {photos.map((img, index) => (
                <img
                  src={img}
                  alt=''
                  key={index}
                  onClick={() => handleTab(index)}
                />
              ))}
            </div>
            <button className={classes.bTnProperty} onClick={handleClick}>
              Agregar a Carrito
            </button>
          </div>
        </div>
      </div>
    </Container>
  );
};
export default Product;
