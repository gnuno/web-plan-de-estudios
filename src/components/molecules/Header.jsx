import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Container } from "../atoms/Container";

const Head = styled.header`
  width: 100%;
  height: 58px;
  font-weight: bold;
  background: var(--red);
  font-size: var(--h1);
  display: flex;
  align-items: center;
`;

export default function Header() {
  return (
    <Head>
      <Container>
        <Link to="/">
          Plan de Estudio Interactivo
        </Link>
      </Container>
    </Head>
  );
}