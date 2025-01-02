import React, { useState } from "react";

function RegistrationForm() {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [welcomeMessage, setWelcomeMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.name && form.email && form.password) {
      setWelcomeMessage(`Bem-vindo, ${form.name}!`);
    } else {
      alert("Preencha todos os campos!");
    }
  };

  return (
    <div>
      <h2>Formulário de Registro</h2>
      {welcomeMessage ? (
        <p>{welcomeMessage}</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Nome"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />
          <input
            type="email"
            placeholder="E-mail"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />
          <input
            type="password"
            placeholder="Senha"
            value={form.password}
            onChange={(e) => setForm({ ...form, password: e.target.value })}
          />
          <button type="submit">Registrar</button>
        </form>
      )}
    </div>
  );
}

export default RegistrationForm;

