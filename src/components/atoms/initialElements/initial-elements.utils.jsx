import React from 'react'
import styled from "styled-components";

export const nodeStyles = (width = '175px') => {
  return {
    border: "1px solid var(--softBlack)",
    borderRadius: "8px",
    fontSize: "12px",
    backgroundColor: "var(--softWhite)",
    textAlign: 'center',
  }
}

const Node = styled.div`
  display: flex;
  justify-content: space-around;
  flex-direction: column;
`;

export const NodeLabel = ({ title, subtitle }) => {
  return (
    <Node className="bg-slate-50 text-slate-800 shadow-custom rounded max-h-[500px] p-2  max-w-lg w-32">
      <h4 style={{ margin: 0 }}>{title}</h4>
      {subtitle? <i>{subtitle}</i> : "" }
    </Node>
  )
}