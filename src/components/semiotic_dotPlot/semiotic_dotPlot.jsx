import React from 'react';

import OrdinalFrame from "semiotic/lib/OrdinalFrame"

const dotRadius = 8

const frameProps = {   data: [{ region: "Developed regions", y1990: 7.6, y2013: 3.4 },
    { region: "Developing regions", y1990: 36.4, y2013: 22 },
    { region: "Eastern Asia excluding China", y1990: 11.6, y2013: 7.5 },
    { region: "Eastern Asia", y1990: 24.5, y2013: 7.7 },
    { region: "Latin America and the Caribbean", y1990: 22.1, y2013: 9.2 },
    { region: "Northern Africa", y1990: 30, y2013: 13.3 },
    { region: "Western Asia", y1990: 27.5, y2013: 13.7 },
    { region: "South-eastern Asia", y1990: 27.4, y2013: 14.4 },
    { region: "Caucasus and Central Asia", y1990: 25.7, y2013: 14.8 },
    { region: "World", y1990: 33.3, y2013: 20 },
    { region: "Oceania", y1990: 26.3, y2013: 21.3 },
    { region: "Southern Asia", y1990: 50.6, y2013: 29.5 },
    { region: "Southern Asia excluding India", y1990: 49.3, y2013: 30.1 },
    { region: "Sub-Saharan Africa", y1990: 45.5, y2013: 31.1 }],
  size: [700,500],
  margin: { left: 235, top: 50, bottom: 40, right: 10 },
  type: { type: "point", r: 8 },
  projection: "horizontal",
  oPadding: 10,
  oAccessor: "region",
  rAccessor: ["y1990","y2013"],
  rExtent: [0],
  invertR: true,
  style: (d, i) => {
    return {
      fill: (i > 1 && (d.rIndex === 0 ? "#ac58e5" : "#533f82")) || "white",
      stroke: (i <= 1 && (d.rIndex === 0 ? "#ac58e5" : "#533f82")) || "white",
      strokeWidth: i <= 1 ? 3 : 1
    }
  },
  title: (
    <text textAnchor="middle">
      Neonatal Mortality Rate by Region from <tspan fill={"#ac58e5"}>1990</tspan>{" "}
      to <tspan fill={"#533f82"}>2013</tspan>
    </text>
  ),
  axes: [{ orient: "bottom", tickFormat: function(e){return e+"%"} }],
  annotations: [{ type: "range", region: "Developed regions", y1990: 7.6, y2013: 3.4 },
    { type: "range", region: "Developing regions", y1990: 36.4, y2013: 22 },
    { type: "range", region: "Eastern Asia excluding China", y1990: 11.6, y2013: 7.5 },
    { type: "range", region: "Eastern Asia", y1990: 24.5, y2013: 7.7 },
    { type: "range", region: "Latin America and the Caribbean", y1990: 22.1, y2013: 9.2 },
    { type: "range", region: "Northern Africa", y1990: 30, y2013: 13.3 },
    { type: "range", region: "Western Asia", y1990: 27.5, y2013: 13.7 },
    { type: "range", region: "South-eastern Asia", y1990: 27.4, y2013: 14.4 },
    { type: "range", region: "Caucasus and Central Asia", y1990: 25.7, y2013: 14.8 },
    { type: "range", region: "World", y1990: 33.3, y2013: 20 },
    { type: "range", region: "Oceania", y1990: 26.3, y2013: 21.3 },
    { type: "range", region: "Southern Asia", y1990: 50.6, y2013: 29.5 },
    { type: "range", region: "Southern Asia excluding India", y1990: 49.3, y2013: 30.1 },
    { type: "range", region: "Sub-Saharan Africa", y1990: 45.5, y2013: 31.1 }],
  svgAnnotationRules: ({ d, rScale, orFrameState }) => {
    if (d.type === "range") {
      const start = rScale(d.y1990) + dotRadius
      const end = rScale(d.y2013) - dotRadius
      const y = orFrameState.projectedColumns[d.region].middle
      return (
        <line
          x1={start}
          x2={end}
          y1={y}
          y2={y}
          style={{ stroke: "black", strokeWidth: 2 }}
        />
      )
    }
    return null
  }
  ,
  oLabel: true
}

export default () => {
  return <OrdinalFrame {...frameProps} />
}