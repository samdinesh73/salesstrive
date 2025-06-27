import React from 'react';
import Link from 'next/link';

const AboutOne = () => {
    return (
        <>
            {/* about one start */}
            <div className="about-three">
                <div className="container custom-container-1">
                    <div className="row g-0">
                        <div className="about-three__wrapper">
                            <div className="col-xxl-12">
                                <div className="tabs-one">
                                    <ul className="nav nav-pills" id="pills-tab" role="tablist">
                                        <li className="nav-item" role="presentation">
                                            <button className="nav-link active" id="pills-search-tab" data-bs-toggle="pill" data-bs-target="#pills-search" type="button" role="tab" aria-controls="pills-digital" aria-selected="false">
                                                <img src="/assets/img/icon/status-up.svg" className="no-active" alt="icon" />
                                                <img src="/assets/img/icon/status-up-white.svg" className="active-tab-icon" alt="icon" />
                                                <span>Global Seller <br/>Account Management</span>
                                            </button>
                                        </li>
                                        <li className="nav-item" role="presentation">
                                            <button className="nav-link " id="pills-analytics-tab" data-bs-toggle="pill" data-bs-target="#pills-analytics" type="button" role="tab" aria-controls="pills-search" aria-selected="true">
                                                <img src="/assets/img/icon/globe.svg" className="no-active" alt="icon" />
                                                <img src="/assets/img/icon/globe-white.svg" className="active-tab-icon" alt="icon" />
                                                <span>Social Media <br></br> Marketing</span>
                                            </button>
                                        </li>
                                        <li className="nav-item" role="presentation">
                                            <button className="nav-link" id="pills-social-tab" data-bs-toggle="pill" data-bs-target="#pills-social" type="button" role="tab" aria-controls="pills-analytics" aria-selected="false">
                                                <img src="/assets/img/icon/list.svg" className="no-active" alt="icon" />
                                                <img src="/assets/img/icon/list-white.svg" className="active-tab-icon" alt="icon" />
                                                <span>Digital Marketing</span>
                                            </button>
                                        </li>
                                        <li className="nav-item" role="presentation">
                                            <button className="nav-link" id="pills-marketing-tab" data-bs-toggle="pill" data-bs-target="#pills-marketing" type="button" role="tab" aria-controls="pills-social" aria-selected="false">
                                                <img src="/assets/img/icon/like-tag.svg" className="no-active" alt="icon" />
                                                <img src="/assets/img/icon/like-tag-white.svg" className="active-tab-icon" alt="icon" />
                                                <span>E-com Account<br></br>Reconcilation</span>
                                            </button>
                                        </li>
                                        <li className="nav-item" role="presentation">
                                            <button className="nav-link" id="pills-management-tab" data-bs-toggle="pill" data-bs-target="#pills-management" type="button" role="tab" aria-controls="pills-marketing" aria-selected="false">
                                                <img src="/assets/img/icon/pen.svg" className="no-active" alt="icon" />
                                                <img src="/assets/img/icon/pen-white.svg" className="active-tab-icon" alt="icon" />
                                                <span>Web <br></br> Development</span>
                                            </button>
                                        </li>
                                        
                                        <li className="nav-item" role="presentation">
                                            <button className="nav-link" id="pills-optimization-tab" data-bs-toggle="pill" data-bs-target="#pills-optimization" type="button" role="tab" aria-controls="pills-optimization" aria-selected="false">
                                                <img src="/assets/img/icon/keyboard-open.svg" className="no-active" alt="icon" />
                                                <img src="/assets/img/icon/keyboard-open-white.svg" className="active-tab-icon" alt="icon" />
                                                <span>Domestic Seller<br></br> Account Management</span>
                                            </button>
                                        </li>
                                        {/* <li className="nav-item vanish" role="presentation">
                                            <button className="nav-link" id="pills-management-tab" data-bs-toggle="pill" data-bs-target="#pills-management" type="button" role="tab" aria-controls="pills-management" aria-selected="false">
                                                <img src="/assets/img/icon/trend-up.svg" className="no-active" alt="icon" />
                                                <img src="/assets/img/icon/trend-up-white.svg" className="active-tab-icon" alt="icon" />
                                                <span>Management</span>
                                            </button>
                                        </li> */}
                                        
                                    </ul>
                                    <div className="tab-content" id="pills-tabContent">
                                        <div className="tab-pane fade " id="pills-search" role="tabpanel" aria-labelledby="pills-search-tab" tabindex="0">
                                            <div className="about-three__single">
                                                <div className="about-three__animation-1">
                                                    <img src="/assets/img/shape/12.svg" alt="shape icon" />
                                                </div>
                                                <div className="about-three__animation-2">
                                                    <img src="/assets/img/shape/14.svg" alt="shape icon" />
                                                </div>
                                                <div className="about-three__animation-3">
                                                    <img src="/assets/img/shape/11.svg" alt="shape icon" />
                                                </div>
                                                <div className="row">
                                                    <div className="col-xxl-6 col-xl-7 col-lg-6 col-md-12 col-sm-12">
                                                        <div className="about-three__single-content">
                                                            <h2>Expand Your Brand Beyond Borders.</h2>
                                                            <p>Take your e-commerce business global with expert account handling, data-driven insights, and seamless cross-border compliance.</p>
                                                            <div className="list">
                                                                <ul className="list-unstyled">
                                                                    <li>Optimize international listings for better visibility</li>
                                                                    <li>Manage global orders, returns, and logistics</li>
                                                                    <li>Ensure platform compliance (Amazon, eBay, Walmart)</li>
                                                                    <li>Drive revenue with targeted global campaigns</li>
                                                                </ul>
                                                            </div>
                                                            <Link href="/case-study" className="about-three-btn rr-btn-style-1 mt-45">Learn More <i className="fa-solid fa-arrow-right"></i></Link>
                                                        </div>
                                                    </div>
                                                    <div className="col-xxl-6 col-xl-5 col-lg-6 col-md-12 col-sm-12 text-end text-md-center">
                                                        <div className="about-three__single-img">
                                                            <img src="/assets/img/about/about-3-1.png" alt="about img" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="tab-pane fade" id="pills-analytics" role="tabpanel" aria-labelledby="pills-analytics-tab" tabindex="0">
                                            <div className="about-three__single">
                                                <div className="about-three__animation-1">
                                                    <img src="/assets/img/shape/12.svg" alt="shape icon" />
                                                </div>
                                                <div className="about-three__animation-2">
                                                    <img src="/assets/img/shape/14.svg" alt="shape icon" />
                                                </div>
                                                <div className="about-three__animation-3">
                                                    <img src="/assets/img/shape/11.svg" alt="shape icon" />
                                                </div>
                                                <div className="row">
                                                    <div className="col-xxl-6 col-xl-7 col-lg-6 col-md-12 col-sm-12">
                                                        <div className="about-three__single-content">
                                                            <h2>Turn Engagement into Conversions.</h2>
                                                            <p>Strategic social campaigns that connect, engage, and grow your online audience across platforms.</p>
                                                            <div className="list">
                                                                <ul className="list-unstyled">
                                                                    <li>Create platform-specific content strategies</li>
                                                                    <li>Increase organic and paid reach</li>
                                                                    <li>Monitor performance with in-depth analytics</li>
                                                                    <li>Build brand loyalty through interaction</li>
                                                                </ul>
                                                            </div>
                                                            <Link href="/case-study" className="about-three-btn rr-btn-style-1 mt-45">Learn More <i className="fa-solid fa-arrow-right"></i></Link>
                                                        </div>
                                                    </div>
                                                    <div className="col-xxl-6 col-xl-5 col-lg-6 col-md-12 col-sm-12 text-end text-md-center">
                                                        <div className="about-three__single-img">
                                                            <img src="/assets/img/about/about-3-1.png" alt="about img" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="tab-pane fade" id="pills-social" role="tabpanel" aria-labelledby="pills-social-tab" tabindex="0">
                                            <div className="about-three__single">
                                                <div className="about-three__animation-1">
                                                    <img src="/assets/img/shape/12.svg" alt="shape icon" />
                                                </div>
                                                <div className="about-three__animation-2">
                                                    <img src="/assets/img/shape/14.svg" alt="shape icon" />
                                                </div>
                                                <div className="about-three__animation-3">
                                                    <img src="/assets/img/shape/11.svg" alt="shape icon" />
                                                </div>
                                                <div className="row">
                                                    <div className="col-xxl-6 col-xl-7 col-lg-6 col-md-12 col-sm-12">
                                                        <div className="about-three__single-content">
                                                            <h2>Drive Results with Precision.</h2>
                                                            <p>From PPC to email automation, get custom digital solutions that boost ROI and brand awareness.</p>
                                                            <div className="list">
                                                                <ul className="list-unstyled">
                                                                    <li>Data-led Google Ads and Meta campaigns</li>
                                                                    <li>Retargeting strategies to re-engage users</li>
                                                                    <li>Conversion optimization techniques</li>
                                                                    <li>Full-funnel digital planning</li>
                                                                </ul>
                                                            </div>
                                                            <Link href="/case-study" className="about-three-btn rr-btn-style-1 mt-45">Learn More <i className="fa-solid fa-arrow-right"></i></Link>
                                                        </div>
                                                    </div>
                                                    <div className="col-xxl-6 col-xl-5 col-lg-6 col-md-12 col-sm-12 text-end text-md-center">
                                                        <div className="about-three__single-img">
                                                            <img src="/assets/img/about/about-3-1.png" alt="about img" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="tab-pane fade" id="pills-marketing" role="tabpanel" aria-labelledby="pills-marketing-tab" tabindex="0">
                                            <div className="about-three__single">
                                                <div className="about-three__animation-1">
                                                    <img src="/assets/img/shape/12.svg" alt="shape icon" />
                                                </div>
                                                <div className="about-three__animation-2">
                                                    <img src="/assets/img/shape/14.svg" alt="shape icon" />
                                                </div>
                                                <div className="about-three__animation-3">
                                                    <img src="/assets/img/shape/11.svg" alt="shape icon" />
                                                </div>
                                                <div className="row">
                                                    <div className="col-xxl-6 col-xl-7 col-lg-6 col-md-12 col-sm-12">
                                                        <div className="about-three__single-content">
                                                            <h2>Stay Financially Aligned.</h2>
                                                            <p>Ensure every sale, refund, and payout is accurately tracked and reconciled across platforms.</p>
                                                            <div className="list">
                                                                <ul className="list-unstyled">
                                                                    <li>Match orders with transactions in real-time</li>
                                                                    <li>Identify and resolve discrepancies easily</li>
                                                                    <li>Improve cash flow with clear financial visibility</li>
                                                                    <li>Platform-wise detailed reporting</li>
                                                                </ul>
                                                            </div>
                                                            <Link href="/case-study" className="about-three-btn rr-btn-style-1 mt-45">Learn More <i className="fa-solid fa-arrow-right"></i></Link>
                                                        </div>
                                                    </div>
                                                    <div className="col-xxl-6 col-xl-5 col-lg-6 col-md-12 col-sm-12 text-end text-md-center">
                                                        <div className="about-three__single-img">
                                                            <img src="/assets/img/about/about-3-1.png" alt="about img" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="tab-pane fade" id="pills-management" role="tabpanel" aria-labelledby="pills-management-tab" tabindex="0">
                                            <div className="about-three__single">
                                                <div className="about-three__animation-1">
                                                    <img src="/assets/img/shape/12.svg" alt="shape icon" />
                                                </div>
                                                <div className="about-three__animation-2">
                                                    <img src="/assets/img/shape/14.svg" alt="shape icon" />
                                                </div>
                                                <div className="about-three__animation-3">
                                                    <img src="/assets/img/shape/11.svg" alt="shape icon" />
                                                </div>
                                                <div className="row">
                                                    <div className="col-xxl-6 col-xl-7 col-lg-6 col-md-12 col-sm-12">
                                                        <div className="about-three__single-content">
                                                            <h2>Build for Speed, Scale & Impact.</h2>
                                                            <p>Craft high-performance websites that look great and convert better — tailored for your business needs.</p>
                                                            <div className="list">
                                                                <ul className="list-unstyled">
                                                                    <li>Responsive, SEO-optimized web design</li>
                                                                    <li>Custom CMS and eCommerce builds</li>
                                                                    <li>Lightning-fast load times</li>
                                                                    <li>Secure, scalable architecture</li>
                                                                </ul>
                                                            </div>
                                                            <Link href="/case-study" className="about-three-btn rr-btn-style-1 mt-45">Learn More <i className="fa-solid fa-arrow-right"></i></Link>
                                                        </div>
                                                    </div>
                                                    <div className="col-xxl-6 col-xl-5 col-lg-6 col-md-12 col-sm-12 text-end text-md-center">
                                                        <div className="about-three__single-img">
                                                            <img src="/assets/img/about/about-3-1.png" alt="about img" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="tab-pane fade" id="pills-optimization" role="tabpanel" aria-labelledby="pills-optimization-tab" tabindex="0">
                                            <div className="about-three__single">
                                                <div className="about-three__animation-1">
                                                    <img src="/assets/img/shape/12.svg" alt="shape icon" />
                                                </div>
                                                <div className="about-three__animation-2">
                                                    <img src="/assets/img/shape/14.svg" alt="shape icon" />
                                                </div>
                                                <div className="about-three__animation-3">
                                                    <img src="/assets/img/shape/11.svg" alt="shape icon" />
                                                </div>
                                                <div className="row">
                                                    <div className="col-xxl-6 col-xl-7 col-lg-6 col-md-12 col-sm-12">
                                                        <div className="about-three__single-content">
                                                            <h2>Dominate Local Marketplaces.</h2>
                                                            <p>From Flipkart to Meesho, streamline your operations and maximize visibility across domestic platforms.</p>
                                                            <div className="list">
                                                                <ul className="list-unstyled">
                                                                    <li>Catalog optimization for top Indian eCommerce sites</li>
                                                                    <li>Pricing, promotion, and order management</li>
                                                                    <li>Compliance with marketplace norms</li>
                                                                    <li>Seller support and performance boosting</li>
                                                                </ul>
                                                            </div>
                                                            <Link href="/case-study" className="about-three-btn rr-btn-style-1 mt-45">Learn More <i className="fa-solid fa-arrow-right"></i></Link>
                                                        </div>
                                                    </div>
                                                    <div className="col-xxl-6 col-xl-5 col-lg-6 col-md-12 col-sm-12 text-end text-md-center">
                                                        <div className="about-three__single-img">
                                                            <img src="/assets/img/about/about-3-1.png" alt="about img" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="tab-pane fade show " id="pills-digital" role="tabpanel" aria-labelledby="pills-digital-tab" tabindex="0">
                                            <div className="about-three__single">
                                                <div className="about-three__animation-1">
                                                    <img src="/assets/img/shape/12.svg" alt="shape icon" />
                                                </div>
                                                <div className="about-three__animation-2">
                                                    <img src="/assets/img/shape/14.svg" alt="shape icon" />
                                                </div>
                                                <div className="about-three__animation-3">
                                                    <img src="/assets/img/shape/11.svg" alt="shape icon" />
                                                </div>
                                                <div className="row">
                                                    <div className="col-xxl-6 col-xl-7 col-lg-6 col-md-12 col-sm-12">
                                                        <div className="about-three__single-content">
                                                            <h2>Expand Your Brand Beyond Borders.</h2>
                                                            <p>Take your e-commerce business global with expert account handling, data-driven insights, and seamless cross-border compliance.</p>
                                                            <div className="list">
                                                                <ul className="list-unstyled">
                                                                    <li>Nulla vel dolor accumsan neque vestibulum</li>
                                                                    <li>Cras lacinia elit a turpis ultricies bibendum</li>
                                                                    <li>posuere a ligula molestie, suscipit ullamcorper velit</li>
                                                                    <li>Nulla ac varius tellus, in laoreet libero</li>
                                                                </ul>
                                                            </div>
                                                            <Link href="/case-study" className="about-three-btn rr-btn-style-1 mt-45">Learn More <i className="fa-solid fa-arrow-right"></i></Link>
                                                        </div>
                                                    </div>
                                                    <div className="col-xxl-6 col-xl-5 col-lg-6 col-md-12 col-sm-12 text-end text-md-center">
                                                        <div className="about-three__single-img">
                                                            <img src="/assets/img/about/about-3-1.png" alt="about img" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* about one end */}
        </>
    )
}

export default AboutOne;