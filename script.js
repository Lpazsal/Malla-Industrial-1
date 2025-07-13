
const cursos = [
  // Ciclo 1
  { nombre: "Matemática Discreta", ciclo: 1, creditos: 5 },
  { nombre: "Geometría Analítica", ciclo: 1, creditos: 4 },
  { nombre: "Filosofía", ciclo: 1, creditos: 3 },
  { nombre: "Ciudadanía Intercultural", ciclo: 1, creditos: 2 },
  { nombre: "Introducción a la Ingeniería", ciclo: 1, creditos: 2 },
  { nombre: "Lenguaje", ciclo: 1, creditos: 2 },
  { nombre: "Métodos de Estudio", ciclo: 1, creditos: 2 },
  { nombre: "Actividades I", ciclo: 1, creditos: 1 },
  { nombre: "Inglés I", ciclo: 1, creditos: 1 },

  // Ciclo 2
  { nombre: "Álgebra Lineal", ciclo: 2, creditos: 5 },
  { nombre: "Cálculo I", ciclo: 2, creditos: 5, prereq: ["Matemática Discreta", "Geometría Analítica"] },
  { nombre: "Introducción a la Programación", ciclo: 2, creditos: 5, prereq: ["Matemática Discreta"] },
  { nombre: "Dibujo y Diseño Gráfico", ciclo: 2, creditos: 3, prereq: ["Geometría Analítica"] },
  { nombre: "Introducción a la Economía", ciclo: 2, creditos: 3, prereq: ["Ciudadanía Intercultural"] },
  { nombre: "Actividades II", ciclo: 2, creditos: 1, prereq: ["Actividades I"] },
  { nombre: "Inglés II", ciclo: 2, creditos: 1, prereq: ["Inglés I"] },

  // Ciclo 3
  { nombre: "Cálculo II", ciclo: 3, creditos: 5, prereq: ["Cálculo I"] },
  { nombre: "Física I", ciclo: 3, creditos: 5, prereq: ["Álgebra Lineal", "Cálculo I"] },
  { nombre: "Química Industrial", ciclo: 3, creditos: 5, prereq: ["Cálculo I"] },
  { nombre: "Microeconomía", ciclo: 3, creditos: 4, prereq: ["Introducción a la Economía", "Cálculo I"] },
  { nombre: "Diseño Industrial por Computador", ciclo: 3, creditos: 3, prereq: ["Dibujo y Diseño Gráfico"] },
  { nombre: "Discapacidad e Inclusión", ciclo: 3, creditos: 1, prereq: ["Ciudadanía Intercultural"] },

  // Ciclo 4
  { nombre: "Algoritmo y Estructura de Datos", ciclo: 4, creditos: 5, prereq: ["Introducción a la Programación"] },
  { nombre: "Física II", ciclo: 4, creditos: 5, prereq: ["Física I"] },
  { nombre: "Ecuaciones Diferenciales", ciclo: 4, creditos: 4, prereq: ["Cálculo II"] },
  { nombre: "Estadística y Probabilidades I", ciclo: 4, creditos: 4, prereq: ["Cálculo II"] },
  { nombre: "Materiales de Ingeniería", ciclo: 4, creditos: 4, prereq: ["Física I", "Química Industrial"] },

  // Ciclo 5
  { nombre: "Ingeniería Eléctrica y Electrónica", ciclo: 5, creditos: 5, prereq: ["Física I", "Ecuaciones Diferenciales"] },
  { nombre: "Mecánica de Materiales", ciclo: 5, creditos: 5, prereq: ["Materiales de Ingeniería", "Diseño Industrial por Computador"] },
  { nombre: "Contabilidad General", ciclo: 5, creditos: 4 },
  { nombre: "Estadística y Probabilidades II", ciclo: 5, creditos: 4, prereq: ["Estadística y Probabilidades I"] },
  { nombre: "Ingeniería Administrativa", ciclo: 5, creditos: 4, prereq: ["Microeconomía"] },

  // Ciclo 6
  { nombre: "Ingeniería de Costos", ciclo: 6, creditos: 4, prereq: ["Contabilidad General"] },
  { nombre: "Ingeniería de Métodos I", ciclo: 6, creditos: 4, prereq: ["Estadística y Probabilidades II"] },
  { nombre: "Gestión de Procesos", ciclo: 6, creditos: 4, prereq: ["Estadística y Probabilidades II", "Ingeniería Administrativa"] },
  { nombre: "Investigación Operativa I", ciclo: 6, creditos: 4, prereq: ["Estadística y Probabilidades II", "Introducción a la Ingeniería"] },
  { nombre: "Proceso de Manufactura", ciclo: 6, creditos: 4, prereq: ["Mecánica de Materiales"] },
  { nombre: "Taller de Herramientas Informáticas", ciclo: 6, creditos: 2 },

  // Ciclo 7
  { nombre: "Control de Calidad", ciclo: 7, creditos: 4, prereq: ["Taller de Herramientas Informáticas", "Gestión de Procesos"] },
  { nombre: "Gestión Financiera", ciclo: 7, creditos: 4, prereq: ["Ingeniería de Costos"] },
  { nombre: "Ingeniería de Métodos II", ciclo: 7, creditos: 4, prereq: ["Ingeniería de Métodos I"] },
  { nombre: "Investigación Operativa II", ciclo: 7, creditos: 4, prereq: ["Investigación Operativa I"] },
  { nombre: "Mercadotecnia", ciclo: 7, creditos: 4, prereq: ["Ingeniería Administrativa"] },
  { nombre: "Instrumentación y Control Industrial", ciclo: 7, creditos: 2, prereq: ["Ingeniería Eléctrica y Electrónica"] },

  // Ciclo 8
  { nombre: "Automatización Industrial", ciclo: 8, creditos: 4, prereq: ["Instrumentación y Control Industrial"] },
  { nombre: "Formulación y Evaluación de Proyectos", ciclo: 8, creditos: 4, prereq: ["Gestión Financiera"] },
  { nombre: "Mantenimiento, Seguridad y Salud Ocupacional", ciclo: 8, creditos: 4, prereq: ["Investigación Operativa II", "Ingeniería de Métodos II"] },
  { nombre: "Planeamiento y Control de la Producción I", ciclo: 8, creditos: 4, prereq: ["Ingeniería de Métodos II"] },
  { nombre: "Total Quality Management TQM", ciclo: 8, creditos: 4, prereq: ["Ingeniería de Métodos II", "Control de Calidad"] },
  { nombre: "Taller de Manufactura Moderna", ciclo: 8, creditos: 2, prereq: ["Proceso de Manufactura"] },

  // Ciclo 9
  { nombre: "Diseño de Sistemas de Producción", ciclo: 9, creditos: 4, prereq: ["Automatización Industrial", "Taller de Manufactura Moderna"] },
  { nombre: "Gestión de Proyectos – PMI", ciclo: 9, creditos: 4, prereq: ["Formulación y Evaluación de Proyectos"] },
  { nombre: "Planeamiento y Control de la Producción II", ciclo: 9, creditos: 4, prereq: ["Planeamiento y Control de la Producción I"] },
  { nombre: "Proyecto Final de Ingeniería Industrial I", ciclo: 9, creditos: 4, prereq: ["Planeamiento y Control de la Producción I", "Formulación y Evaluación de Proyectos", "Total Quality Management TQM", "Mantenimiento, Seguridad y Salud Ocupacional"] },
  { nombre: "Psicología Industrial y Organizacional", ciclo: 9, creditos: 2 },

  // Ciclo 10
  { nombre: "Gestión de Personal y Legislación laboral", ciclo: 10, creditos: 4, prereq: ["Psicología Industrial y Organizacional"] },
  { nombre: "Supply Chain Management", ciclo: 10, creditos: 4, prereq: ["Planeamiento y Control de la Producción II"] },
  { nombre: "Trabajo de Investigación", ciclo: 10, creditos: 4, prereq: ["Planeamiento y Control de la Producción II", "Proyecto Final de Ingeniería Industrial I"] },
  { nombre: "Ética y Moral", ciclo: 10, creditos: 2 },

  // Electivas
  { nombre: "Ingeniería de Costos Avanzado", ciclo: 11, creditos: 4, prereq: ["Ingeniería de Costos"] },
  { nombre: "Marketing Digital", ciclo: 11, creditos: 4, prereq: ["Mercadotecnia"] },
  { nombre: "Planeamiento, Desarrollo e Ingeniería del Producto", ciclo: 11, creditos: 4, prereq: ["Mercadotecnia"] },
  { nombre: "Comercio Exterior y Financiamiento", ciclo: 11, creditos: 3, prereq: ["Mercadotecnia"] },
  { nombre: "Ergonomía", ciclo: 11, creditos: 3, prereq: ["Mantenimiento, Seguridad y Salud Ocupacional"] },
  { nombre: "Fundamentos de Emprendimiento", ciclo: 11, creditos: 3 },
  { nombre: "Gestión de Riesgos", ciclo: 11, creditos: 3, prereq: ["Mantenimiento, Seguridad y Salud Ocupacional"] },
  { nombre: "Mercado de Valores Industriales", ciclo: 11, creditos: 3, prereq: ["Gestión Financiera"] },
  { nombre: "Metodologías Ágiles", ciclo: 11, creditos: 3, prereq: ["Gestión de Proyectos – PMI"] },
  { nombre: "Sistemas ERP", ciclo: 11, creditos: 3, prereq: ["Planeamiento y Control de la Producción II"] },
  { nombre: "Gestión de la Innovación", ciclo: 11, creditos: 2, prereq: ["Formulación y Evaluación de Proyectos"] },
  { nombre: "Liderazgo y Oratoria", ciclo: 11, creditos: 2 }
];

