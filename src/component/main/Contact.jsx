import React,{useState} from 'react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };
  const handleSubmit = (event) => {
    // event.preventDefault();
    console.log('submmited')
  };
  return (
    <section id='contact' className='md:w-3/4 mx-auto text-center' >
      <h2 className='text-white mb-10 font-bold text-xl md:text-3xl'>Contact Me</h2>
    <form  action="https://formsubmit.co/bghanbi50@gmail.com" method="POST" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder='Name'

        />
      <br />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder='Email'
        />
      <br />
        <input
          type="text"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          placeholder='Subject'
        />
      <br />
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder='Write Message'
        />
      <br />
      <button className='text-white submitForm' type="submit">Submit</button>
    </form> 
    </section>
  )
}

export default Contact