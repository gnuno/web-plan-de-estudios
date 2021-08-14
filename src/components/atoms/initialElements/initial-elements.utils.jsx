import React from 'react'
import styled from "styled-components";

export const nodeStyles = (width = '175px') => {
  return {
    border: "1px solid var(--softBlack)",
    borderRadius: "8px",
    padding: '10px',
    fontSize: "12px",
    backgroundColor: "var(--softWhite)",
    width,
    textAlign: 'center',
  }
}

const Node = styled.div`
  height: 35px;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
`;

export const NodeLabel = ({ title, subtitle }) => {
  return (
    <Node>
      <h4 style={{ margin: 0 }}>{title}</h4>
      {subtitle? <i>{subtitle}</i> : "" }
    </Node>
  )
}