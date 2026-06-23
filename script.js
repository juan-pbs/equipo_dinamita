document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('form-contacto');
  const botonVerMensajes = document.getElementById('btn-ver-mensajes');

  if (!form) {
    return;
  }

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const nombre = document.getElementById('nombre').value.trim();
    const email = document.getElementById('email').value.trim();
    const mensaje = document.getElementById('mensaje').value.trim();

    if (!nombre || !email || !mensaje) {
      mostrarMensaje('Por favor completa todos los campos.', 'error');
      return;
    }

    if (!validarEmail(email)) {
      mostrarMensaje('Escribe un correo electrónico válido.', 'error');
      return;
    }

    guardarEnStorage({ nombre, email, mensaje });
    mostrarMensaje('¡Mensaje enviado correctamente! ✅', 'exito');
    form.reset();
  });

  if (botonVerMensajes) {
    botonVerMensajes.addEventListener('click', verMensajesGuardados);
  }
});

function validarEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

function mostrarMensaje(texto, tipo) {
  const el = document.getElementById('msg-respuesta');
  el.textContent = texto;
  el.className = tipo === 'error' ? 'msg-error' : 'msg-exito';
}

function guardarEnStorage(datos) {
  const mensajes = JSON.parse(localStorage.getItem('mensajes-contacto')) || [];
  datos.fecha = new Date().toLocaleString('es-MX');
  mensajes.push(datos);
  localStorage.setItem('mensajes-contacto', JSON.stringify(mensajes));
}

function verMensajesGuardados() {
  const mensajes = JSON.parse(localStorage.getItem('mensajes-contacto')) || [];
  const contenedor = document.getElementById('mensajes-guardados');

  console.table(mensajes);

  if (!contenedor) {
    return;
  }

  if (mensajes.length === 0) {
    contenedor.innerHTML = '<p>No hay mensajes guardados todavía.</p>';
    return;
  }

  contenedor.innerHTML = mensajes.map((item) => `
    <article class="mensaje-card">
      <h3>${item.nombre}</h3>
      <p><strong>Correo:</strong> ${item.email}</p>
      <p><strong>Mensaje:</strong> ${item.mensaje}</p>
      <small>${item.fecha}</small>
    </article>
  `).join('');
}
