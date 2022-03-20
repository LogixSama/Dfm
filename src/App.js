import { useCallback, useState } from 'react';
import ReactFlow, {
  addEdge,
  applyEdgeChanges,
  applyNodeChanges,
} from 'react-flow-renderer';

import initialNodes from './nodes.js';
import initialEdges from './edges.js';

import CustomNode from './CustomNode.js';
import ConnectionNode from './ConnectionNode.js';

const rfStyle = {
  height:'100vh',
  width:'100vw'
};

const nodeTypes = {
  selectorNode: CustomNode,
  connectionNode: ConnectionNode,
};

function Flow() {
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
    <ReactFlow
      nodes={nodes}
      edges={edges}
      onNodesChange={onNodesChange}
      onEdgesChange={onEdgesChange}
      onConnect={onConnect}
      nodeTypes={nodeTypes}
      fitView
      style={rfStyle}
      attributionPosition="top-right"
    >
    </ReactFlow>
  );
}

export default Flow;