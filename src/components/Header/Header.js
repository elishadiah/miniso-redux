import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Container } from '@mui/material';
//MATERIAL-UI FIRSTNAVIGATIONBAR
import Badge from '@mui/material/Badge';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  //Routes,
  Link,
} from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import classes from '../../FirstNavigation.module.css';
import { clear } from '../../redux/cartRedux';
import { loginSuccess } from '../../redux/userRedux';
import AuthService from '../../services/auth.service';
import axiosInstance from '../../services/axiosInstance';

const Header = () => {
  const quantity = useSelector((state) => state.cart.quantity);
  const [minisoNumber, setMinisoNumber] = useState('');
  const { currentUser, isAuthenticated } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const logOut = (e) => {
    e.preventDefault();
    AuthService.logout();
    dispatch(loginSuccess({}));
    dispatch(clear());
  };
  useEffect(() => {
    const username = localStorage.getItem('username');
    const url = `/public/users/lover?userName=${username}`;
    axiosInstance
      .get(url)
      .then((res) => setMinisoNumber(res?.data?.body || ''))
      .catch((e) => console.log(e));
  }, []);
  return (
    <div>
      <header className={classes.header}>
        <Container>
          <div className={classes.container_bar}>
            <div className={classes.wrapper}>
              <div className={classes.left}>
                <div className={classes.logo}>
                  <Link to='/'>
                    <img src='/img/logo.png' alt='MINISO' />
                  </Link>
                </div>
              </div>
              <div className={classes.center}></div>
              <div className={classes.right}>
                {isAuthenticated ? (
                  <div className={classes.specialLinks}>
                    <Link to={'/profile'} className={classes.link}>
                      <div className={classes.MenuItem}>
                        {currentUser.user_name}
                      </div>
                    </Link>
                    <div className={`nav-item ${classes.logoutButton}`}>
                      <Link
                        to='/login'
                        className={classes.MenuItem}
                        onClick={logOut}
                      >
                        CERRAR SESION
                      </Link>
                    </div>
                    {minisoNumber && (
                      <div
                        className={`nav-item`}
                        onClick={(e) => e.preventDefault()}
                      >
                        <Link to='#' className={classes.MenuItem}>
                          {minisoNumber}
                        </Link>
                      </div>
                    )}
                  </div>
                ) : (
                  <div className={classes.specialLinks}>
                    <Link to='/login' className={classes.linkS}>
                      <div className={classes.MenuItem}>INICIAR SESIÓN</div>
                    </Link>
                    <Link to='/register' className={classes.linkS}>
                      <div className={classes.MenuItem}>REGISTRARSE</div>
                    </Link>
                    <Link to='/login' className={classes.linkResp}>
                      <i className='fa-solid fa-circle-user'></i>
                    </Link>
                    <Link to='/register' className={classes.linkResp}>
                      <i className='fa-solid fa-right-to-bracket'></i>
                    </Link>
                  </div>
                )}
                <Link to='/cart'>
                  <div className={classes.MenuItem}>
                    <Badge
                      badgeContent={isAuthenticated ? quantity : 0}
                      color='error'
                    >
                      <ShoppingCartOutlinedIcon color='primary' />
                    </Badge>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </header>
    </div>
  );
};

export default Header;
