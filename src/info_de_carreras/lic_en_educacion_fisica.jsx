import { base, fullWidthNodeStyles, multiNodeBase } from "../components/atoms/initialElements/initial-elements";
import { NodeLabel } from "../components/atoms/initialElements/initial-elements.utils";

export const resumenDeCarreraEducacionFisica = { name: "Licenciatura en Educación Física", path: "/educacion_fisica", duration: "2 años", image: "https://i.imgur.com/UDpMHGP.jpeg" };

export const descripcionDeCarreraEduFisica = {
  shortDescription: "El egresado contará con competencias para gestionar la organización y/o planificación de los recursos que provengan de la educación física y del deporte y tendrá capacidad para analizar de manera crítica las necesidades y problemáticas propias de su campo específico.",
  longDescription: () => (<p className="py-2 ">
    Se brinda, capacitación y actualización profesional, impulsando la profundización de conocimientos que permitan adquirir las herramientas necesarias para afrontar las demandas laborales actuales. El egresado contará con competencias para gestionar la organización y/o planificación de los recursos que provengan de la educación física y del deporte y tendrá capacidad para analizar de manera crítica las necesidades y problemáticas propias de su campo específico.
    <br />
    <br />
    El egresado estará capacitado para desarrollar estrategias de gestión de índole administrativa, que le permita la planificación, organización y conducción de actividades físicas y deportivas. Asimismo podrá diseñar proyectos de intervención socio-comunitaria desde el ámbito de la educación física y el deporte con el fin de promover estilos de vida saludables.
  </p>)
}

const materiasDeEducacionFisica = [
    {
        id: "1",
        ...base,
        data: {
          label: (
            <NodeLabel title="Seminario de Universidad, Ciencia y Sociedad" />
          ),
        },
        position: { x: 0, y: 0 },
      },
      {
        id: "2",
        ...base,
        data: {
          label: (
            <NodeLabel title="Seminario de Problemática Regional" />
          ),
        },
        position: { x: 0, y: 100 },
      },
      {
        id: "3",
        ...base,
        data: {
          label: (
            <NodeLabel title="Seminario de Problemática Regional" />
          ),
        },
        position: { x: 0, y: 200 },
      },
      {
        id: "4",
        ...base,
        data: {
          label: (
            <NodeLabel title="Fisiología Clínica del Trabajo Físico" />
          ),
        },
        position: { x: 0, y: 300 },
      },
      {
        id: "5",
        ...base,
        data: {
          label: (
            <NodeLabel title="Política Educativa y Marco Legal de la Educación Física" />
          ),
        },
        position: { x: 0, y: 400 },
      },
      {
        id: "6",
        ...base,
        data: {
          label: (
            <NodeLabel title="Actividad Física y Salud" />
          ),
        },
        position: { x: 0, y: 500 },
      },
      {
        id: "7",
        ...base,
        data: {
          label: (
            <NodeLabel title="Nutrición y Energética de la Actividad Física y el Deporte" />
          ),
        },
        position: { x: 0, y: 600 },
      },{
        id: "8",
        ...base,
        data: {
          label: (
            <NodeLabel title="Electiva" />
          ),
        },
        position: { x: 0, y: 700 },
      },{
        id: "9",
        ...base,
        data: {
          label: (
            <NodeLabel title="Elaboración de Proyectos de Investigación en el Campo de la Educación Física" />
          ),
        },
        position: { x: 0, y: 750 },
      },{
        id: "10",
        ...base,
        data: {
          label: (
            <NodeLabel title="Evaluación de la Actividad Física y el Deporte" />
          ),
        },
        position: { x: 250, y: 0 },
      },{
        id: "11",
        ...base,
        data: {
          label: (
            <NodeLabel title="Diseño y Gestión de Políticas en el Campo de la Educación Física" />
          ),
        },
        position: { x: 250, y: 200 },
      },{
        id: "12",
        ...base,
        data: {
          label: (
            <NodeLabel title="Psicología de la Actividad Física" />
          ),
        },
        position: { x: 250, y: 300 },
      }
      ,{
        id: "13",
        ...base,
        data: {
          label: (
            <NodeLabel title="Metodología de la Investigación" />
          ),
        },
        position: { x: 250, y: 400 },
      }
      ,{
        id: "14",
        ...base,
        data: {
          label: (
            <NodeLabel title="Planificación y Estructuración del Entrenamiento" />
          ),
        },
        position: { x: 250, y: 500 },
      },{
        id: "15",
        ...base,
        data: {
          label: (
            <NodeLabel title="Biomecánica" />
          ),
        },
        position: { x: 250, y: 600 },
      },{
        id: "16",
        ...base,
        data: {
          label: (
            <NodeLabel title="Discapacidad e Integración en el Campo de la Educación Física" />
          ),
        },
        position: { x: 250, y: 700 },
      },{
        id: "17",
        ...base,
        data: {
          label: (
            <NodeLabel title="Seminario de Diseño del Trabajo Final de Educación Física" />
          ),
        },
        position: { x: 250, y: 800 },
      },{
        id: "18",
        ...base,
        data: {
          label: (
            <NodeLabel title="Trabajo Final Integrador" />
          ),
        },
        position: { x: 250, y: 900 },
      }
      
];

export default materiasDeEducacionFisica;
