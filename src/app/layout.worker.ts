import { forceCollide, forceLink, forceManyBody, forceSimulation, forceX, forceY } from 'd3-force';
import { Subject } from 'rxjs';

import { RegisterWorker } from './worker-utils/register-worker';
import { GraphData, GraphNode } from './dto/dto';

const register = new RegisterWorker();

register.handleMessages((graphData: GraphData) => {
  const subject = new Subject<GraphData>();
  calculateLayout(subject, graphData);
  return subject.asObservable();
});


function calculateLayout(subject: Subject<GraphData>, graphData: GraphData) {
  setTimeout(() => {
    const simulation = forceSimulation(graphData.nodes)
      .force('link', forceLink(graphData.links).id((d: GraphNode) => d.id.toString()).distance(0).strength(1))
      .force('charge', forceManyBody().strength(-40))
      .force('x', forceX())
      .force('y', forceY())
      .force('collide', forceCollide().radius((d: GraphNode) => d.r + 3));

    const count = Math.ceil(Math.log(simulation.alphaMin()) / Math.log(1 - simulation.alphaDecay()));
    for (let i = 0, n = count; i < n; ++i) {
      subject.next({ nodes: [], links: [], progress: Math.round((i / n) * 100) });
      simulation.tick();
    }

    graphData.progress = 100;
    subject.next(graphData);

    console.log(graphData);
    subject.complete();
  });
}

