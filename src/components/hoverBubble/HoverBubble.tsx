import * as d3 from "d3";
import { SimulationNodeDatum } from "d3";
import { SyntheticEvent, useEffect, useMemo, useRef } from "react";
import "./HoverBubble.scss";

interface ForceNode {
  id: number;
  r: number;
  group: string;
  fx?: number;
  fy?: number;
  x?: number;
  y?: number;
}

// const tableauColors = d3.scaleOrdinal(d3.range(numNodes), ['transparent'].concat(d3.schemeTableau10));
const gradient = d3.interpolateCool;
const PAGE_PADDING_X = 20 * 2;
let setDpr: boolean;

// Ported from: https://observablehq.com/@d3/collision-detection/2
export default function HoverBubble({ showDots }: { showDots: boolean }) {
  const isSmallerScreen = window.innerWidth < 500;

  const width = isSmallerScreen ? (window.innerWidth - PAGE_PADDING_X) * 2 : 1000;

  const height = width;
  const radius = isSmallerScreen ? 3 : 4;
  const forceHat = isSmallerScreen ? 0.001 : 0.00075;
  const numNodes = isSmallerScreen ? 150 : 200;
  const ref = useRef(null);
  console.log(width);
  const nodes = useMemo(
    (): ForceNode[] =>
      d3.range(numNodes).map((n: number) => ({
        id: n,
        r: Math.ceil(Math.random() * radius) + 6,
        // group: n && n % numNodes + 1,
        group: (n && gradient((n % numNodes) / numNodes)) || "",
      })),
    []
  );

  useEffect((): any => {
    if (ref.current) {
      //https://observablehq.com/@d3/collision-detection/2
      // Shout out MBostock
      const canvas = ref.current as HTMLCanvasElement;
      const ctx = canvas.getContext("2d");
      const rect = canvas.getBoundingClientRect();

      const dpr = window.devicePixelRatio;

      // Set the "actual" size of the canvas
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;

      // Scale the context to ensure correct drawing operations
      ctx?.scale(dpr, dpr);

      // Set the "drawn" size of the canvas
      canvas.style.width = `${rect.width}px`;
      canvas.style.height = `${rect.height}px`;
      const pointed = (event: SyntheticEvent) => {
        let [x, y] = d3.pointer(event);

        if (x < width / 4) {
          x = x * -1;
        }

        if (y < height / 4) {
          y = y * -1;
        }
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
            ctx.moveTo((d.x || 100) + d.r, d.y || 0);
            ctx.arc(d.x || 100, d.y || 0, d.r, 0, 2 * Math.PI);
            ctx.fillStyle = d.id ? d.group : "transparent";
            ctx.globalAlpha = 0.9;
            ctx.fill();
          }
          ctx.globalCompositeOperation = "lighter";

          ctx.restore();
        }
      };

      const simulation = d3
        .forceSimulation<ForceNode>(nodes)
        .alphaTarget(0.1) // stay hot
        .velocityDecay(0.025) // low friction
        .force("x", d3.forceX().strength(forceHat))
        .force("y", d3.forceY().strength(forceHat))
        .force(
          "collide",
          d3
            .forceCollide()
            .radius((d: any) => d.r + 1)
            .iterations(3)
        )
        // .force('charge', d3.forceManyBody().strength((d, i) => i ? 0 : -width * 9 / 10))
        .force(
          "charge",
          d3.forceManyBody().strength((d: any, i) => (i ? 0 : d.r))
        )
        .on("tick", ticked);

      if (ctx) {
        d3.select(ctx.canvas)
          .on("touchmove", (event: SyntheticEvent) => event.preventDefault())
          .on("pointermove", pointed);
      }
      console.log('sizing');
      return () => simulation.stop();
    }
  }, [ref, window.innerWidth, showDots]);

  return (
    <section
      className="hover-bubble-container"
      style={{ width: width / 2, height: height / 2 }}
    >
      {
        showDots &&
        <canvas
          className="hover-bubble"
          height={height}
          width={width}
          ref={ref}
        />
      }
    </section>
  );
}
