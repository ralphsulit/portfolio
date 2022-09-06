import { Fragment } from 'react';
import { Outlet, Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <Fragment>
      <div className='navigation'>
        <Link className='logo-container' to='/'>
          <div><h1>r</h1></div>
        </Link>
        <div className='nav-links-container'>
          <Link className='nav-link' to='/about'>about</Link>
          <Link className='nav-link' to='/works'>works</Link>
          <Link className='nav-link' to='/contact'>contact</Link>
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;