const completados = new Set();

function crearMalla() {
  const container = document.getElementById("malla-container");
  container.innerHTML = "";

  const ciclos = {};
  cursos.forEach(curso => {
    if (!ciclos[curso.ciclo]) {
      ciclos[curso.ciclo] = [];
    }
    ciclos[curso.ciclo].push(curso);
  });

  Object.keys(ciclos).sort((a, b) => a - b).forEach(n => {
    const divCiclo = document.createElement("div");
    divCiclo.className = "ciclo";
    divCiclo.innerHTML = `<h2>${n <= 10 ? "Ciclo " + n : "Electivas"}</h2>`;
    ciclos[n].forEach(curso => {
      const divCurso = document.createElement("div");
      divCurso.className = "curso";
      divCurso.id = curso.nombre;
      divCurso.innerHTML = `<strong>${curso.nombre}</strong><br>Créditos: ${curso.creditos}`;

      const tienePrer = curso.prereq && curso.prereq.length > 0;
      const cumplido = !tienePrer || curso.prereq.every(p => completados.has(p));

      if (!cumplido) {
        divCurso.classList.add("bloqueado");
      }

      divCurso.onclick = () => {
        if (!cumplido) return alert("Debes completar los prerrequisitos primero.");
        if (completados.has(curso.nombre)) return;

        completados.add(curso.nombre);
        crearMalla();
      };

      divCiclo.appendChild(divCurso);
    });
    container.appendChild(divCiclo);
  });
}

window.onload = crearMalla;
