import { SimulationNodeDatum, SimulationLinkDatum } from 'd3-force';

export interface GraphData {
  nodes: GraphNode[];
  links: GraphLink[];
  progress: number;
}

// tslint:disable-next-line: no-empty-interface
export interface GraphNode extends SimulationNodeDatum {
  id: string;
  r: number;
}

export interface GraphLink extends SimulationLinkDatum<GraphNode> {
}
