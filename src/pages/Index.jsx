import React from 'react';
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Container } from "../components/atoms/Container";

const Body = styled.main`
    width: 100%;
    background: var(--softBlack);
    font-size: var(--p1);
`;


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
    <Body>
      <Container>
        {
          careers.map(c =>
            <Link to={'/carrera' + c.path} key= {c.path}> {c.name} </Link>
          )
        }
      </Container>
    </Body>
  );
};