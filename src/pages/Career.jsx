import React from 'react';
import { useParams } from "react-router";
import OverviewFlow from '../components/organisms/OverviewFlow';

export default function Career() {
  const { name } = useParams();

  return (
    <>
      <h1> {name} </h1>
      <OverviewFlow />
    </>
  );
};