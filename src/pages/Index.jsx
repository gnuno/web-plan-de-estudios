import React from 'react';
import { useHistory } from 'react-router-dom';
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Container } from "../components/atoms/Container";
import { resumenDeCarreraEducacionFisica } from '../info_de_carreras/lic_en_educacion_fisica';
import { resumenDeCarreraInformatica } from '../info_de_carreras/lic_en_informatica';

const Body = styled.main`
    width: 100%;
    background: var(--softBlack);
    font-size: var(--p1);
`;

const careers = [
  resumenDeCarreraInformatica,
  resumenDeCarreraEducacionFisica,
  { disabled: true, name: "Licenciatura en Administración de Recursos Humanos", path: "/rrhh", duration: "5 años", image: "https://i.imgur.com/urwwJNv.jpeg", tituloIntermedio: "Tecnicatura Universitaria en Administración de Recursos Humanos", yearOfTituloIntermedio: "3 años" },
  { disabled: true, name: "Licenciatura en Administración", path: "/admin", duration: "4 años", image: "https://i.imgur.com/bbtHEnR.jpeg", tituloIntermedio: "Tecnicatura en Administración", yearOfTituloIntermedio: "3 años" },
  { disabled: true, name: "Ingeniería Química", path: "/quimica", duration: "5 años", image: "https://i.imgur.com/zLPdPGt.jpeg", tituloIntermedio: "Certificación Diplomado en Ciencias Básicas", yearOfTituloIntermedio: "2 años" },
  { disabled: true, name: "Licenciatura en Administración Pública", path: "/admin_publica", duration: "5 años", image: "https://i.imgur.com/ZJDLbJt.jpeg", tituloIntermedio: "Tecnicatura en Administración Pública", yearOfTituloIntermedio: "3 años" },
  { disabled: true, name: "Licenciatura en Matemática", path: "/matematica", duration: "2 años", image: "https://i.imgur.com/Gcd0rWI.jpeg" },
  { disabled: true, name: "Licenciatura en Economía", path: "/economia", duration: "4 años", image: "https://i.imgur.com/9gIWOpP.jpeg", tituloIntermedio: "Tecnicatura Universitaria en Asuntos Económicos", yearOfTituloIntermedio: "3 años" },
  { disabled: true, name: "Licenciatura en Gestión Educativa", path: "/gestion_educativa", duration: "2 años", image: "https://i.imgur.com/pzZQOrx.jpeg" },
  { disabled: true, name: "Licenciatura en Enfermería", path: "/enf", duration: "5 años", image: "https://i.imgur.com/Q4Z0dRw.jpeg", tituloIntermedio: "Enfermería", yearOfTituloIntermedio: "3 años" },
  { disabled: true, name: "Odontología", path: "/odontologia", duration: "5 años", image: "https://i.imgur.com/V4KoiWE.jpeg" },
  { disabled: true, name: "Maestría en Gestión Integral de Residuos Sólidos Urbanos", path: "/gestion_integral_residuos", duration: "2 años", image: "https://i.imgur.com/SBcdUp0.jpeg" },
]
export default function Index() {
  const [careersToShow, setCareersToShow] = React.useState(careers);
  // const careers = [
  //   { name: "Informatica", path: "/info" },
  //   { name: "Enfermeria", path: "/enf" },
  //   { name: "Administracion", path: "/admin" },
  //   { name: "Administracion Publica", path: "/adminpublica" },
  //   { name: "Quimica", path: "/quimica" },
  //   { name: "Economia", path: "/economia" },
  //   { name: "Recursos Humanos", path: "/rrhh" }
  // ]


  return (<>
    <div className="hero min-h-screen" style={{ backgroundImage: "url(https://media.infocielo.com/p/1e62986c96574ba07cf964374b0517a3/adjuntos/299/imagenes/001/324/0001324423/1200x900/smart/186334631_5484897501581638_1528356223788102322_njpg.jpg)" }}>
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content flex-col">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">Plan de Estudios Interactivo</h1>
          <p className="mb-5">Bienvenides al Plan de Estudios Interactivo de la Universidad Nacional del Oeste.</p>
        </div>
        <svg className="animate-bounce" width="60" fill="white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M192 384c-8.188 0-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L192 306.8l137.4-137.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-160 160C208.4 380.9 200.2 384 192 384z"/></svg>
      </div>
      <div className='w-full h-full relative'>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" class="fill-white dark:fill-base-100 bg-transparent  absolute -bottom-1"><path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" className="shape-fill"></path></svg>
      </div>
    </div>
    <div className="w-full pb-10">
      <div className="container mx-auto justify-center flex">
        <div className="block">
        <label class="label" htmlFor='career-filter'>
          <span class="label-text font-semibold">Filtrar carreras</span>
        </label>
        <div class="form-control outline-none">
          <div class="input-group outline-none">

            <input type="text" placeholder="Nombre de la carrera..." class="input input-bordered focus:outline-none" id='career-filter' onChange={(e) => {
              const value = e.target.value.toLowerCase();
              const filteredCareers = careers.filter(career => career.name.toLowerCase().includes(value) || career.tituloIntermedio?.toLowerCase().includes(value));
              setCareersToShow(filteredCareers);
            }} />
            <button class="btn btn-square">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
            </button>
          </div>
        </div></div>
      </div>
      <div className="flex overflow-x-scroll md:overflow-auto mx-auto">
        <div className="snap-x snap-mandatory grid grid-flow-col pb-8 mt-3 gap-5 mx-auto first:ml-16 last:mr-16">
          {careersToShow.map(CardDeCarreras())}


        </div>
      </div>
    </div>
  </>
  )

  return (
    <Body>
      <Container>
        {
          careers.map(c =>
            <Link to={'/carrera' + c.path} key={c.path}> {c.name} </Link>
          )
        }
      </Container>
    </Body>
  );

  function CardDeCarreras() {
    return career => (
      <div className="card w-96 max-w-[18rem] md:max-w-3xl  shadow-xl scroll-mx-32 snap-start bg-base-100 dark:bg-slate-600 ">
        <figure><img src={career.image} alt={career.name} /></figure>
        <div className="card-body text-gray-900 dark:text-slate-100 justify-between">
          <h2 className="card-title">{career.name}</h2>

          <div className="stat p-2">
            <div className="stat-title">Duración de la carrera</div>
            <div className="stat-value text-primary">{career.duration}</div>
          </div>

          {career.tituloIntermedio && (
            <div className="stat p-2">
              <div className="stat-title whitespace-pre-wrap">{career.tituloIntermedio}</div>
              <div className="stat-value text-secondary">{career.yearOfTituloIntermedio}</div>
              <div className="stat-desc">Titulo intermedio</div>
            </div>
          )}

          <div className="card-actions justify-center">
            {career.disabled ? (
              <button className="btn btn-disabled">Plan de estudios!</button>
            ) : (<><Link to={{
              pathname: '/carrera' + career.path,
              state: {
                career: career
              }
            }} key={career.path}>
              <button className="btn btn-primary">Plan de estudios!</button>
            </Link></>)}
          </div>
        </div>
      </div>
    );
  }
};