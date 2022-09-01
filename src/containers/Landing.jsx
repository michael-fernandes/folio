import * as d3 from 'd3';
import { useEffect,  useMemo,  useRef,  useState } from 'react';

// create nodes with unique ids
// radius: 5px


  
const width = 500;
const height = 500;

export default function Landing({ }) {
  const [animatedNodes, setAnimatedNodes] = useState([]);
  const pointerRef = useRef(null);

  const nodes = useMemo(() => d3.range(50).map((n) => ({ id: n, r: 5 })), []);
  const specialNode = useMemo(() => ({ r: 5, id: 'move', color: 'orange', fx: 0, fy: 0 }), []);

  // re-create animation every time nodes change
  useEffect(() => {
    const simulation = d3
      .forceSimulation()
      .force('x', d3.forceX().strength(0.001).x(width / 2))
      .force('y', d3.forceY().strength(0.001).y(height / 2))
      .force('center', d3.forceCenter().x(width / 2).y(height / 2).strength(0.001))
      .force('collision', d3.forceCollide(8).strength(0.5));
      
    simulation.on('tick', () => {
      setAnimatedNodes([...simulation.nodes()]);
    });

    // copy nodes into simulation
    simulation.alphaDecay(0.0).nodes([specialNode, ...nodes]);
    // slow down with a small alpha
    simulation.restart();

    // stop simulation on unmount
    return () => simulation.stop();
  }, [nodes]);

  const onMouseMove = ({ pageX, pageY, currentTarget }) => {
    let { left, top } = currentTarget.getBoundingClientRect();

    specialNode.fx =  pageX - left;
    specialNode.fy =  pageY - top;
  };

  return (
    <svg 
      height={width} 
      width={height} 
      onMouseEnter={() => console.log('hover')}
      onMouseMove={onMouseMove}
      style={{
        border: '1px solid grey',
      }}
      >
      <g>
        {animatedNodes.map((node, index) => index !== 0 ? (
          <circle
            cx={node.x}
            cy={node.y}
            r={node.r}
            fill={node.color}
            key={node.id}
            stroke="black"
            // fill="transparent"
          />
        ) : <circle key={node.id} r="20" stroke="orange"fill={node.color} ref={pointerRef} /> )}
      </g>
    </svg>
  );
}