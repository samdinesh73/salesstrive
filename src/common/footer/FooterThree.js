import React from 'react';
import Link from 'next/link';

const FooterThree = () => {
    return (
        <>
            {/* footer start */}
            <footer>
                <div className="footer-three">
                    <div className="footer-animation-1">
                        <img src="/assets/img/01.png" alt="img" />
                    </div>
                    <div className="footer-animation-2">
                        <img src="/assets/img/01.png" alt="img" />
                    </div>
                    <div className="footer-animation-3">
                        <img src="/assets/img/01.png" alt="img" />
                    </div>
                    <div className="footer-animation-4">
                        <img src="/assets/img/01.png" alt="img" />
                    </div>
                    <div className="footer-animation-5">
                        <img src="/assets/img/01.png" alt="img" />
                    </div>
                    <div className="container">
                        <div className="footer-top pt-120 pb-55">
                            <div className="row">
                                <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-7">
                                    <div className="footer__widget mb-30 footer-col-1">
                                        <div className="footer-widget__column footer-widget__about">
                                            <div className="footer-widget__about-logo">
                                                <Link href="/">
                                                    <img src="/assets/img/logo/logo.png" alt="Logo" />
                                                </Link>
                                            </div>
                                            <p className="footer-widget__about-text"></p>
                                            <div className="social-hvr">
                                                <a href="https://www.instagram.com/Seller.rocket/"><i className="fa-brands fa-instagram"></i></a>
                                                <a href="https://www.facebook.com/Sellerrocket/"><i className="fa-brands fa-facebook-f"></i></a>
                                                <a href="https://in.linkedin.com/company/seller-rocket"><i className="fa-brands fa-linkedin-in"></i></a>
                                                <a href="https://wa.me/+919944331949"><i className="fa-brands fa-whatsapp"></i></a>
                                                {/* <a href="https://wa.me/+919944331949"><i className="fa-brands fa-whatsapp"></i></a> */}
                                                {/* <a href="https://x.com/seller_rocket"><i className="fa-brands fa-twitter"></i></a> */}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xxl-2 col-xl-2 col-lg-2 col-md-6 col-sm-5">
                                    <div className="footer__widget mb-30">
                                        <h3 className="footer-widget__title">Services</h3>
                                        <ul>
                                            {/* <li><Link href="/">SEO Marketing</Link></li>
                                            <li><Link href="/">SEO Services</Link></li>
                                            <li><Link href="/">Pay Per Click</Link></li>
                                            <li><Link href="/">Social Media</Link></li>
                                            <li><Link href="/">SEO Audit</Link></li> */}
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-xxl-2 col-xl-2 col-lg-2 col-md-6 col-sm-5">
                                    <div className="footer__widget mb-30">
                                        <h3 className="footer-widget__title">Community</h3>
                                        <ul>
                                            {/* <li><Link href="/">Our Product</Link></li>
                                            <li><Link href="/">Documentation</Link></li>
                                            <li><Link href="/">Our Services</Link></li>
                                            <li><Link href="/">Company</Link></li>
                                            <li><Link href="/">What We Do?</Link></li> */}
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-7">
                                    <div className="footer__widget footer-col-4 mb-30">
                                        <h3 className="footer-widget__title">Contact</h3>
                                        <div className='text-white'>
                                            <h6 className='text-white'>Head Office</h6>
                                            <p className='text-white'> No. 146 ,1st Floor, 2nd Cross, Bhovi Colony, Near Om Shakthi Temple. Bommanahalli, Bangalore - 560068</p>
                                            {/* <h6 className='text-white'>Corporate Office</h6>
                                            <p className='text-white'>926, 2nd Floor, Parameshwari Complex, Next to Bank of Baroda, Thanjavur, Tamil Nadu- 613001</p> */}
                                        </div>
                                        {/* <div className="footer-subscriber-form">
                                            <form action="#">
                                                <input type="text" placeholder="Enter your email" />
                                                <button className=""><i className="fa-light fa-arrow-right"></i></button>
                                            </form>
                                        </div>
                                        <div className="subscriber-agreement">
                                            <input type="checkbox" name="agree" id="agree" />
                                            <p>I agree to the <a href="#">Privacy Policy</a>.</p>
                                        </div> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="footer-bottom">
                            <div className="row">
                                <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12">
                                    <div className="copyright">
                                        <p>© 2025 Salesstrive All Rights Reserved.</p>
                                    </div>
                                </div>
                                <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12">
                                    <div className="footer-bottom-menu">
                                        <ul>
                                            <li><Link href="/">Privacy Policy</Link></li>
                                            <li><Link href="/">Term of Service</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            {/* footer end */}
        </>
    )
}

export default FooterThree;