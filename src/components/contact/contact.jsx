import React from 'react'
import Logo from '../../assets/images/logo-black.webp'
import './contact.css'

import { Formik, Field, Form } from 'formik';

const Contact = () => (
  <div className='contact--container'>
    
    <div className='contact--form-text'>
      <img src={Logo} alt='Smash Pets Logo' width='200' />
      <h3>Contact Smash Pets</h3>
      <p>Contact Us today for your custom pet crafts</p>
    </div>
    <Formik
      initialValues={{
        firstName: '',
        lastName: '',
        email: '',
      }}
      onSubmit={async (values) => {
        await new Promise((r) => setTimeout(r, 500));
        alert(JSON.stringify(values, null, 2));
      }}
    >
      <Form className='contact--form'>
        <label htmlFor="firstName"></label>
        <Field id="firstName" name="firstName" placeholder="First Name " />

        <label htmlFor="lastName"></label>
        <Field id="lastName" name="lastName" placeholder="Last Name" />

        <label htmlFor="email"></label>
        <Field
          id="email"
          name="email"
          placeholder="Email"
          type="email"
        />
        <button type="submit">Submit</button>
      </Form>
    </Formik>
  </div>
);

export default Contact