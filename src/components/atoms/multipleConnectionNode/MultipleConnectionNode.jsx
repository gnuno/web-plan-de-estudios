import React, { memo } from "react";

import { Handle } from "react-flow-renderer";

export default memo(({ data }) => {
  return (
    <>
      {data.targets ? (
        data.targets.map(({ position = "left", id, style }) => (
          <Handle
            type="target"
            position={position}
            id={id}
            style={style}
            isConnectable={false}
          />
        ))
      ) : (
        <Handle type="target" position="left" isConnectable={false} />
      )}
      <div>{data.label}</div>
      {data.sources ? (
        data.sources.map(({ position = "right", id, style }) => (
          <Handle
            type="source"
            position={position}
            id={id}
            style={style}
            isConnectable={false}
          />
        ))
      ) : (
        <Handle type="source" position="right" isConnectable={false} />
      )}
    </>
  );
});
