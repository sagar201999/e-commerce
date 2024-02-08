import React from 'react';

const Footer = () => {
  return (
    <footer className="pt-5 pb-2 bg-dark text-light">
        <div className='d-flex justify-content-evenly'>
            <div>
                <h5>Reach out to us</h5>
                <p>linkedin</p>
                <p>facebook</p>
                <p>instagram</p>
            </div>
            <div>
                <p>career</p>
                <p>notice and return</p>
                <p>legal policies</p>
            </div>
            <div>
                <h5>Contact Us</h5>
                <p>Address : ADB - ADD - GHD</p>
                <p>Tel : +85 - 56-75-85-63</p>
            </div>
        </div>
        <div>
            <p className='text-center'>&copy; 2024 TechTrove. All rights reserved.</p>
        </div>
    </footer>
  );
};

export default Footer;
