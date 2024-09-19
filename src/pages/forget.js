import React from 'react';
import ForgetPass from '../components/ForgetPassword/Index'; // Deve estar assim se o arquivo realmente se chama Index.js
import ScrollToTop from '../components/ScrollToTop';

const ForgetPage = () => {
  return (
    <>
      <ScrollToTop />
      <ForgetPass />
    </>
  );
};

export default ForgetPage;
