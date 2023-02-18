import * as d3 from "d3";
import { SyntheticEvent, useEffect, useMemo, useRef } from "react";
import { easings, useSpring, animated } from "react-spring";
import { LONG_ANIMATION, SHORT_ANIMATION } from "../../hooks/animations/useFadeInUpSpring";
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

// Ported from: https://observablehq.com/@d3/collision-detectiStrategy Insights and Planning Consultanton/2
export default function HoverBubble({ showDots }: { showDots: boolean }) {
  const isSmallerScreen = window.innerWidth < 500;

  const width = isSmallerScreen ? (window.innerWidth - PAGE_PADDING_X) * 2 : 1000;

  const height = width;
  const iterations = isSmallerScreen ? 1 : 3;
  const radius = isSmallerScreen ? 3 : 4;
  const forceHat = isSmallerScreen ? 0.001 : 0.00075;
  const numNodes = isSmallerScreen ? 125 : 200;
  const ref = useRef(null);

  const fadeIn = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    delay: LONG_ANIMATION + 50,
    config: { duration: SHORT_ANIMATION, easing: easings.easeInCubic, },
  })

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

      // adds force depending on position of mouse to center cordinate
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
            ctx.moveTo((d.x || 0) + d.r, d.y || 0);
            ctx.arc(d.x || 0, d.y || 0, d.r, 0, 2 * Math.PI);
            ctx.fillStyle = d.id ? d.group : "transparent";
            ctx.globalAlpha = 1;
            ctx.fill();
          }
          ctx.globalCompositeOperation = "lighter";

          ctx.restore();
        }
      };

      const simulation = d3
        .forceSimulation<ForceNode>(nodes)
        .alpha(0.3)
        .alphaDecay(0.001)
        .alphaTarget(0.15) // stay hot
        .velocityDecay(0.025) // low friction
        .force("x", d3.forceX().strength(forceHat))
        .force("y", d3.forceY().strength(forceHat))
        .force(
          "collide",
          d3
            .forceCollide()
            .radius((d: any) => d.r + 1)
            .iterations(iterations)
        )
        .force(
          "charge",
          d3.forceManyBody().strength((d: any, i) => (i ? 0 : d.r)) //  disable force for mouse dot
        )
        .on("tick", ticked);

      if (ctx) {
        d3.select(ctx.canvas)
          .on("touchmove", (event: SyntheticEvent) => event.preventDefault())
          .on("pointermove", pointed);
      }

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
        <animated.canvas
          style={fadeIn}
          className="hover-bubble"
          height={height}
          width={width}
          ref={ref}
        />
      }
    </section>
  );
}
