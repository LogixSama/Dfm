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
        // {
        //   id: 'br3',
        //   bridgeName: 'bridge',
        //   type: 'bridge',
        //   child: [
        //     {
        //       id: 'conn111',
        //       connectionName: 'connection-1',
        //       type: 'connection'
        //     },
        //     {
        //       id: 'conn222',
        //       connectionName: 'connection-1',
        //       type: 'connection'
        //     },
        //     {
        //       id: 'conn333',
        //       connectionName: 'connection-1',
        //       type: 'connection'
        //     }
        //   ]
        // }
      ]
    },
    // {
    //   id: 'sys2',
    //   systemName: 'systemd',
    //   type: 'container',
    //   child: [
    //     {
    //       id: 'br2',
    //       bridgeName: 'bridge',
    //       type: 'bridge',
    //       child: [
    //         {
    //           id: 'conn11',
    //           connectionName: 'connection-1',
    //           type: 'connection'
    //         },
    //         {
    //           id: 'conn22',
    //           connectionName: 'connection-1',
    //           type: 'connection'
    //         },
    //         {
    //           id: 'conn33',
    //           connectionName: 'connection-1',
    //           type: 'connection'
    //         }
    //       ]
    //     }
    //   ]
    // },
    // {
    //   id: 'sys3',
    //   systemName: 'systemd',
    //   type: 'container',
    //   child: [
    //     {
    //       id: 'br3',
    //       bridgeName: 'bridge',
    //       type: 'bridge',
    //       child: [
    //         {
    //           id: 'conn111',
    //           connectionName: 'connection-1',
    //           type: 'connection'
    //         },
    //         {
    //           id: 'conn222',
    //           connectionName: 'connection-1',
    //           type: 'connection'
    //         },
    //         {
    //           id: 'conn333',
    //           connectionName: 'connection-1',
    //           type: 'connection'
    //         }
    //       ]
    //     }
    //   ]
    // }
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
        {
          id: 'vi2',
          connectionName: 'eth1',
          type: 'connection'
        },
        {
          id: 'vi3',
          connectionName: 'eth2',
          type: 'connection'
        }
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
        {
          id: 'vi333',
          connectionName: 'eth2',
          type: 'connection'
        }
      ]
    }

  ]


const nodes = [];
let bridgeHeight;


const containerNode = (containerConfig) => {
  for (let [j, container] of containerConfig.entries()) {
    console.log(container)
    for (let [i, containerChild] of (container.child).entries()) {
      console.log('shreyan')
      nodes.push(
        {
          id: containerChild.id,
          type: 'connectionNode',
          name: containerChild.connectionName,
          position: { x: 350, y: (i + 1) * 65 },
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
    }
    nodes.push(
      {
        id: container.id,
        type: 'selectorNode',
        name: container.containerName,
        position: { x: 0, y: (systemdSize + (j + 1) * (container.child.length * 120)) },
        data: {
          style: {
            width: 800,
            height: (container.child.length * 100),
            border: '1px solid red'
          }
        }
      }
    )
  }
}

let systemdSize;
const systemd = (config) => {
  for (let [k, container] of (config.nodes).entries()) {
    for (let [j, bridge] of (container.child).entries()) {
      console.log(bridge)
      for (let [i, connection] of (bridge.child).entries()) {
        nodes.push(
          {
            id: connection.id,
            type: 'connectionNode',
            name: connection.connectionName,
            position: { x: 150, y: (i + 1) * 65 },
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
    systemdSize = bridgeHeight * container.child.length * 1.5 + 300
  }
}

systemd(config)
containerNode(containerConfig)

console.log(nodes)

export default nodes;