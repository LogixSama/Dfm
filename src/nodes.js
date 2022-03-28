let config = {
  nodes: [
    {
      id: 'sys1',
      systemName: 'systemd',
      type: 'container',
      child: [
        {
          id: 'br1',
          bridgeName: 'bridge',
          type: 'bridge',
          child: [
            {
              id: 'conn1',
              connectionName: 'connection-1',
              type: 'connection'
            },
            {
              id: 'conn2',
              connectionName: 'connection-1',
              type: 'connection'
            },
            {
              id: 'conn3',
              connectionName: 'connection-1',
              type: 'connection'
            }
          ]
        },
        {
          id: 'br2',
          bridgeName: 'bridge',
          type: 'bridge',
          child: [
            {
              id: 'conn11',
              connectionName: 'connection-1',
              type: 'connection'
            },
            {
              id: 'conn22',
              connectionName: 'connection-1',
              type: 'connection'
            },
            {
              id: 'conn33',
              connectionName: 'connection-1',
              type: 'connection'
            }
          ]
        },
      ]
    },
  ]
}

const containerConfig =
  [
    {
      id: 'container3',
      containerName: 'container3',
      type: 'container',
      child: [
        {
          id: 'vi1',
          connectionName: 'eth0',
          type: 'connection'
        },

      ]
    },
    {
      id: 'container4',
      containerName: 'container4',
      type: 'container',
      child: [
        {
          id: 'vi11',
          connectionName: 'eth0',
          type: 'connection'
        },
        {
          id: 'vi22',
          connectionName: 'eth1',
          type: 'connection'
        },
        {
          id: 'vi33',
          connectionName: 'eth2',
          type: 'connection'
        }
      ]
    },
    {
      id: 'container5',
      containerName: 'container5',
      type: 'container',
      child: [
        {
          id: 'vi111',
          connectionName: 'eth0',
          type: 'connection'
        },
        {
          id: 'vi222',
          connectionName: 'eth1',
          type: 'connection'
        },
      ]
    },
    {
      id: 'container6',
      containerName: 'container6',
      type: 'container',
      child: [
        {
          id: 'vi2222',
          connectionName: 'eth1',
          type: 'connection'
        },
        {
          id: 'vi2223',
          connectionName: 'eth1',
          type: 'connection'
        },
        {
          id: 'vi2224',
          connectionName: 'eth1',
          type: 'connection'
        },
        {
          id: 'vi2225',
          connectionName: 'eth1',
          type: 'connection'
        },
        {
          id: 'vi2226',
          connectionName: 'eth1',
          type: 'connection'
        }
      ]
    }

  ]


const nodes = [];
let bridgeHeight;
let lastContainerSize = 0;
const containerNode = (containerConfig) => {
  for (let [j, container] of containerConfig.entries()) {
    let lastConnectionSize = 0;
    for (let [i, containerChild] of (container.child).entries()) {
      nodes.push(
        {
          id: containerChild.id,
          type: 'connectionNode',
          name: containerChild.connectionName,
          position: { x: 400, y: lastConnectionSize + 35 },
          data: { 
            style: {
              width: 300,
              height: 30,
              border: '1px solid green'
            }
          },
          parentNode: container.id,
          extent: 'parent',
        }
      )
      lastConnectionSize += 100 
    }
    nodes.push(
      {
        id: container.id,
        type: 'selectorNode',
        name: container.containerName,
        position: { x: 0, y: lastContainerSize },
        data: {
          style: {
            width: 800,
            height: (container.child.length * 100),
            border: '1px solid red'
          }
        }
      }
    )
    lastContainerSize+= container.child.length * 100 + 20
    console.log(lastContainerSize,j)
  }
}

let systemdSize = 400;
const systemd = (config) => {
  for (let [k, container] of (config.nodes).entries()) {
    for (let [j, bridge] of (container.child).entries()) {
      console.log(bridge)
      let lastConnectionSize = 0;
      for (let [i, connection] of (bridge.child).entries()) {
        nodes.push(
          {
            id: connection.id,
            type: 'connectionNode',
            name: connection.connectionName,
            position: { x: 150, y: lastConnectionSize + 30 },
            data: {
              style: {
                width: 300,
                height: 30,
                border: '1px solid green'
              }
            },
            parentNode: bridge.id,
            extent: 'parent'
          }
        )
        lastConnectionSize += 100 
      }
      bridgeHeight = bridge.child.length * 100
      console.log(bridgeHeight)
      nodes.push(
        {
          id: bridge.id,
          type: 'selectorNode',
          name: bridge.bridgeName,
          position: { x: 100, y: ((j * bridgeHeight) + ((j+1)*100)) },
          data: {
            style: {
              width: 600,
              height: bridge.child.length * 100,
              border: '1px solid red'
            }
          },
          parentNode: container.id,
          extent: 'parent'
        }
      )
    }
    console.log(bridgeHeight * container.child.length * 1.5)
    nodes.push(
      {
        id: container.id,
        type: 'selectorNode',
        name: container.systemName,
        position: { x: 0, y: (k + 1) * 600 },
        data: {
          style: {
            width: 800,
            height: bridgeHeight * container.child.length * 1.5,
            border: '1px solid red'
          }
        }
      }
    )
    systemdSize = bridgeHeight * container.child.length * 1.5
  }
}

systemd(config)
containerNode(containerConfig)

console.log(nodes)

export default nodes;