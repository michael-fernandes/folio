import * as d3 from 'd3';
import { relative } from 'path';
import { SyntheticEvent, useEffect, useMemo, useRef } from 'react';

interface ForceNode {
  id: number,
  r: number,
  group: string,
  fx?: number,
  fy?: number,
  x?: number,
  y?: number,
}

const width = 1000;
const height = width;

const numNodes = 200;
const color = d3.scaleOrdinal(d3.range(numNodes), ['transparent'].concat(d3.schemeTableau10));

const radius = 6;
const gradient = d3.interpolateCool;

// Ported from: https://observablehq.com/@d3/collision-detection/2
export default function Landing({ }) {
  const ref = useRef(null);

  const nodes = useMemo((): ForceNode[] => d3.range(numNodes).map((n: number) => ({
    id: n,
    r: Math.ceil(radius * Math.random()) + 2,
    // group: n && n % numNodes + 1,
    group: n && gradient((n % numNodes) / numNodes) || '',
  })), []);



  useEffect((): any => {
    if (ref.current) {
      //https://observablehq.com/@d3/collision-detection/2
      // Shout out MBostock
      const canvas = ref.current as HTMLCanvasElement;
      const ctx = canvas.getContext('2d');

      const pointed = (event: SyntheticEvent) => {
        const [x, y] = d3.pointer(event);
        nodes[0].fx = x - width / 2;
        nodes[0].fy = y - height / 2;
      };

      const ticked = () => {
        if (ctx) {
          ctx.clearRect(0, 0, width * 2, height * 2);
          ctx.save();
          ctx.translate(width / 2, height / 2);
          for (let i = 0; i < nodes.length; i++) {
            const d = nodes[i];
            ctx.beginPath();
            ctx.moveTo((d.x || 0) + d.r, d.y || 0);
            ctx.arc(d.x || 0, d.y || 0, d.r, 0, 2 * Math.PI);
            ctx.fillStyle = d.id ? d.group : 'transparent';
            ctx.fill();
          }
          ctx.restore();
        }
      };

      const simulation = d3.forceSimulation<ForceNode>(nodes)
        .alphaTarget(0.2) // stay hot
        .velocityDecay(0.05) // low friction
        .force('x', d3.forceX().strength(0.0025))
        .force('y', d3.forceY().strength(0.0025))
        // Todo: fix typing
        .force('collide', d3.forceCollide().radius((d: any) => d.r + 1).iterations(3))
        // .force('charge', d3.forceManyBody().strength((d, i) => i ? 0 : -width * 9 / 10))
        .force('charge', d3.forceManyBody().strength((d, i) => i ? 0 : radius))
        .on('tick', ticked);

      if (ctx) {
        d3.select(ctx.canvas)
          .on('touchmove', (event: SyntheticEvent) => event.preventDefault())
          .on('pointermove', pointed);
      }

      return () => simulation.stop();
    }
  }, [ref]);

  return (
    <div style={{ maxWidth: width / 2, maxHeight: height / 2, margin: 'auto' }}>
      <canvas height={height} width={width} ref={ref} style={{
        position: 'relative',
        top: -height / 4,
        left: -width / 4,
        border: '1px solid grey',
      }} />
    </div>
  );
}