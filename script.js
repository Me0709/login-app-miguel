const formulario = document.getElementById('login');
const usuario = document.getElementById('usuario');
const clave = document.getElementById('clave');
const resultado = document.getElementById('resultado');

function validarCampo(campo, idError, mensaje) {
  const error = document.getElementById(idError);
  if (campo.value.trim() === '') {
    campo.classList.add('invalido');
    error.textContent = mensaje;
    return false;
  }
  campo.classList.remove('invalido');
  error.textContent = '';
  return true;
}

formulario.addEventListener('submit', function (evento) {
  evento.preventDefault();
  resultado.textContent = '';
  const usuarioValido = validarCampo(usuario, 'error-usuario', 'Ingresa tu usuario.');
  const claveValida = validarCampo(clave, 'error-clave', 'Ingresa tu contraseña.');
  if (usuarioValido && claveValida) {
    resultado.textContent = 'Datos completos: el formulario se puede enviar.';
  }
});
