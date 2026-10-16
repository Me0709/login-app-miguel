const tarjeta = document.getElementById('tarjeta');
const formulario = document.getElementById('login');
const usuario = document.getElementById('usuario');
const clave = document.getElementById('clave');
const ojo = document.getElementById('ojo');
const avisoMayus = document.getElementById('aviso-mayus');
const boton = document.getElementById('ingresar');
const resultado = document.getElementById('resultado');

function validarCampo(campo, idError, mensaje) {
  const contenedor = campo.closest('.campo');
  const error = document.getElementById(idError);
  if (campo.value.trim() === '') {
    contenedor.classList.add('invalido');
    campo.setAttribute('aria-invalid', 'true');
    error.textContent = mensaje;
    return false;
  }
  contenedor.classList.remove('invalido');
  campo.removeAttribute('aria-invalid');
  error.textContent = '';
  return true;
}

function sacudirTarjeta() {
  tarjeta.classList.remove('sacudir');
  void tarjeta.offsetWidth;
  tarjeta.classList.add('sacudir');
}

function restablecerBoton() {
  boton.classList.remove('cargando', 'exito');
  resultado.textContent = '';
}

formulario.addEventListener('submit', function (evento) {
  evento.preventDefault();
  restablecerBoton();

  const usuarioValido = validarCampo(usuario, 'error-usuario', 'Ingresa tu usuario.');
  const claveValida = validarCampo(clave, 'error-clave', 'Ingresa tu contraseña.');

  if (!usuarioValido || !claveValida) {
    sacudirTarjeta();
    (usuarioValido ? clave : usuario).focus();
    return;
  }

  boton.classList.add('cargando');
  setTimeout(function () {
    boton.classList.remove('cargando');
    boton.classList.add('exito');
    resultado.textContent = 'Datos completos: el formulario se puede enviar.';
  }, 1100);
});

[usuario, clave].forEach(function (campo) {
  campo.addEventListener('input', function () {
    campo.closest('.campo').classList.remove('invalido');
    campo.removeAttribute('aria-invalid');
    restablecerBoton();
  });
});

ojo.addEventListener('click', function () {
  const visible = clave.type === 'password';
  clave.type = visible ? 'text' : 'password';
  ojo.classList.toggle('visible', visible);
  ojo.setAttribute('aria-label', visible ? 'Ocultar contraseña' : 'Mostrar contraseña');
  clave.focus();
});

clave.addEventListener('keyup', function (evento) {
  avisoMayus.hidden = !evento.getModifierState('CapsLock');
});

clave.addEventListener('blur', function () {
  avisoMayus.hidden = true;
});
