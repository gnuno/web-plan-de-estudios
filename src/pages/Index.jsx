import React from 'react';
import { Link } from "react-router-dom";

export default function Index() {
  const careers = [
    { name: "Informatica", path: "/info" },
    { name: "Enfermeria", path: "/enf" },
    { name: "Administracion", path: "/admin" },
    { name: "Administracion Publica", path: "/adminpublica" },
    { name: "Quimica", path: "/quimica" },
    { name: "Economia", path: "/economia" },
    { name: "Recursos Humanos", path: "/rrhh" }
  ]

  return (
    careers.map(c =>
      <Link to={'/carrera' + c.path}> {c.name} </Link>
    )
  );
};