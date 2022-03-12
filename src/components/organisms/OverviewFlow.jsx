import React, { useState } from "react";

import ReactFlow, { MiniMap, Controls, Background } from "react-flow-renderer";

import MultipleConnectionNode from "../atoms/multipleConnectionNode/MultipleConnectionNode";
import { SmartEdge } from '@tisoap/react-flow-smart-edge';
import nodesByCareer from "../atoms/materias";

// const nodeTypes = {
//   multipleNode: MultipleConnectionNode
// };

const onLoad = (reactFlowInstance) => {
  console.log("flow loaded:", reactFlowInstance);
  reactFlowInstance.fitView();
};

const OverviewFlow = (props) => {
  return (
    <div className="pb-10">

    <div className="my-2 container flex justify-center items-center mx-auto border-gray-200 shadow-xl drop-shadow-xl border-2 rounded-3xl  overflow-clip">
      <ReactFlow
        elements={nodesByCareer[props.career]}
        onLoad={onLoad}
        style={{ height: "100vh" }}
        className="max-h-[36rem]"
        edgeTypes={{
          smart: SmartEdge,
        }}
        nodesConnectable={false}
        nodesDraggable={false}
        // nodeTypes={nodeTypes}
      >

        <Background variant="lines"  gap={200}/>
        <Controls />
      </ReactFlow>
    </div>
    </div>
  );
};

export default OverviewFlow;
