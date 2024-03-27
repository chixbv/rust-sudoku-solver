const SVGOutline = () => {
  return (
    <g id="svg-cell-outline">
      {/* <rect x="2" y="2" width="432" height="432" stroke="red" fill="transparent" stroke-width="2" /> */}
      <rect x="1" y="1" width="145" height="146" stroke="red" fill="transparent" stroke-width="2" />
      <rect x="1" y="148" width="145" height="147" stroke="red" fill="transparent" stroke-width="2" />
      <rect x="1" y="296" width="145" height="146" stroke="red" fill="transparent" stroke-width="2" />
      <rect x="148" y="1" width="146" height="146" stroke="red" fill="transparent" stroke-width="2" />
      <rect x="148" y="148" width="146" height="147" stroke="red" fill="transparent" stroke-width="2" />
      <rect x="148" y="296" width="146" height="146" stroke="red" fill="transparent" stroke-width="2" />
      <rect x="296" y="1" width="146" height="146" stroke="red" fill="transparent" stroke-width="2" />
      <rect x="296" y="148" width="146" height="147" stroke="red" fill="transparent" stroke-width="2" />
      <rect x="296" y="296" width="146" height="146" stroke="red" fill="transparent" stroke-width="2" />
      <rect x="0" y="0" width="442" height="442" stroke="red" fill="transparent" stroke-width="2" /> {/* Outline Box */ } 
    </g>
  )
}

export default SVGOutline;