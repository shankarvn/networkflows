const fs = require('fs');

function generate() {
  const nodes = [];
  const connections = [];
  for (let i = 0; i < 1000; i++) {
    nodes.push({
      id: `VM ${i}`
    });
  }

  for (let i = 0; i < 1000; i++) {
    const source = nodes[i].id;
    const target = nodes[Math.round(Math.sqrt(i))].id;
    connections.push({
      source, target
    });
  }

  fs.writeFileSync('data.json', JSON.stringify({ nodes, connections }, null, 2));

}

generate();