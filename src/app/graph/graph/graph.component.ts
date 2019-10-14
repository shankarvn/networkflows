import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GraphData, GraphNode, GraphLink } from '#sourceRoot/app/dto/dto';
import { RxifyWorker } from '#sourceRoot/app/worker-utils/rxify-worker';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.scss']
})
export class GraphComponent implements OnInit {

  subscription: Subscription;
  progressValue = 0;

  width = 1200;
  height = 1200;

  @ViewChild('graph', { read: ElementRef, static: true })
  graphEl: ElementRef;


  constructor(private http: HttpClient) { }


  ngOnInit() {
    this.http.get('./assets/data.json').subscribe((data: any) => {
      console.log(data.nodes.length);
      this.calculateLayout(data);
    });
  }

  private calculateLayout(graphData: GraphData) {
    const rxify = new RxifyWorker(new Worker('./../../layout.worker', { type: 'module' }));
    this.subscription = rxify.sendMessage(graphData).subscribe((result: GraphData) => {
      this.progressValue = result.progress;
      if (result.progress === 100) {
        this.drawGraph(result);
      }
    });
  }

  private drawGraph(graphData: GraphData) {

    const context: CanvasRenderingContext2D = (this.graphEl.nativeElement as HTMLCanvasElement).getContext('2d');
    context.clearRect(0, 0, this.width, this.height);
    context.save();
    context.translate(this.width / 2, this.height / 2);
    context.scale(1, 1);
    context.beginPath();
    graphData.nodes.forEach((d: GraphNode) => {
      context.moveTo(d.x + d.r, d.y);
      context.arc(d.x, d.y, d.r, 0, 2 * Math.PI);
    });
    context.fillStyle = '#FF9C32';
    context.fill();
    context.strokeStyle = '#C25400';
    context.stroke();

    context.strokeStyle = '#DFA100';
    context.beginPath();
    graphData.links.forEach((d: GraphLink) => {
      const source: GraphNode = (d.source as GraphNode);
      const target: GraphNode = (d.target as GraphNode);
      context.moveTo(source.x, source.y);
      context.lineTo(target.x, target.y);
    });
    context.stroke();

    context.restore();

  }



}
