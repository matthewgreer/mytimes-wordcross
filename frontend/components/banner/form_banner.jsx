import React from 'react';
import { Link } from 'react-router-dom';

const FormBanner = () => {
  return (
  <header>
    <Link className="form-banner-logo" href="/">
      <img src={window.myt_logo} />
    </Link>
  </header>
  )
}

export default FormBanner;