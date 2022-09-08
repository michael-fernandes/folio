import * as d3 from "d3";
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
// Easy way to add space
const gradient = d3.interpolateCool;

// Ported from: https://observablehq.com/@d3/collision-detection/2
export default function HoverBubble({ }) {
  const isSmallerScreen = window.innerWidth < 500;
  const width = isSmallerScreen ? 650 : 750;
  const height = width;
  const radius = isSmallerScreen ? 3 : 4;
  const forceHat = isSmallerScreen ? 0.001 : 0.0023;
  const numNodes = isSmallerScreen ? 150 : 200;

  const ref = useRef(null);

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

      const pointed = (event: SyntheticEvent) => {
        let [x, y] = d3.pointer(event);
        console.log("we made it", x, width / 4);

        if (x < width / 4) {
          console.log("we made it");
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
            ctx.moveTo((d.x || 0) + d.r, d.y || 0);
            ctx.arc(d.x || 0, d.y || 0, d.r, 0, 2 * Math.PI);
            ctx.fillStyle = d.id ? d.group : "transparent";
            ctx.fill();
          }
          ctx.globalCompositeOperation = "lighter";

          ctx.restore();
        }
      };

      const simulation = d3
        .forceSimulation<ForceNode>(nodes)
        .alphaTarget(0.2) // stay hot
        .velocityDecay(0.02) // low friction
        .force("x", d3.forceX().strength(forceHat))
        .force("y", d3.forceY().strength(forceHat))
        // Todo: fix typing
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

      return () => simulation.stop();
    }
  }, [ref]);

  return (
    <section
      className="hover-bubble-container"
      style={{ width: width / 2, height: height / 2 }}
    >
      <canvas
        className="hover-bubble"
        height={height}
        width={width}
        ref={ref}
      />
    </section>
  );
}
