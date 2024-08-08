import "./Contact.css"
import ContactForm from '../../Components/ContactForm/ContactForm'

const Contact = () => {
  return (
    <div className='containerContactForm' >
   
      <h3>Contacto</h3>
      <ContactForm/>
      <p>Déjanos tus datos y nos pondremos en contacto contigo</p>
    </div>
  )
}

export default Contact