const nodes = [
  {
    id: 'E',
    type: 'selectorNode',
    position: { x: 225, y: 225 },
    data: {
      name: 'Container',
      style: {
        width: 300,
        height: 200,
        border: '2px solid rgba(95, 95, 95, 0.411)',
        borderRadius: '10px'
      },
    },
  },
  {
    id: 'E-1',
    type: 'selectorNode',
    position: { x: 100, y: 50 },
    data: {
      name: 'Bridge',
      style: {
        width: 170,
        height: 140,
        border: '2px solid rgba(95, 95, 95, 0.411)',
        borderRadius: '10px'
      },
    },
    parentNode: 'E',
    extent: 'parent',
  },
  {
    id:'E-11',
    type: 'connectionNode',
    position: { x: 50, y: 50 },
    data: {
      name: 'connection-1',
      style: {
        width: 100,
        height: 20,
        border: '2px solid rgba(95, 95, 95, 0.411)',
        borderRadius: '10px',
        fontSize:'8px',
        display:'flex',
        justifyContent:'center',
        alignItems:'center'
      },
    },
    parentNode: 'E-1',
    extent: 'parent',
  },
  {
    id: 'F',
    type: 'selectorNode',
    position: { x: 225, y: 525 },
    data: {
      name: 'Container',
      style: {
        width: 300,
        height: 200,
        border: '2px solid rgba(95, 95, 95, 0.411)',
        borderRadius: '10px'
      },
    },
  },
  {
    id: 'F-1',
    type: 'selectorNode',
    position: { x: 100, y: 50 },
    data: {
      name: 'Bridge',
      style: {
        width: 170,
        height: 140,
        border: '2px solid rgba(95, 95, 95, 0.411)',
        borderRadius: '10px'
      },
    },
    parentNode: 'F',
    extent: 'parent',
  },
  {
    id:'F-11',
    type: 'connectionNode',
    position: { x: 50, y: 50 },
    data: {
      name: 'connection-2',
      style: {
        width: 100,
        height: 20,
        border: '2px solid rgba(95, 95, 95, 0.411)',
        borderRadius: '10px',
        fontSize:'8px',
        display:'flex',
        justifyContent:'center',
        alignItems:'center'
      },
    },
    parentNode: 'F-1',
    extent: 'parent',
  }
];

export default nodes;