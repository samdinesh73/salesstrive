
import React , { useState } from 'react';
const Consultationform = () => {
    const [form, setForm] = useState({
  name: '',
  email: '',
  phone: '',
  subject: '',
  service: '',
  message: ''
});



  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch('/api/consultation', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    });
    const data = await res.json();
    alert(data.message);
  };
   
     return (
       <div>
          <div className="modal fade" id="consultationModal" tabindex="-1" aria-labelledby="consultationModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header" >
        <h5 className="modal-title" id="consultationModalLabel">Free Consultation Form</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
        {/* <form id="consultationForm" onSubmit={handleSubmit}>
          <div class="mb-3">
            <label for="name" class="form-label">Your Name</label>
            <input name="name" type="text" class="form-control" id="name" onChange={handleChange} required />
          </div>
          <div class="mb-3">
            <label for="email" class="form-label">Email address</label>
            <input name="email" type="email" class="form-control" id="email" onChange={handleChange} required />
          </div>
          <div class="mb-3">
            <label for="message" class="form-label">Message</label>
            <textarea name="message" class="form-control" id="message" rows="3" onChange={handleChange} required></textarea>
          </div>
          <button type="submit" class="btn btn-success">Submit</button>
        </form> */}
        <form id="consultationForm" onSubmit={handleSubmit}>
  <div className="mb-3">
    <label htmlFor="name" className="form-label">Your Name</label>
    <input
      name="name"
      type="text"
      className="form-control"
      id="name"
      onChange={handleChange}
      required
    />
  </div>

  <div className="mb-3">
    <label htmlFor="email" className="form-label">Email address</label>
    <input
      name="email"
      type="email"
      className="form-control"
      id="email"
      onChange={handleChange}
      required
    />
  </div>
  <div className="mb-3">
    <label htmlFor="phone" className="form-label">Phone</label>
    <input
      name="phone"
      type="phone"
      className="form-control"
      id="phone"
      onChange={handleChange}
      required
    />
  </div>
  <div className="mb-3">
    <label htmlFor="subject" className="form-label">Subject</label>
    <input
      name="subject"
      type="input"
      className="form-control"
      id="subject"
      onChange={handleChange}
      required
    />
  </div>

  <div className="mb-3">
    <label className="form-label d-block">Select Service</label>

    <div className="form-check">
      <input
        className="form-check-input"
        type="radio"
        name="service"
        value="Web Development"
        id="service1"
        onChange={handleChange}
        required
      />
      <label className="form-check-label" htmlFor="service1">
        Web Development
      </label>
    </div>

    <div className="form-check">
      <input
        className="form-check-input"
        type="radio"
        name="service"
        value="SEO"
        id="service2"
        onChange={handleChange}
      />
      <label className="form-check-label" htmlFor="service2">
        SEO
      </label>
    </div>

    <div className="form-check">
      <input
        className="form-check-input"
        type="radio"
        name="service"
        value="Social Media Marketing"
        id="service3"
        onChange={handleChange}
      />
      <label className="form-check-label" htmlFor="service3">
        Social Media Marketing
      </label>
    </div>
    <div className="form-check">
      <input
        className="form-check-input"
        type="radio"
        name="service"
        value="E-com Account Management"
        id="service4"
        onChange={handleChange}
      />
      <label className="form-check-label" htmlFor="service4">
        E-com Account Management
      </label>
    </div>
  </div>

  <div className="mb-3">
    <label htmlFor="message" className="form-label">Message</label>
    <textarea
      name="message"
      className="form-control"
      id="message"
      rows="3"
      onChange={handleChange}
      required
    ></textarea>
  </div>

  <button type="submit" className="btn btn-success">Submit</button>
</form>

      </div>
    </div>
  </div>
</div>

       </div>
     
   )}
   
   export default Consultationform
   