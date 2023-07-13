// Crea un elemento <style> para agregar las reglas CSS del puntero personalizado
var style = document.createElement('style');
style.innerHTML = `
    body {
        cursor: url(/curso_JS/img/raqueta-de-tenis.png), auto;
    }
`;

// Agrega el elemento <style> al <head> del documento
document.head.appendChild(style);

// Agrega los eventos para cambiar el puntero al mover el mouse
document.addEventListener('mousemove', function(event) {
    // Obtén la posición del mouse
    var x = event.clientX;
    var y = event.clientY;

    // Crea un elemento <div> para el puntero personalizado
    var cursor = document.createElement('div');
    cursor.className = 'custom-cursor';
    cursor.style.position = 'fixed';
    cursor.style.left = (x - 10) + 'px'; // Ajusta la posición del puntero
    cursor.style.top = (y - 10) + 'px';  // Ajusta la posición del puntero

    // Agrega el puntero personalizado al cuerpo del documento
    document.body.appendChild(cursor);

    // Remueve el puntero personalizado después de un tiempo (opcional)
    setTimeout(function() {
        document.body.removeChild(cursor);
    }, 200);
});

// Obtener elementos del DOM
const h1Element = document.querySelector('h1');
const btnChangeColor = document.querySelector('#btnChangeColor');

// Función para cambiar el color del título
function changeTitleColor() {
  h1Element.style.color = getRandomColor();
}

// Función para generar un color aleatorio
function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

// Asignar evento al botón
btnChangeColor.addEventListener('click', changeTitleColor);

// Obtener elementos del DOM
const menuIcon = document.querySelector('.menu-icon');
const menu = document.querySelector('.menu');

// Agregar evento de clic al icono de hamburguesa
menuIcon.addEventListener('click', function() {
  menu.classList.toggle('menu-open');
});

function inicializar() {
  // Datos de logros en el tenis ecuatoriano
  const logrosData = [
    "Primer jugador ecuatoriano en alcanzar el top 50 del ranking ATP.",
    "Campeón en el Torneo Internacional de Quito.",
    "Participación en el Grand Slam de Wimbledon.",
    "Ganador del Torneo Junior Sudamericano.",
    "Medalla de oro en los Juegos Panamericanos."
  ];

  // Datos de personas referentes del tenis
  const referentesData = [
    {
      nombre: "Doménica González",
      edad: 27,
      foto: "./img/domenica_gonzales.jpg"
    },
    {
      nombre: "Carlos Gómez",
      edad: 32,
      foto: "./img/carlos_gomez.jpg"
    },
    {
      nombre: "Mell Reasco",
      edad: 22,
      foto: "./img/mell_reasco.jpg"
    }
  ];

  // Datos de medallas ganadas en competencias internacionales
  const medallasData = [
    { año: 2018, torneo: "Copa Davis", medalla: "Plata" },
    { año: 2019, torneo: "Campeonato Sudamericano", medalla: "Oro" },
    { año: 2020, torneo: "Juegos Olímpicos", medalla: "Bronce" }
  ];

  // Función para mostrar logros
  function mostrarLogros() {
    const logrosList = document.getElementById("logros-list");

    logrosData.forEach(logro => {
      const listItem = document.createElement("li");
      listItem.textContent = logro;
      logrosList.appendChild(listItem);
    });
  }

  // Función para mostrar referentes
  function mostrarReferentes() {
    const referentesContainer = document.getElementById("referentes-container");

    referentesData.forEach(referente => {
      const referenteCard = document.createElement("div");
      referenteCard.classList.add("referente-card");

      const foto = document.createElement("img");
      foto.src = referente.foto;
      foto.alt = referente.nombre;
      referenteCard.appendChild(foto);

      const nombre = document.createElement("h3");
      nombre.textContent = referente.nombre;
      referenteCard.appendChild(nombre);

      const edad = document.createElement("p");
      edad.textContent = `Edad: ${referente.edad}`;
      referenteCard.appendChild(edad);

      referentesContainer.appendChild(referenteCard);
    });
  }

  // Función para mostrar medallas
  function mostrarMedallas() {
    const medallasTable = document.getElementById("medallas-table");

    medallasData.forEach(medalla => {
      const row = document.createElement("tr");

      const yearCell = document.createElement("td");
      yearCell.textContent = medalla.año;
      row.appendChild(yearCell);

      const tournamentCell = document.createElement("td");
      tournamentCell.textContent = medalla.torneo;
      row.appendChild(tournamentCell);

      const medalCell = document.createElement("td");
      medalCell.textContent = medalla.medalla;
      row.appendChild(medalCell);

      medallasTable.appendChild(row);
    });
  }

  // Llamar a las funciones para mostrar la información
  mostrarLogros();
  mostrarReferentes();
  mostrarMedallas();
}

function reproducirSonido() {
  var audio = document.getElementById("audio");
  audio.play();
}