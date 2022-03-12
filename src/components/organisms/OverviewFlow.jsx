import React, { useState } from "react";

import ReactFlow, { MiniMap, Controls, Background } from "react-flow-renderer";

import initialElements from "../atoms/initialElements/initial-elements";
import MultipleConnectionNode from "../atoms/multipleConnectionNode/MultipleConnectionNode";

const nodeTypes = {
  multipleNode: MultipleConnectionNode,
};

const onLoad = (reactFlowInstance) => {
  console.log("flow loaded:", reactFlowInstance);
  reactFlowInstance.fitView();
};

const OverviewFlow = () => {
  const [elements] = useState(initialElements);

  return (
    <ReactFlow
      elements={elements}
      onLoad={onLoad}
      style={{ height: "90vh" }}
      nodesConnectable={false}
      nodesDraggable={true}
      nodeTypes={nodeTypes}
    >
      <MiniMap

        nodeStrokeColor={(n) => {
          if (n.style?.background) return n.style.background;
          if (n.type === "input") return "#0041d0";
          if (n.type === "output") return "#ff0072";
          if (n.type === "default") return "#1a192b";

          return "#eee";
        }}
        nodeColor={(n) => {
          if (n.style?.background) return n.style.background;

          return "#fff";
        }}
        nodeBorderRadius={2}
      />
      <Background variant="lines" color="var(--red)" gap={200}/>
      <Controls />
    </ReactFlow>
  );
};

export default OverviewFlow;
