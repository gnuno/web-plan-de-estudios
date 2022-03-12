import React from 'react';
import { useLocation } from 'react-router-dom';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { useModal } from '../components/helper/ModalContext';
import OverviewFlow from '../components/organisms/OverviewFlow';
import { descripcionDeCarreraEduFisica } from '../info_de_carreras/lic_en_educacion_fisica';
import { descripcionDeCarreraInformatica } from '../info_de_carreras/lic_en_informatica';


const descriptions = {
  "/info": descripcionDeCarreraInformatica,
  "/educacion_fisica": descripcionDeCarreraEduFisica
}

export default function Career() {
  const history = useHistory();
  const { state } = useLocation();
  const { modalText, setModalText } = useModal();

  if (!state || !state.career) history.push("/");
  /**
   * @type {{ name: string, image:string, path: string, duration: string, tituloIntermedio: string, yearOfTituloIntermedio:string }}
   */
  const career = state.career;
  return (
    <section className="">
      <div className="hero min-h-screen relative" style={{ backgroundImage: "url(https://media.infocielo.com/p/1e62986c96574ba07cf964374b0517a3/adjuntos/299/imagenes/001/324/0001324423/1200x900/smart/186334631_5484897501581638_1528356223788102322_njpg.jpg)" }}>
        <div className="hero-overlay bg-opacity-90"></div>
        <div className="hero-content text-neutral-content flex-col">
          <div className="flex flex-col lg:flex-row-reverse">
            <img src={career.image} className="md:max-w-sm rounded-lg shadow-2xl" />
            <div>
              <h1 className="text-5xl font-bold">{career.name}</h1>
              {career.tituloIntermedio && (
                <div className="flex items-center gap-2">
                  <p>Titulo intermedio:</p>
                  <h2 className="font-semibold">{career.tituloIntermedio}</h2>
                </div>
              )}
              <div className="flex items-center gap-2">
                <p>Duración de la carrera:</p>
                <span>{career.duration}</span>
              </div>
              <p className="py-6">{descriptions[career.path].shortDescription}</p>

              <label htmlFor="my-modal-4" className="btn modal-button bg-sky-200 text-slate-800" onClick={() => {
                setModalText({
                  career: career.name,
                  description: descriptions[career.path].longDescription
                })
              }}>Más Información</label>

            </div>
          </div>
          <svg className="animate-bounce z-0" width="60" fill="white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M192 384c-8.188 0-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L192 306.8l137.4-137.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-160 160C208.4 380.9 200.2 384 192 384z" /></svg>

        </div>
        
        <div className='w-full'>
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 120" preserveAspectRatio="none" className="fill-white bg-transparent  absolute dark:fill-base-100 -bottom-1"><path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" ></path></svg>
      </div>
      </div>
      
      <OverviewFlow career={career.path}/>
    </section>
  );
};