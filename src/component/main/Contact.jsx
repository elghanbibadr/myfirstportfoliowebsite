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
    event.preventDefault();
    console.log(formData);
  };
  return (
    <section id='contact' >
      <h2 className='text-white font-bold text-xl md:text-3xl'>Contact Me</h2>
    <form onSubmit={handleSubmit}>
      <label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder='Name'

        />
      </label>
      <br />
      <label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder='Name'
        />
      </label>
      <br />
      <label>
        <input
          type="text"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          placeholder='Name'
        />
      </label>
      <br />
      <label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder='Name'
        />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form> 
    </section>
  )
}

export default Contact