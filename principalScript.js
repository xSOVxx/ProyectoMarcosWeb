document.getElementById("botonRegistro").addEventListener("click", function () {
    const modalLogin = bootstrap.Modal.getInstance(document.getElementById('exampleModal'));
    modalLogin.hide();
    const modalRegistro = new bootstrap.Modal(document.getElementById('RegistroModal'));
    modalRegistro.show();
  });

  document.getElementById("btnAceptarRegistro").addEventListener("click", function () {
    const checkbox = document.getElementById("form2Example31");
    if (!checkbox.checked) {
      alert("Debés aceptar los términos y condiciones.");
      return;
    }
    const modalRegistro = bootstrap.Modal.getInstance(document.getElementById('RegistroModal'));
    modalRegistro.hide();
    const modalVerificacion = new bootstrap.Modal(document.getElementById('ModalVerificacion'));
    modalVerificacion.show();
  });

  // Limpieza global al cerrar cualquier modal
  document.querySelectorAll('.modal').forEach(modal => {
    modal.addEventListener('hidden.bs.modal', () => {
      // Eliminar clase que bloquea scroll y clics
      document.body.classList.remove('modal-open');

      // Eliminar backdrop si quedó colgado
      const backdrop = document.querySelector('.modal-backdrop');
      if (backdrop) {
        backdrop.remove();
      }
    });
  });
