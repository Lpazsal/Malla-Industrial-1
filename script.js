const cursos = [
    { nombre: "Matemática Discreta", ciclo: 1, creditos: 5 },
    { nombre: "Geometría Analítica", ciclo: 1, creditos: 4 },
    { nombre: "Filosofía", ciclo: 1, creditos: 3 },
    { nombre: "Ciudadanía Intercultural", ciclo: 1, creditos: 2 },
    { nombre: "Introducción a la Ingeniería", ciclo: 1, creditos: 2 },
    { nombre: "Lenguaje", ciclo: 1, creditos: 2 },
    { nombre: "Métodos de Estudio", ciclo: 1, creditos: 2 },
    { nombre: "Actividades I", ciclo: 1, creditos: 1 },
    { nombre: "Inglés I", ciclo: 1, creditos: 1 },

    { nombre: "Álgebra Lineal", ciclo: 2, creditos: 5 },
    { nombre: "Cálculo I", ciclo: 2, creditos: 5, prereq: ["Matemática Discreta", "Geometría Analítica"] },
    { nombre: "Introducción a la Programación", ciclo: 2, creditos: 5, prereq: ["Matemática Discreta"] },
    { nombre: "Dibujo y Diseño Gráfico", ciclo: 2, creditos: 3, prereq: ["Geometría Analítica"] },
    { nombre: "Introducción a la Economía", ciclo: 2, creditos: 3, prereq: ["Ciudadanía Intercultural"] },
    { nombre: "Actividades II", ciclo: 2, creditos: 1, prereq: ["Actividades I"] },
    { nombre: "Inglés II", ciclo: 2, creditos: 1, prereq: ["Inglés I"] },

    { nombre: "Cálculo II", ciclo: 3, creditos: 5, prereq: ["Cálculo I"] },
    { nombre: "Física I", ciclo: 3, creditos: 5, prereq: ["Álgebra Lineal", "Cálculo I"] },
    { nombre: "Química Industrial", ciclo: 3, creditos: 5, prereq: ["Cálculo I"] },
    { nombre: "Microeconomía", ciclo: 3, creditos: 4, prereq: ["Introducción a la Economía", "Cálculo I"] },
    { nombre: "Diseño Industrial por Computador", ciclo: 3, creditos: 3, prereq: ["Dibujo y Diseño Gráfico"] },
    { nombre: "Discapacidad e Inclusión", ciclo: 3, creditos: 1, prereq: ["Ciudadanía Intercultural"] },

    { nombre: "Algoritmo y Estructura de Datos", ciclo: 4, creditos: 5, prereq: ["Introducción a la Programación"] },
    { nombre: "Física II", ciclo: 4, creditos: 5, prereq: ["Física I"] },
    { nombre: "Ecuaciones Diferenciales", ciclo: 4, creditos: 4, prereq: ["Cálculo II"] },
    { nombre: "Estadística y Probabilidades I", ciclo: 4, creditos: 4, prereq: ["Cálculo II"] },
    { nombre: "Materiales de Ingeniería", ciclo: 4, creditos: 4, prereq: ["Física I", "Química Industrial"] },

    { nombre: "Ingeniería Eléctrica y Electrónica", ciclo: 5, creditos: 5, prereq: ["Física I", "Ecuaciones Diferenciales"] },
    { nombre: "Mecánica de Materiales", ciclo: 5, creditos: 5, prereq: ["Materiales de Ingeniería", "Diseño Industrial por Computador"] },
    { nombre: "Contabilidad General", ciclo: 5, creditos: 4, prereq: ["80 créditos"] },
    { nombre: "Estadística y Probabilidades II", ciclo: 5, creditos: 4, prereq: ["Estadística y Probabilidades I"] },
    { nombre: "Ingeniería Administrativa", ciclo: 5, creditos: 4, prereq: ["Microeconomía"] },

    { nombre: "Ingeniería de Costos", ciclo: 6, creditos: 4, prereq: ["Contabilidad General"] },
    { nombre: "Ingeniería de Métodos I", ciclo: 6, creditos: 4, prereq: ["Estadística y Probabilidades II"] },
    { nombre: "Gestión de Procesos", ciclo: 6, creditos: 4, prereq: ["Estadística y Probabilidades II", "Ingeniería Administrativa"] },
    { nombre: "Investigación Operativa I", ciclo: 6, creditos: 4, prereq: ["Estadística y Probabilidades II", "Introducción a la Ingeniería"] },
    { nombre: "Proceso de Manufactura", ciclo: 6, creditos: 4, prereq: ["Mecánica de Materiales"] },

    { nombre: "Control de Calidad", ciclo: 7, creditos: 4, prereq: ["Taller de Herramientas Informáticas", "Ingeniería de Procesos"] },
    { nombre: "Gestión Financiera", ciclo: 7, creditos: 4, prereq: ["Ingeniería de Costos"] },
    { nombre: "Ingeniería de Métodos II", ciclo: 7, creditos: 4, prereq: ["Ingeniería de Métodos I"] },
    { nombre: "Investigación Operativa II", ciclo: 7, creditos: 4, prereq: ["Investigación Operativa I"] },
    { nombre: "Mercadotecnia", ciclo: 7, creditos: 4, prereq: ["Ingeniería Administrativa"] },
    { nombre: "Instrumentación y Control Industrial", ciclo: 7, creditos: 2, prereq: ["Ingeniería Eléctrica y Electrónica"] },

    { nombre: "Automatización Industrial", ciclo: 8, creditos: 4, prereq: ["Instrumentación y Control Industrial"] },
    { nombre: "Formulación y Evaluación de Proyectos", ciclo: 8, creditos: 4, prereq: ["Gestión Financiera"] },
    { nombre: "Mantenimiento, Seguridad y Salud Ocupacional", ciclo: 8, creditos: 4, prereq: ["Investigación Operativa II", "Ingeniería de Métodos II"] },
    { nombre: "Planeamiento y Control de la Producción I", ciclo: 8, creditos: 4, prereq: ["Ingeniería de Métodos II"] },
    { nombre: "Total Quality Management TQM", ciclo: 8, creditos: 4, prereq: ["Ingeniería de Métodos II", "Control de Calidad"] },
    { nombre: "Taller de Manufactura Moderna", ciclo: 8, creditos: 2, prereq: ["Proceso de Manufactura"] },

    { nombre: "Diseño de Sistemas de Producción", ciclo: 9, creditos: 4, prereq: ["Automatización Industrial", "Taller de Manufactura Moderna"] },
    { nombre: "Gestión de Proyectos – PMI", ciclo: 9, creditos: 4, prereq: ["Formulación y Evaluación de Proyectos"] },
    { nombre: "Planeamiento y Control de la Producción II", ciclo: 9, creditos: 4, prereq: ["Planeamiento y Control de la Producción I"] },
    { nombre: "Proyecto Final de Ingeniería Industrial I", ciclo: 9, creditos: 4, prereq: ["Planeamiento y Control de la Producción I", "Formulación y Evaluación de Proyectos", "Total Quality Management TQM", "Mantenimiento, Seguridad y Salud Ocupacional"] },
    { nombre: "Psicología Industrial y Organizacional", ciclo: 9, creditos: 2, prereq: ["174 créditos"] },

    { nombre: "Gestión de Personal y Legislación laboral", ciclo: 10, creditos: 4, prereq: ["Psicología Industrial y Organizacional"] },
    { nombre: "Supply Chain Management", ciclo: 10, creditos: 4, prereq: ["Planeamiento y Control de la Producción II"] },
    { nombre: "Trabajo de Investigación", ciclo: 10, creditos: 4, prereq: ["Planeamiento y Control de la Producción II", "Proyecto Final de Ingeniería Industrial I"] },
    { nombre: "Ética y Moral", ciclo: 10, creditos: 2, prereq: ["170 créditos"] }
];

const malla = document.getElementById("malla");

cursos.forEach(curso => {
  const div = document.createElement("div");
  div.className = "curso";
  div.innerHTML = `<strong>${curso.nombre}</strong><br>Ciclo: ${curso.ciclo}<br>Créditos: ${curso.creditos}`;
  div.onclick = () => {
    alert(`Curso: ${curso.nombre}\nCiclo: ${curso.ciclo}\nCréditos: ${curso.creditos}\n${curso.prereq ? "Prerrequisitos: " + curso.prereq.join(", ") : ""}`);
  };
  malla.appendChild(div);
});
