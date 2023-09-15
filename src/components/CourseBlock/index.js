import { useCallback, useState } from "react";
import ReactFlow, {
  addEdge,
  applyEdgeChanges,
  applyNodeChanges,
  Background,
} from "reactflow";
import "reactflow/dist/style.css";

import initialNodes from "./nodes.js";
import initialEdges from "./edges.js";

const rfStyle = {
  backgroundColor: "#D0C0F7",
};
const EdgeMarker = {
  type: "arrow",
  color: "#000",
  orient: "auto",
  strokeWidth: 1,
};

function CourseBlock() {
  const [nodes, setNodes] = useState(initialNodes);
  const [edges, setEdges] = useState(initialEdges);

  const onNodesChange = useCallback(
    (changes) => setNodes((nds) => applyNodeChanges(changes, nds)),
    [setNodes]
  );
  const onEdgesChange = useCallback(
    (changes) => setEdges((eds) => applyEdgeChanges(changes, eds)),
    [setEdges]
  );
  const onConnect = useCallback(
    (connection) => setEdges((eds) => addEdge(connection, eds)),
    [setEdges]
  );

  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        // onNodesChange={onNodesChange}
        // onEdgesChange={onEdgesChange}
        // onConnect={onConnect}
        // fitView
        // style={rfStyle}
        // attributionPosition="top-right"
      ></ReactFlow>
    </div>
  );
}

export default CourseBlock;
