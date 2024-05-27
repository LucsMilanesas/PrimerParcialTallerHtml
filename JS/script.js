document.addEventListener('DOMContentLoaded', () => {
    const maincra = document.getElementById('maincra');
    const x1 = document.getElementById('x1');
    const x2 = document.getElementById('x2');
    const x3 = document.getElementById('x3');
    const x4 = document.getElementById('x4');

    function mostrarMensaje(event) {
        event.preventDefault();
        alert('Has hecho clic en el enlace: ' + event.target.textContent);
    }

    function holaMundo(event) {
        event.preventDefault();
        alert('Hola Mundo');
    }

    function cambiarEstilo(event) {
        event.target.style.backgroundColor = '#d3d3d3';  // Cambiar color de fondo
    }

    function revertirEstilo(event) {
        event.target.style.backgroundColor = '';  // Revertir color de fondo
    }

    maincra.addEventListener('click', holaMundo);

    x1.addEventListener('mouseover', cambiarEstilo);
    x1.addEventListener('mouseout', revertirEstilo);

    x2.addEventListener('mouseover', cambiarEstilo);
    x2.addEventListener('mouseout', revertirEstilo);

    x3.addEventListener('mouseover', cambiarEstilo);
    x3.addEventListener('mouseout', revertirEstilo);

    x4.addEventListener('mouseover', cambiarEstilo);
    x4.addEventListener('mouseout', revertirEstilo);
});