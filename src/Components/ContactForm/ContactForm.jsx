import React, { useState } from "react";
import "./ContactForm.css";
const ContactForm = () => {
  const [name, setName] = useState("");
  const [subject, setSubject] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const mailtoLink = `mailto:tu_correo@ejemplo.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(`Nombre: ${name}`)}`;
    window.location.href = mailtoLink;
  };

  return (
    <form onSubmit={handleSubmit} className="form-component">
      <div>
        <label htmlFor="name">Nombre:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          placeholder="Pablo Gomez"
        />
      </div>
      <div>
        <label htmlFor="subject">Asunto:</label>
        <textarea
          id="subject"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          required
          rows={6}
        ></textarea>
      </div>
      <button type="submit">Enviar</button>
    </form>
  );
};

export default ContactForm;
