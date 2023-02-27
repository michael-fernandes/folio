import { useEffect, useRef } from 'react';
import './graph.scss';
import * as d3 from 'd3';

type Props = {
  color: boolean
}

export default function Graph({ color }: Props) {
  const uncertaintyRef = useRef<any>();

  useEffect(() => {
    if (uncertaintyRef.current && color) {
      d3.select(uncertaintyRef.current)
        .style('fill', 'rgb(146, 39, 144)')
        .style('opacity', 0.25)
        .style('stroke', 'rgb(146, 39, 144)')
        .style('stroke-width', '2px');
    }
  }, [color]);

  return (
    <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 884.14 564.05">
      <line className="cls-4" x1="56.41" y1="49.91" x2="56.41" y2="504.33" />
      <line className="cls-4" x1="891.04" y1="504.33" x2="56.41" y2="504.33" />
      <g>
        <line className="cls-8" x1="891.04" y1="458.89" x2="56.41" y2="458.89" />
        <line className="cls-8" x1="891.04" y1="413.45" x2="56.41" y2="413.45" />
        <line className="cls-8" x1="891.04" y1="368.01" x2="56.41" y2="368.01" />
        <line className="cls-8" x1="891.04" y1="322.56" x2="56.41" y2="322.56" />
        <line className="cls-8" x1="891.04" y1="277.12" x2="56.41" y2="277.12" />
        <line className="cls-8" x1="891.04" y1="231.68" x2="56.41" y2="231.68" />
        <line className="cls-8" x1="891.04" y1="186.23" x2="56.41" y2="186.23" />
        <line className="cls-8" x1="891.04" y1="140.79" x2="56.41" y2="140.79" />
        <line className="cls-8" x1="891.04" y1="95.35" x2="56.41" y2="95.35" />
        <line className="cls-8" x1="891.04" y1="49.91" x2="56.41" y2="49.91" />
      </g>
      <g>
        <line className="cls-8" x1="160.74" y1="504.47" x2="160.74" y2="49.91" />
        <line className="cls-8" x1="265.07" y1="504.47" x2="265.07" y2="49.91" />
        <line className="cls-8" x1="369.4" y1="504.47" x2="369.4" y2="49.91" />
        <line className="cls-8" x1="473.73" y1="504.47" x2="473.73" y2="49.91" />
        <line className="cls-8" x1="578.06" y1="504.47" x2="578.06" y2="49.91" />
        <line className="cls-8" x1="682.39" y1="504.47" x2="682.39" y2="49.91" />
        <line className="cls-8" x1="786.72" y1="504.47" x2="786.72" y2="49.91" />
        <line className="cls-8" x1="891.04" y1="504.47" x2="891.04" y2="49.91" />
      </g>
      <text className="cls-21" transform="translate(31.99 55.07) scale(.99 1)"><tspan x="0" y="0">2.0</tspan></text>
      <text className="cls-21" transform="translate(31.99 100.39) scale(.99 1)"><tspan x="0" y="0">1.8</tspan></text>
      <text className="cls-21" transform="translate(31.99 145.71) scale(.99 1)"><tspan x="0" y="0">1.6</tspan></text>
      <text className="cls-21" transform="translate(31.99 191.04) scale(.99 1)"><tspan x="0" y="0">1.4</tspan></text>
      <text className="cls-21" transform="translate(31.99 236.36) scale(.99 1)"><tspan x="0" y="0">1.2</tspan></text>
      <text className="cls-21" transform="translate(31.99 281.69) scale(.99 1)"><tspan x="0" y="0">1.0</tspan></text>
      <text className="cls-21" transform="translate(31.99 327.01) scale(.99 1)"><tspan x="0" y="0">0.8</tspan><tspan className="cls-24" x="17.26" y="0">	</tspan></text>
      <text className="cls-21" transform="translate(31.99 372.33) scale(.99 1)"><tspan x="0" y="0">0.6</tspan><tspan className="cls-24" x="17.26" y="0">	</tspan></text>
      <text className="cls-21" transform="translate(31.99 417.66) scale(.99 1)"><tspan x="0" y="0">0.4</tspan><tspan className="cls-24" x="17.26" y="0">	</tspan></text>
      <text className="cls-21" transform="translate(31.99 462.98) scale(.99 1)"><tspan x="0" y="0">0.2</tspan><tspan className="cls-24" x="17.26" y="0">	</tspan></text>
      <g>
        <text className="cls-19" transform="translate(124.18 524.82) scale(.87 1)"><tspan x="0" y="0">Apr ‘20</tspan></text>
        <text className="cls-19" transform="translate(232.29 525.11) scale(.87 1)"><tspan x="0" y="0">Jul ‘20</tspan></text>
        <text className="cls-19" transform="translate(329.76 524.82) scale(.87 1)"><tspan x="0" y="0">Oct ‘20</tspan></text>
        <text className="cls-19" transform="translate(439.45 524.82) scale(.87 1)"><tspan className="cls-16" x="0" y="0">J</tspan><tspan x="7.82" y="0">an ‘21</tspan></text>
        <text className="cls-19" transform="translate(541.63 524.82) scale(.87 1)"><tspan x="0" y="0">Apr ‘21</tspan></text>
        <text className="cls-19" transform="translate(648.89 524.82) scale(.87 1)"><tspan x="0" y="0">Jul ‘21</tspan></text>
        <text className="cls-19" transform="translate(751.61 524.82) scale(.87 1)"><tspan x="0" y="0">Oct ‘21</tspan></text>
        <text className="cls-19" transform="translate(851.36 524.82) scale(.87 1)"><tspan className="cls-16" x="0" y="0">J</tspan><tspan x="7.82" y="0">an ‘22</tspan></text>
      </g>
      <text className="cls-13" transform="translate(17.85 25.82) scale(.79 1)"><tspan x="0" y="0">Daily d</tspan><tspan className="cls-17" x="98.16" y="0">e</tspan><tspan className="cls-20" x="115.33" y="0">a</tspan><tspan x="131.66" y="0">ths</tspan></text>
      <path id="UNcertainty" ref={uncertaintyRef} className="cls-23" d="m698.88,331.66c13.87,27.94,35.22,18.31,42.61,22.41,10.93,6.08,18.77-.51,22.24-2.85,1.58-1.06-1.84.49,0,0,3.56-.96,2.44-37.44,15.78-46.29,19.35-12.83,42.06-157.96,45.15-189.85.33-3.4,1.46-6.67,3.31-9.54,6.98-10.86,28.45-48.18,33.24-48.7,25.6-2.78,29.28-3.86,29.28-3.86v186.44s-23.01-62.08-28.07-58.82-6.48,22.3-6.48,22.3c0,0-26.46,173.37-47.81,187.52-21.35,14.15-42.92,9.75-42.92,9.75,0,0-18.3-4.13-33.88-12.8-7.38-4.11-18.57-27.79-32.44-55.73" />
      <g>
        <line className="cls-5" x1="699.44" y1="49.91" x2="699.44" y2="50.91" />
        <line className="cls-2" x1="699.44" y1="52.9" x2="699.44" y2="502.34" />
        <line className="cls-5" x1="699.44" y1="503.33" x2="699.44" y2="504.33" />
      </g>
      <text className="cls-14" transform="translate(7.85 176.68) rotate(90)"><tspan className="cls-11" x="0" y="0">D</tspan><tspan className="cls-22" x="13.34" y="0">e</tspan><tspan className="cls-12" x="23.18" y="0">a</tspan><tspan className="cls-10" x="32.4" y="0">ts per 100k persons</tspan></text>
      <line className="cls-7" x1="326.9" y1="552.98" x2="352.9" y2="552.98" />
      <line className="cls-1" x1="470.17" y1="552.98" x2="496.17" y2="552.98" />
      <text className="cls-15" transform="translate(368.75 557.08)"><tspan x="0" y="0">Observed</tspan></text>
      <text className="cls-15" transform="translate(510.07 557.08)"><tspan className="cls-9" x="0" y="0">P</tspan><tspan className="cls-18" x="8.78" y="0">r</tspan><tspan x="14.29" y="0">ojection</tspan></text>
      <g>
        <path className="cls-3" d="m700.08,331.44c.37.75.75,1.5,1.12,2.24" />
        <path className="cls-6" d="m703.01,337.2c12.88,24.86,25.4,42.16,32.26,45.98,15.58,8.67,35.05,8.67,35.05,8.67,0,0,7.85,4.47,29.21-9.69,19.35-12.83,46.2-200.66,51.06-235.75.52-3.74,2.33-7.18,5.13-9.71,2.67-2.42,6.07-5.32,8.68-7.01,4.37-2.81,21.01,59.2,25.51,76.34" />
        <path className="cls-3" d="m890.42,207.95c.41,1.55.63,2.42.63,2.42" />
      </g>
      <path className="cls-7" d="m56.29,505.54s30.38-3.62,40.89-8.1c9.86-4.2,21.64-76.02,34.15-80.11,1.78-.58,3.45-1.67,4.63-3.52,1.32-2.06,1.82-2.45,4.44,0,.75.71,6.2,3.02,6.88,3.84,1.42,1.72,3.76,2.74,7-1.74,5.7-7.88,12.25,6.12,21.37,4.61,10.22-1.7,21.52-22.77,27.3-33.41.99-1.81,2.85-2.35,4.35-1.31,2.41,1.67,4.25,7.29,6.71,7.75,4.09.76,8.32-11.14,10.66-13.38,2.34-2.24,4.19-.96,7.45-.96s7.16-14.72,9.2-14.72c1.33,0,4.63,1.29,6.78,2.19,1.25.53,2.62.17,3.62-.94l5.7-6.3c.97-.92,2.21-1.2,3.36-.78l29.7,10.92c1.44.53,2.99.33,4.33-.56l7.26-2.88c1.13-.45,2.35-.33,3.42.34l23.91,15.6c1.47.96,3.19.99,4.68.07l12.43-4.95c.22-.09.43-.19.63-.32,1.33-.87,2.56-1.99,3.64-3.32.15-.18.28-.38.41-.59l25.55-42.35c.75-1.24,1.68-2.29,2.73-3.07l5.27-3.94c.26-.19.49-.44.72-.7.65-.73,1.43-1.23,2.27-1.45l4.3-1.13c2.38-.62,4.54-2.25,6.15-4.64l3.29-4.88c1.72-2.55,4.61-3.04,6.76-1.15l5.81,5.25c2.18,1.91,5.11,1.35,6.78-1.29l23.39-43.78c1.2-2.17,3.72-1.99,4.73.34l33.17,88.74c1.16,2.74,11.18,9.98,13.33,8.6l10.53-7.2c2.32-1.24,4.21-3.54,5.32-6.47l14.96-37.04c.2-.49.33-1.02.4-1.57l24.92-211.2c.07-.58.22-1.15.44-1.66l2.65-6.25c1.34-3.16,4.73-3.47,6.39-.57h0c.37.64.84,1.15,1.39,1.5l7.95,5.02c1.09.69,1.86,2,2.09,3.55l28,189.74c.1.7.32,1.36.63,1.94l9.77,18.09c.25.45.55.85.89,1.18l6.66,6.24c.65.61,1.42.93,2.22.93h6.81c1.19,0,2.32-.73,3.04-1.98l10.82-18.7c.2-.35.37-.73.49-1.13l11.11-35.7c.84-2.69,3.24-3.88,5.23-2.59l10.41,6.77c.34.22.65.5.92.84l14.8,18.31c.37.45.66,1,.86,1.6l14.94,40.25" />
    </svg>
  )
}
