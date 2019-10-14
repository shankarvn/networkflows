const fs = require('fs');

function generate() {
  const nodes = [];
  const links = [];
  for (let i = 0; i < 500; i++) {
    nodes.push({
      id: `VM ${i}`
    });
  }

  for (let i = 0; i < 500; i++) {
    const source = nodes[i].id;
    const target = nodes[Math.round(Math.sqrt(i))].id;
    links.push({
      source, target
    });
  }

  fs.writeFileSync('data.json', JSON.stringify({ nodes, links }, null, 2));

}

generate();