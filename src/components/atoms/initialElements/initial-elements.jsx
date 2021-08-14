import React from "react";
import { nodeStyles, NodeLabel } from './initial-elements.utils'

const styles = nodeStyles()
const fullWidthNodeStyles = nodeStyles('350px')

const orientationRTL = {
  sourcePosition: "right",
  targetPosition: "left"
}

const base = {
  ...orientationRTL,
  style: styles,
}

const multiNodeBase = {
  ...base,
  type: 'multipleNode'
}


const initialElements = [
  {
    id: "1",
    ...base,
    data: {
      label: (
        <NodeLabel title="Algebra y Geometría Analítica" subtitle="1° Año" />
      ),
    },
    position: { x: -50, y: 150 },
  },
  {
    id: "2",
    ...multiNodeBase,
    data: {
      sources: [
        { id: 'a', style: { top: 10 } },
        { id: 'b', style: { top: 40 } }
      ],
      label: (
        <NodeLabel title="Análisis Matemático I" subtitle="2° Año" />
      ),
    },
    position: { x: 350, y: 125 },
  },
  {
    id: "3",
    ...base,
    data: {
      label: (
        <NodeLabel title="Probabilidad y Estadística" subtitle="2° Año" />
      ),
    },
    position: { x: 575, y: 75 },
  },
  {
    id: "4",
    ...multiNodeBase,
    data: {
      targets: [
        { id: 'a', style: { top: 10 } },
        { id: 'b', style: { top: 40 } }
      ],
      sources: [
        { id: 'a', style: { top: 10 } },
        { id: 'b', style: { top: 40 } }
      ],
      label: (
        <NodeLabel title="Análisis Matemático II" subtitle="3° Año" />
      ),
    },
    position: { x: 850, y: 110 },
  },
  {
    id: "5",
    ...base,
    data: {
      label: (
        <NodeLabel title="Matemática Aplicada" subtitle="3° Año" />
      ),
    },
    position: { x: 1050, y: 150 },
  },
  {
    id: "6",
    ...base,
    data: {
      label: (
        <NodeLabel title="Modelos, Simulación y Teoría de la Decisión" subtitle="4° Año" />
      ),
    },
    position: { x: 1250, y: 75 },
  },
  {
    id: "7",
    ...base,
    data: {
      label: (
        <NodeLabel title="Tecnología Aplicada" subtitle="1° Año" />
      ),
    },
    position: { x: -50, y: 300 },
  },
  {
    id: "8",
    ...multiNodeBase,
    data: {
      sources: [
        { id: "a", position: "top" },
        {
          id: "b",
          position: "right",
        },
        { id: "c", position: "bottom" },
      ],
      label: (
        <NodeLabel title="Arquitectura de Computadores I" subtitle="1° Año" />
      ),
    },
    position: { x: 150, y: 300 },
  },
  {
    id: "9",
    ...multiNodeBase,
    data: {
      sources: [
        { id: "a", style: { top: 10 } },
        {
          id: "b",
          style: { top: 40 },
        },
        {
          id: "c",
          style: { top: 25 },
        },
      ],
      label: (
        <NodeLabel title="Arquitectura de Computadores II" subtitle="2° Año" />
      ),
    },
    position: { x: 375, y: 300 },
  },
  {
    id: "10",
    ...multiNodeBase,
    data: {
      sources: [
        { id: "a", style: { top: 10 } },
        { id: "b", style: { top: 40 } },
        { id: "c", style: { top: 25 } },
      ],
      label: (
        <NodeLabel title="Sistemas Operativos I" subtitle="2° Año" />
      ),
    },
    position: { x: 575, y: 400 },
  },
  {
    id: "11",
    ...base,
    data: {
      label: (
        <NodeLabel title="Comunicación y Redes I" subtitle="2° Año" />
      ),
    },
    position: { x: 575, y: 225 },
  },
  {
    id: "12",
    ...multiNodeBase,
    data: {
      sources: [
        { id: "a", style: { top: 10 }, position: "right" },
        {
          id: "b",
          style: { top: 40 },
          position: "right",
        },
      ],
      label: (
        <NodeLabel title="Comunicación y Redes II" subtitle="3° Año" />
      ),
    },
    position: { x: 825, y: 225 },
  },
  {
    id: "13",
    ...multiNodeBase,
    data: {
      sources: [
        { id: "a", style: { top: 10 } },
        { id: "b", style: { top: 40 } },
      ],
      label: (
        <NodeLabel title="Taller de Redes" subtitle="3° Año" />
      ),
    },
    position: { x: 1050, y: 225 },
  },
  {
    id: "14",
    ...multiNodeBase,
    data: {
      targets: [
        { id: "a", style: { top: 8 }, position: "left" },
        {
          id: "b",
          style: { top: 26 },
          position: "left",
        },
        { id: "c", style: { top: 45 }, position: "left" },
      ],
      sources: [
        { id: "a", style: { top: 10 } },
        { id: "b", style: { top: 40 } },
      ],
      label: (
        <NodeLabel title="Sistemas Operativos II" subtitle="3° Año" />
      ),
    },
    position: { x: 1050, y: 350 },
  },
  {
    id: "15",
    ...base,
    data: {
      label: (
        <NodeLabel title="Sistemas de Tiempo Real y Misión Crítica" subtitle="5° Año" />
      ),
    },
    position: { x: 1650, y: 350 },
  },
  {
    id: "16",
    ...multiNodeBase,
    data: {
      targets: [
        { id: "a", style: { top: 8 }, position: "left" },
        { id: "b", style: { top: 45 }, position: "left" },
      ],
      label: (
        <NodeLabel title="Infraestructura de Sistemas" subtitle="4° Año" />
      ),
    },
    position: { x: 1450, y: 470 },
  },
  {
    id: "17",
    ...multiNodeBase,
    data: {
      sources: [
        { id: "a", style: { top: 10 }, position: "right" },
        { id: "b", style: { top: 27 }, position: "right" },
        { id: "c", style: { top: 40 }, position: "right" },
      ],
      label: (
        <NodeLabel title="Algoritmos y Estructura de Datos" subtitle="1° Año" />
      ),
    },
    position: { x: -70, y: 575 },
  },
  {
    id: "18",
    ...base,
    data: {
      label: (
        <NodeLabel title="Programación Orientada a Objetos I" subtitle="1° Año" />
      ),
    },
    position: { x: 180, y: 500 },
  },
  {
    id: "19",
    ...multiNodeBase,
    data: {
      sources: [
        { id: "a", style: { top: 10 } },
        { id: "b", style: { top: 40 } },
      ],
      label: (
        <NodeLabel title="Programación Orientada a Objetos II" subtitle="2° Año" />
      ),
    },
    position: { x: 375, y: 500 },
  },
  {
    id: "20",
    ...base,
    data: {
      label: (
        <NodeLabel title="Interfaces de Usuario y Tecnologías Web" subtitle="3° Año" />
      ),
    },
    position: { x: 825, y: 475 },
  },
  {
    id: "21",
    ...base,
    data: {
      label: (
        <NodeLabel title="Teoría de Sistemas y Organizaciones" subtitle="1° Año" />
      ),
    },
    position: { x: 160, y: 625 },
  },
  {
    id: "22",
    ...multiNodeBase,
    data: {
      targets: [
        { id: "a", style: { top: 10 }, position: "left" },
        { id: "b", style: { top: 40 }, position: "left" },
      ],
      label: (
        <NodeLabel title="Ingeniería de Software I" subtitle="2° Año" />
      ),
    },
    position: { x: 575, y: 625 },
  },
  {
    id: "23",
    ...multiNodeBase,
    data: {
      sources: [
        { id: "a", style: { top: 10 } },
        { id: "b", style: { top: 40 } },
      ],
      label: (
        <NodeLabel title="Matemática Discreta" subtitle="1° Año" />
      ),
    },
    position: { x: -25, y: 725 },
  },
  {
    id: "24",
    ...multiNodeBase,
    data: {
      targets: [
        { id: "a", style: { top: 10 } },
        { id: "b", style: { top: 40 } },
      ],
      label: (
        <NodeLabel title="Base de Datos I" subtitle="2° Año" />
      ),
    },
    position: { x: 600, y: 565 },
  },
  {
    id: "25",
    ...multiNodeBase,
    data: {
      sources: [
        { id: "a", style: { top: 10 } },
        { id: "b", style: { top: 40 } },
      ],
      label: (
        <NodeLabel title="Lenguajes Formales" subtitle="2° Año" />
      ),
    },
    position: { x: 400, y: 725 },
  },
  {
    id: "26",
    ...multiNodeBase,
    data: {
      targets: [
        { id: "a", style: { top: 10 } },
        { id: "b", style: { top: 40 } },
      ],
      sources: [
        { id: "a", style: { top: 10 } },
        { id: "c", style: { top: 25 } },
        { id: "b", style: { top: 40 } },
      ],
      label: (
        <NodeLabel title="Base de Datos II" subtitle="3° Año" />
      ),
    },
    position: { x: 850, y: 575 },
  },
  {
    id: "27",
    ...multiNodeBase,
    data: {
      sources: [
        { id: "a", style: { top: 10 } },
        { id: "b", style: { top: 20 } },
        { id: "c", style: { top: 30 } },
        { id: "d", style: { top: 40 } },
      ],
      label: (
        <NodeLabel title="Ingeniería de Software II" subtitle="3° Año" />
      ),
    },
    position: { x: 825, y: 660 },
  },
  {
    id: "28",
    ...multiNodeBase,
    data: {
      targets: [
        { id: "a", style: { top: 10 } },
        { id: "b", style: { top: 25 } },
        { id: "c", style: { top: 40 } },
      ],
      sources: [
        { id: "a", style: { top: 10 } },
        { id: "b", style: { top: 20 } },
        { id: "c", style: { top: 30 } },
        { id: "d", style: { top: 40 } },
      ],
      label: (
        <NodeLabel title="Programación Orientada a Objetos III" subtitle="3° Año" />
      ),
    },
    position: { x: 1050, y: 545 },
  },
  {
    id: "29",
    ...base,
    data: {
      label: (
        <NodeLabel title="Explotación de Datos" subtitle="3° Año" />
      ),
    },
    position: { x: 1050, y: 650 },
  },
  {
    id: "30",
    ...base,
    data: {
      label: (
        <NodeLabel title="Dirección y Evaluación de Proyectos Informáticos" subtitle="4° Año" />
      ),
    },
    position: { x: 1260, y: 725 },
  },
  {
    id: "31",
    ...multiNodeBase,
    data: {
      targets: [
        { id: "a", style: { top: 10 } },
        { id: "b", style: { top: 40 } },
      ],
      label: (
        <NodeLabel title="Arquitectura de Software" subtitle="4° Año" />
      ),
    },
    position: { x: 1260, y: 625 },
  },
  {
    id: "32",
    ...multiNodeBase,
    data: {
      targets: [
        { id: "a", style: { top: 10 } },
        { id: "b", style: { top: 40 } },
      ],
      label: (
        <NodeLabel title="Metodología de la Investigación" subtitle="4° Año" />
      ),
    },
    position: { x: 1260, y: 280 },
  },
  {
    id: "33",
    ...multiNodeBase,
    data: {
      targets: [
        { id: "a", style: { top: 10 } },
        { id: "b", style: { top: 40 } },
      ],
      label: (
        <NodeLabel title="Paradigmas de Programación" subtitle="4° Año" />
      ),
    },
    position: { x: 1260, y: 520 },
  },
  {
    id: "34",
    ...multiNodeBase,
    data: {
      targets: [
        { id: "a", style: { top: 10 } },
        { id: "b", style: { top: 40 } },
      ],
      label: (
        <NodeLabel title="Lenguajes de Programación" subtitle="4° Año" />
      ),
    },
    position: { x: 1260, y: 385 },
  },
  {
    id: "35",
    ...base,
    data: {
      label: (
        <NodeLabel title="Desarrollo de Compiladores" subtitle="4° Año" />
      ),
    },
    position: { x: 1455, y: 375 },
  },
  {
    id: "36",
    ...base,
    data: {
      label: (
        <NodeLabel title="Inteligencia Artificial" subtitle="4° Año" />
      ),
    },
    position: { x: 1455, y: 575 },
  },
  {
    id: "37",
    ...multiNodeBase,
    data: {
      targets: [
        { id: "a", style: { top: 10 } },
        { id: "b", style: { top: 20 } },
        { id: "c", style: { top: 30 } },
        { id: "d", style: { top: 40 } },
      ],
      label: (
        <NodeLabel title="Práctica Profesional" subtitle="4° Año" />
      ),
    },
    position: { x: 1455, y: 670 },
  },
  {
    id: "38",
    ...base,
    data: {
      label: (
        <NodeLabel title="Optativa I" subtitle="5° Año" />
      ),
    },
    position: { x: 1650, y: 100 },
  },
  {
    id: "39",
    ...base,
    data: {
      label: (
        <NodeLabel title="Aspectos Legales y Sociales de la Informática" subtitle="5° Año" />
      ),
    },
    position: { x: 1650, y: 200 },
  },
  {
    id: "40",
    ...base,
    data: {
      label: (
        <NodeLabel title="Ingeniería de Software III" subtitle="5° Año" />
      ),
    },
    position: { x: 1650, y: 725 },
  },
  {
    id: "41",
    ...base,
    data: {
      label: (
        <NodeLabel title="Economía I" subtitle="5° Año" />
      ),
    },
    position: { x: 1650, y: 525 },
  },
  {
    id: "42",
    ...base,
    data: {
      label: (
        <NodeLabel title="Optativa II" subtitle="5° Año" />
      ),
    },
    position: { x: 1850, y: 100 },
  },
  {
    id: "43",
    ...multiNodeBase,
    data: {
      targets: [
        { id: "a", style: { top: 10 } },
        { id: "b", style: { top: 25 } },
        { id: "c", style: { top: 40 } },
      ],
      label: (
        <NodeLabel title="Seguridad y Auditoría" subtitle="5° Año" />
      ),
    },
    position: { x: 1850, y: 300 },
  },
  {
    id: "44",
    ...multiNodeBase,
    data: {
      targets: [
        { id: "a", style: { top: 10 } },
        { id: "b", style: { top: 25 } },
        { id: "c", style: { top: 40 } },
      ],
      label: (
        <NodeLabel title="Teoría de la Computación" subtitle="5° Año" />
      ),
    },
    position: { x: 1850, y: 450 },
  },
  {
    id: "45",
    ...base,
    data: {
      label: (
        <NodeLabel title="Administración y Gestión de las Organizaciones" subtitle="5° Año" />
      ),
    },
    position: { x: 1850, y: 700 },
  },
  {
    id: "46",
    ...base,
    data: {
      label: (
        <NodeLabel title="Economía II" subtitle="5° Año" />
      ),
    },
    position: { x: 1850, y: 525 },
  },
  {
    id: "47",
    ...base,
    style: fullWidthNodeStyles,
    type: 'multipleNode',
    data: {
      targets: [
        { id: "a", style: { top: 10 } },
        { id: "b", style: { top: 40 } },
      ],
      label: (
        <NodeLabel title="Trabajo Final" subtitle="5° Año" />
      ),
    },
    position: { x: 1650, y: 620 },
  },
  {
    id: "48",
    ...base,
    data: {
      label: (
        <NodeLabel title="Electiva" subtitle="2° Año" />
      ),
    },
    position: { x: 380, y: 190 },
  },
  {
    id: "49",
    ...base,
    data: {
      label: (
        <NodeLabel title="Universidad, Ciencia y Sociedad" subtitle="2° Año" />
      ),
    },
    position: { x: 575, y: 780 },
  },
  {
    id: "50",
    ...base,
    data: {
      label: (
        <NodeLabel title="Problemática Regional" subtitle="1° Año" />
      ),
    },
    position: { x: 160, y: 780 },
  },
  {
    id: "51",
    ...base,
    data: {
      label: (
        <NodeLabel title="Análisis y Producción del Discurso" subtitle="1° Año" />
      ),
    },
    position: { x: -50, y: 400 },
  },
  {
    id: "52",
    ...base,
    data: {
      label: (
        <NodeLabel title="Trabajo Social Obligatorio" subtitle="3° Año" />
      ),
    },
    position: { x: 1050, y: 780 },
  },
  {
    id: "53",
    ...base,
    data: {
      label: (
        <NodeLabel title="Inglés I" />
      ),
    },
    position: { x: 575, y: 875 },
  },
  {
    id: "54",
    ...base,
    data: {
      label: (
        <NodeLabel title="Inglés II" />
      ),
    },
    position: { x: 1050, y: 850 },
  },


  {
    id: "e1-2",
    source: "1",
    target: "2",
    type: "smoothstep",
  },
  { id: "e2a-3", source: "2", target: "3", sourceHandle: 'a', type: "smoothstep" },
  { id: "e2b-4b", source: "2", target: "4", sourceHandle: 'b', targetHandle: 'b', type: "smoothstep" },
  {
    id: "e3-4a",
    source: "3",
    target: "4",
    targetHandle: 'a',
    type: "smoothstep",
  },
  {
    id: "e4b-5",
    source: "4",
    target: "5",
    sourceHandle: 'b',
    type: "smoothstep",
  },
  {
    id: "e4a-6",
    source: "4",
    target: "6",
    sourceHandle: 'a',
    type: "smoothstep",
  },
  {
    id: "e7-8",
    source: "7",
    target: "8",
    type: "smoothstep",
  },
  {
    id: "e8b-9",
    source: "8",
    target: "9",
    sourceHandle: "b",
    type: "smoothstep",
  },
  {
    id: "e8c-10",
    source: "8",
    target: "10",
    sourceHandle: "c",
    type: "smoothstep",
  },
  {
    id: "e8a-11",
    source: "8",
    target: "11",
    sourceHandle: "a",
    type: "smoothstep",
  },
  {
    id: "e11-12",
    source: "11",
    target: "12",
    type: "smoothstep",
  },
  {
    id: "e12a-13",
    source: "12",
    target: "13",
    sourceHandle: "a",
    type: "smoothstep",
  },
  {
    id: "e12b-14a",
    source: "12",
    target: "14",
    sourceHandle: "b",
    type: "smoothstep",
  },
  {
    id: "e9a-14b",
    source: "9",
    target: "14",
    type: "smoothstep",
    sourceHandle: "a",
    targetHandle: "b",
  },
  {
    id: "e10a-14c",
    source: "10",
    target: "14",
    type: "smoothstep",
    targetHandle: "c",
    sourceHandle: "a",
  },
  {
    id: "e14b-15",
    source: "14",
    target: "15",
    sourceHandle: "b",
    type: "smoothstep",
  },
  {
    id: "e13b-16a",
    source: "13",
    target: "16",
    type: "smoothstep",
    targetHandle: "a",
    sourceHandle: "b",
  },
  {
    id: "e9b-16b",
    source: "9",
    target: "16",
    type: "smoothstep",
    sourceHandle: "b",
    targetHandle: "b",
  },
  {
    id: "e17a-18",
    source: "17",
    target: "18",
    sourceHandle: "a",
    type: "smoothstep",
  },
  {
    id: "e18-19",
    source: "18",
    target: "19",
    type: "smoothstep",
  },
  {
    id: "e19a-20",
    source: "19",
    target: "20",
    sourceHandle: "a",
    type: "smoothstep",
  },
  {
    id: "e17c-22a",
    source: "17",
    target: "22",
    sourceHandle: "c",
    targetHandle: "a",
    type: "smoothstep",
  },
  {
    id: "e21-22b",
    source: "21",
    target: "22",
    targetHandle: "b",
    type: "smoothstep",
  },
  {
    id: "e17b-24a",
    source: "17",
    target: "24",
    sourceHandle: "b",
    targetHandle: "a",
    type: "smoothstep",
  },
  {
    id: "e23a-24b",
    source: "23",
    target: "24",
    sourceHandle: "a",
    targetHandle: "b",
    type: "smoothstep",
  },
  {
    id: "e23b-25",
    source: "23",
    target: "25",
    sourceHandle: "b",
    type: "smoothstep",
  },
  {
    id: "e24-26b",
    source: "24",
    target: "26",
    targetHandle: "b",
    type: "smoothstep",
  },
  {
    id: "e10b-26a",
    source: "10",
    target: "26",
    sourceHandle: "b",
    targetHandle: "a",
    type: "smoothstep",
  },
  {
    id: "e22-27",
    source: "22",
    target: "27",
    type: "smoothstep",
  },
  {
    id: "e26a-28c",
    source: "26",
    target: "28",
    sourceHandle: "a",
    targetHandle: "c",
    type: "smoothstep",
  },
  {
    id: "e19b-28b",
    source: "19",
    target: "28",
    sourceHandle: "b",
    targetHandle: "b",
    type: "smoothstep",
  },
  {
    id: "e10c-28a",
    source: "10",
    target: "28",
    sourceHandle: "c",
    targetHandle: "a",
    type: "smoothstep",
  },
  {
    id: "e26b-29",
    source: "26",
    target: "29",
    sourceHandle: "b",
    type: "smoothstep",
  },
  {
    id: "e27d-30",
    source: "27",
    target: "30",
    sourceHandle: "d",
    type: "smoothstep",
  },
  {
    id: "e9c-31a",
    source: "9",
    target: "31",
    sourceHandle: "c",
    targetHandle: "a",
    type: "smoothstep",
  },
  {
    id: "e27c-31b",
    source: "27",
    target: "31",
    sourceHandle: "c",
    targetHandle: "b",
    type: "smoothstep",
  },
  {
    id: "e27a-32b",
    source: "27",
    target: "32",
    sourceHandle: "a",
    targetHandle: "b",
    type: "smoothstep",
  },
  {
    id: "e5-32a",
    source: "5",
    target: "32",
    targetHandle: "a",
    type: "smoothstep",
  },
  {
    id: "e28b-33a",
    source: "28",
    target: "33",
    sourceHandle: "b",
    targetHandle: "a",
    type: "smoothstep",
  },
  {
    id: "e25b-33b",
    source: "25",
    target: "33",
    sourceHandle: "b",
    targetHandle: "b",
    type: "smoothstep",
  },
  {
    id: "e25a-34a",
    source: "25",
    target: "34",
    targetHandle: "a",
    sourceHandle: "a",
    type: "smoothstep",
  },
  {
    id: "e28a-34b",
    source: "28",
    target: "34",
    sourceHandle: "a",
    targetHandle: "b",
    type: "smoothstep",
  },
  {
    id: "e34-35",
    source: "34",
    target: "35",
    type: "smoothstep",
  },
  {
    id: "e28c-36",
    source: "28",
    target: "36",
    sourceHandle: "c",
    type: "smoothstep",
  },
  {
    id: "e31-37a",
    source: "31",
    target: "37",
    targetHandle: "a",
    type: "smoothstep",
  },
  {
    id: "e20-37b",
    source: "20",
    target: "37",
    targetHandle: "b",
    type: "smoothstep",
  },
  {
    id: "e29-37c",
    source: "29",
    target: "37",
    targetHandle: "c",
    type: "smoothstep",
  },
  {
    id: "e30-37d",
    source: "30",
    target: "37",
    targetHandle: "d",
    type: "smoothstep",
  },
  {
    id: "e27b-40",
    source: "27",
    target: "40",
    sourceHandle: "b",
    type: "smoothstep",
  },
  {
    id: "e13a-43a",
    source: "13",
    target: "43",
    sourceHandle: "a",
    targetHandle: "a",
    type: "smoothstep",
  },
  {
    id: "e14a-43b",
    source: "14",
    target: "43",
    sourceHandle: "a",
    targetHandle: "b",
    type: "smoothstep",
  },
  {
    id: "e26c-43c",
    source: "26",
    target: "43",
    sourceHandle: "c",
    targetHandle: "c",
    type: "smoothstep",
  },
  {
    id: "e35-44a",
    source: "35",
    target: "44",
    targetHandle: "a",
    type: "smoothstep",
  },
  {
    id: "e33-44b",
    source: "33",
    target: "44",
    targetHandle: "b",
    type: "smoothstep",
  },
  {
    id: "e28d-44c",
    source: "28",
    target: "44",
    sourceHandle: "d",
    targetHandle: "c",
    type: "smoothstep",
  },
  {
    id: "e41-46",
    source: "41",
    target: "46",
    type: "smoothstep",
  },
  {
    id: "e36-47a",
    source: "36",
    target: "47",
    targetHandle: "a",
    type: "smoothstep",
  },
  {
    id: "e37-47b",
    source: "37",
    target: "47",
    targetHandle: "b",
    type: "smoothstep",
  },
  {
    id: "e53-54",
    source: "53",
    target: "54",
    type: "smoothstep",
  },
];

export default initialElements;
