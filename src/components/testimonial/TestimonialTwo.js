import React, { useEffect } from 'react';

const TestimonialTwo = () => {

    useEffect(() => {

        // Testimonial Two
        if ($(".testimonial-two__active").length) {
            $(".testimonial-two__active").owlCarousel({
                items: 1,
                loop: true,
                nav: false,
                margin: 10,
                dotsData: true,
                animateOut: 'fadeOutDown',
                animateIn: 'fadeInDown',
            });
        }
          
    }, []);

    return (
        <>
            {/* testimonial two start */}
            <div className="testimonial-two pt-110">
                <div className="container">
                    <div className="row">
                        <div className="mb-70">
                            <h2 className="section-title__two-title text-center wow fadeInUp" data-wow-delay=".3s">What Clients Say About <br /> Our SEO Services.</h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xl-12 wow fadeInUp" data-wow-delay=".5s">
                            <div className="testimonial-two__wrapper">
                                <div className="testimonial-two__img">
                                    <img src="/assets/img/testimonial/quote-icon.svg" alt="quote icon" />
                                </div>
                                <div className="testimonial-two__active owl-carousel">
                                    <div data-dot="<img src='assets/img/testimonial/testimonial-1-3-1.png' />" className="testimonial-two__single">
                                        <p>“Working with SalesStrive was one of the best decisions we made. They completely revamped our online strategy, and within weeks, we saw a sharp increase in website traffic and customer engagement. Their creative approach and data-driven campaigns helped our brand truly stand out.”</p>
                                        <h4>Indigo Violet</h4>
                                        <span>Director, Client Experience</span>
                                    </div>
                                    <div data-dot="<img src='assets/img/testimonial/testimonial-1-2-1.png' />" className="testimonial-two__single">
                                        <p>“SalesStrive didn’t just manage our ads — they took ownership of our entire growth journey. From SEO to Instagram reels, their team consistently delivered measurable results. We went from struggling with conversions to scaling our sales month-on-month. Highly recommended for fast-moving e-commerce brands”</p>
                                        <h4>Michael Walker</h4>
                                        <span>Director, Client Experience</span>
                                    </div>
                                    <div data-dot="<img src='assets/img/testimonial/testimonial-1-4-1.png' />" className="testimonial-two__single">
                                        <p>“The SalesStrive team brought clarity and structure to our digital marketing. Their brand storytelling, influencer collaborations, and strategic ad targeting helped us connect with health-conscious audiences across India. They truly understand how to turn clicks into loyal customers.”</p>
                                        <h4>David Anderson</h4>
                                        <span>Director, Client Experience</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* testimonial two end */}
        </>
    )
}

export default TestimonialTwo;