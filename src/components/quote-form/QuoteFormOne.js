import React from 'react';
import { useState} from 'react';

const QuoteFormOne = () => {
    const [form, setForm] = useState({ name: '', email: '', message: '' ,phone: '',subject : ''});
    
      const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();
        const res = await fetch('/api/contact', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(form),
        });
        const data = await res.json();
        alert(data.message);
      };
    return (
        <>
            {/* quote form one start */}
            <div className="quote-form-one pt-160 pb-160">
                <div className="quote-form-one__wrapper">
                    <div className="quote-form-one__img1">
                        <img src="/assets/img/quote-form/shape1.svg" alt="img" />
                    </div>
                    <div className="quote-form-one__img2">
                        <img src="/assets/img/quote-form/shape2.svg" alt="img" />
                    </div>
                    <div className="quote-form-one__img3">
                        <img src="/assets/img/quote-form/shape3.svg" alt="img" />
                    </div>
                    <div className="quote-form-one__img4">
                        <img src="/assets/img/quote-form/shape4.svg" alt="img" />
                    </div>
                    <div className="quote-form-one__img5">
                        <img src="/assets/img/quote-form/shape5.svg" alt="img" />
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-6 wow fadeInLeft" data-wow-delay=".3s">
                                <div className="quote-form-one__img">
                                    <img src="/assets/img/quote-form/bg-1.png" alt="img" />
                                </div>
                            </div>
                            <div className="col-xl-6">
                                <div className="quote-form-one__content wow fadeInUp" data-wow-delay=".3s">
                                    <h2 className="quote-form-one__title">Get in touch</h2>
                                    <p className="mb-40">Projects case study environmental stewardship has impacted economical.</p>
                                    <form action="#" className="contact-quote-form" onSubmit={handleSubmit}>
                                        <div className="row">
                                            <div className="col-xl-6">
                                                <input name='name' type="text" placeholder="Your name" onChange={handleChange} />
                                            </div>
                                            <div className="col-xl-6">
                                                <input name='email' type="text" placeholder="Your email" onChange={handleChange}/>
                                            </div>
                                            <div className="col-xl-6">
                                                <input name='phone' type="text" placeholder="Your phone" onChange={handleChange}/>
                                            </div>
                                            <div className="col-xl-6">
                                                <input name='subject' type="text" placeholder="Your subject" onChange={handleChange}/>
                                            </div>
                                            <div className="col-xl-12">
                                                <textarea name="message" id="message" placeholder="Type your message..." onChange={handleChange}></textarea>
                                                <button type="submit" className="contact-btn rr-bounce-up">Send Message</button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* quote form one end */}
        </>
    )
}

export default QuoteFormOne;