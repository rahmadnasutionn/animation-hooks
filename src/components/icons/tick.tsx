import React from 'react'

function Tick({
  width = 20,
  height = 20,
  className,
}: {
  width?: number;
  height?: number;
  className?: string
}) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-check"><polyline points="20 6 9 17 4 12"/></svg>
  );
};

export default Tick;