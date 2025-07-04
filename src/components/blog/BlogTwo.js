import React from 'react';
import Link from 'next/link';
import { BlogTwoData } from '@/data/blog';

const BlogTwo = () => {
    return (
        <>
            {/* blog two start */}
            <div className="blog-two theme-gray-3 pt-110 pb-120">
                <div className="container">
                    <div className="row">
                        <div className="col-xxl-12 text-center wow fadeInUp" data-wow-delay=".3s">
                            <h2 className="section-title__one-title">Latest Insights & Updates <br /> </h2>
                        </div>
                    </div>
                    <div className="row">
                        {[...BlogTwoData].slice(-3).reverse().map((item, i) => (
                            
                          <div key={i} className="col-xxl-4 col-xl-4 col-lg-6 col-md-12 col-sm-12">
                              <div className="blog-two__single mb-30 wow fadeInUp" data-wow-delay=".3s">
                                <div className="blog-three__img">
                                        <img src={item.image} alt={item.alt}  />
                                        <div className="icon">
                                            <Link href={`/blogs/${item.slug}`}><i className="fa-regular fa-arrow-up-right"></i></Link>
                                        </div>
                                    </div>
                                  <div className="blog-two__single-content">
                                      <div className="postbox__meta">
                                          <span><i className="fa-light fa-calendar-lines"></i>{item.date}</span>
                                      </div>
                                      <h2 className="blog-two__title"><Link href={`/blogs/${item.slug}`}>{item.heading}</Link></h2>
                                      <div className="row">
                                          <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-6">
                                              <Link href={`/blogs/${item.slug}`} className="blog-two__btn">{item.link_text} <i className="fa-solid fa-arrow-right"></i></Link>
                                          </div>
                                          <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-6 text-end">
                                              <div className="share-icon">
                                                  <a href="#"><i className="fa-light fa-share-nodes"></i></a>
                                                  <div className="share-option__hover">
                                                      <ul>
                                                          <li><a href="#"><i className="fa-brands fa-facebook-f"></i></a></li>
                                                          <li><a href="#"><i className="fa-brands fa-twitter"></i></a></li>
                                                          <li><a href="#"><i className="fa-brands fa-linkedin-in"></i></a></li>
                                                      </ul>
                                                  </div>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                        ))}
                    </div>
                </div>
            </div>
            {/* blog two end */}
        </>
    )
}

export default BlogTwo;