import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
//import { Link } from "react-router-dom";
import './Footer.css';

const Footer = () => {
  const [categories, setCategories] = useState([]);

  const fetchCategories = useCallback(() => {
    axios
      .get(
        'https://2leucj6c3a.execute-api.us-east-2.amazonaws.com/API/public/categories/first'
      )
      .then((res) => {
        setCategories(res.data.body);
      })
      .catch((e) => console.log(e));
  }, []);
  useEffect(() => fetchCategories(), [fetchCategories]);

  const formateCategories = useMemo(() => {
    const categoryLength = categories.length;
    if (!categoryLength > 0) return [];
    const divider = 3;
    const divideValue = Math.ceil(categoryLength / divider);

    const data = [];
    for (let i = 1; i < divider + 1; i++) {
      data.push(
        categories.slice(i * divideValue - divideValue, i * divideValue)
      );
    }
    return data;
  }, [categories]);
  return (
    <div>
      <footer className='text-white py-4 bg-dark mt-5'>
        <div className='text-left text-md-left'>
          <div className='row'>
            <div
              className='col-xl-2 col-lg-2 col-md-12 col-sm-12  '
              style={{ overflow: 'hidden' }}
            >
              <img className='logoFooter' src='/img/logo.png' alt='' />
            </div>
            <hr className='clearfix w-100 d-md-none' />
            <div className='col-xl-6 col-lg-6 col-md-12 col-sm-12 '>
              <h5 className='font-weight-bold text-uppercase mt-3 mb-4'>
                Categorías
              </h5>
              <div className='d-flex ' style={{ gap: '15px' }}>
                {formateCategories.map((items) => (
                  <ul className='category_list' key={Math.random()}>
                    {items.map((category) => (
                      <li key={category.codCatUno}>
                        <Link to={`/productoslista/${category.codCatUno}`}>
                          {category.descripcion}
                        </Link>
                      </li>
                    ))}
                  </ul>
                ))}
              </div>
            </div>
            <div className='col-xl-4 col-lg-4 col-md-12 col-sm-12  contactDiv'>
              <h5 className='font-weight-bold text-uppercase mt-3 mb-4'>
                Contacto
              </h5>
              <p className='hover-red ' style={{ paddingRight: '5%' }}>
                <i className='fas fa-map-marker-alt me-3  '></i> Diagonal 6,
                13-01 Zona 10, Centro Comercial Oakland Mall Local 201 y 202
                Segundo Nivel, Guatemala, Guatemala
              </p>
              <p className=' hover-red'>
                <i className='fas fa-envelope me-3'></i>
                hola@miniso.com.gt
              </p>
              <div className='d-flex gap-5'>
                <p className='hover-red'>
                  <i className='fas fa-phone me-3 hover-red'></i> +502 2336-5701
                </p>
                <p className='hover-red'>
                  <i className='fas fa-phone me-3 hover-red'></i> +502 3760-2892
                </p>
              </div>
              <ul className='list-unstyled list-inline socialIcons'>
                <li className='list-inline-item'>
                  <a
                    href='https://www.facebook.com/MinisoGt/'
                    target='_blank'
                    className='btn-floating btn-fb mx-1'
                    rel='noreferrer'
                  >
                    <i className='fab fa-facebook-f socialMedia'></i>
                  </a>
                </li>
                <li className='list-inline-item'>
                  <a
                    href='https://www.instagram.com/miniso.gt/?hl=en'
                    target='_blank'
                    className='btn-floating btn-fb mx-1'
                    rel='noreferrer'
                  >
                    <i className='fab fa-instagram socialMedia'> </i>
                  </a>
                </li>
              </ul>
            </div>
            <hr className='clearfix w-100 d-md-none' />
          </div>
        </div>
        <hr />

        <h6 className='text-center' style={{ margin: 0, marginTop: 25 }}>
          MINISO Guatemala Ⓒ {new Date().getFullYear()} Todos los derechos
          reservados.
        </h6>
        {/*COPYRIGHTS*/}
        {/*END FIRST DIV*/}
      </footer>
    </div>
  );
};

export default Footer;
