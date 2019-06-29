import React from 'react';

import OrdinalFrame from "semiotic/lib/OrdinalFrame"

const dotRadius = 8

const frameProps = {
    data: [{
        "Claudio Monteverdi": { "Geburtsjahr": 1567, "Sterbejahr": 1643 },
        "Henry Purcell": { "Geburtsjahr": 1659, "Sterbejahr": 1695 },
        "Georg Friedrich H\u00e4ndel": { "Geburtsjahr": 1685, "Sterbejahr": 1759 },
        "Johann Christian Bach": { "Geburtsjahr": 1735, "Sterbejahr": 1782 },
        "Antonio Salieri": { "Geburtsjahr": 1750, "Sterbejahr": 1825 }, "Wolfgang Amadeus Mozart": { "Geburtsjahr": 1756, "Sterbejahr": 1791 }, "Ludwig van Beethoven": { "Geburtsjahr": 1770, "Sterbejahr": 1827 }, "Carl Maria von Weber": { "Geburtsjahr": 1786, "Sterbejahr": 1826 }, "Gioachino Rossini": { "Geburtsjahr": 1792, "Sterbejahr": 1868 }, "Gaetano Donizetti": { "Geburtsjahr": 1797, "Sterbejahr": 1848 }, "Felix Mendelssohn Bartholdy": { "Geburtsjahr": 1809, "Sterbejahr": 1847 }, "Ambroise Thomas": { "Geburtsjahr": 1811, "Sterbejahr": 1896 }, "Friedrich von Flotow": { "Geburtsjahr": 1812, "Sterbejahr": 1883 }, "Richard Wagner": { "Geburtsjahr": 1813, "Sterbejahr": 1883 }, "Giuseppe Verdi": { "Geburtsjahr": 1813, "Sterbejahr": 1901 }, "Charles Gounod": { "Geburtsjahr": 1818, "Sterbejahr": 1893 }, "Jacques Offenbach": { "Geburtsjahr": 1819, "Sterbejahr": 1880 }, "Johann Strauss (Sohn)": { "Geburtsjahr": 1825, "Sterbejahr": 1899 }, "Amilcare Ponchielli": { "Geburtsjahr": 1834, "Sterbejahr": 1886 }, "Georges Bizet": { "Geburtsjahr": 1838, "Sterbejahr": 1875 }, "Modest Mussorgskij": { "Geburtsjahr": 1839, "Sterbejahr": 1881 }, "Pjotr Iljitsch Tschaikowski": { "Geburtsjahr": 1840, "Sterbejahr": 1893 }, "Anton\u00edn Dvo\u0159\u00e1k": { "Geburtsjahr": 1841, "Sterbejahr": 1904 }, "Arthur Sullivan": { "Geburtsjahr": 1842, "Sterbejahr": 1900 }, "Leo\u0161 Jan\u00e1\u010dek": { "Geburtsjahr": 1854, "Sterbejahr": 1928 }, "Engelbert Humperdinck": { "Geburtsjahr": 1854, "Sterbejahr": 1921 }, "Giacomo Puccini": { "Geburtsjahr": 1858, "Sterbejahr": 1924 }, "Pietro Mascagni": { "Geburtsjahr": 1863, "Sterbejahr": 1945 }, "Richard Strauss": { "Geburtsjahr": 1864, "Sterbejahr": 1949 }, "Paul Dukas": { "Geburtsjahr": 1865, "Sterbejahr": 1935 }, "Franz Leh\u00e1r": { "Geburtsjahr": 1870, "Sterbejahr": 1948 }, "Walter Braunfels": { "Geburtsjahr": 1882, "Sterbejahr": 1954 }, "Emmerich K\u00e1lm\u00e1n": { "Geburtsjahr": 1882, "Sterbejahr": 1953 }, "Igor Strawinsky": { "Geburtsjahr": 1882, "Sterbejahr": 1971 }, "Ralph Benatzky": { "Geburtsjahr": 1884, "Sterbejahr": 1957 }, "Sergei Sergejewitsch Prokofjew": { "Geburtsjahr": 1891, "Sterbejahr": 1953 }, "Jarom\u00edr Weinberger": { "Geburtsjahr": 1896, "Sterbejahr": 1967 }, "Erich Wolfgang Korngold": { "Geburtsjahr": 1897, "Sterbejahr": 1957 }, "Viktor Ullmann": { "Geburtsjahr": 1898, "Sterbejahr": 1944 }, "Francis Poulenc": { "Geburtsjahr": 1899, "Sterbejahr": 1963 }, "Kurt Weill": { "Geburtsjahr": 1900, "Sterbejahr": 1950 }, "John Cage": { "Geburtsjahr": 1912, "Sterbejahr": 1992 }, "Benjamin Britten": { "Geburtsjahr": 1913, "Sterbejahr": 1976 }, "Leonard Bernstein": { "Geburtsjahr": 1918, "Sterbejahr": 1990 }, "Georg Kreisler": { "Geburtsjahr": 1922, "Sterbejahr": 2011 }, "Hans Werner Henze": { "Geburtsjahr": 1926, "Sterbejahr": 2019 }, "Mauricio Kagel": { "Geburtsjahr": 1931, "Sterbejahr": 2008 }, "Aribert Reimann": { "Geburtsjahr": 1936, "Sterbejahr": 2019 }, "Philip Glass": { "Geburtsjahr": 1937, "Sterbejahr": 2019 }, "Wilfried Hiller": { "Geburtsjahr": 1941, "Sterbejahr": 2019 }, "Peter E\u00f6tv\u00f6s": { "Geburtsjahr": 1944, "Sterbejahr": 2019 }, "Oliver Knussen": { "Geburtsjahr": 1952, "Sterbejahr": 2018 }, "James Reynolds": { "Geburtsjahr": 1953, "Sterbejahr": 2019 }, "Luca Francesconi": { "Geburtsjahr": 1956, "Sterbejahr": 2019 }, "Andreas N. Tarkmann": { "Geburtsjahr": 1956, "Sterbejahr": 2019 }, "Jonathan Dove": { "Geburtsjahr": 1959, "Sterbejahr": 2019 }, "Jake Heggie": { "Geburtsjahr": 1961, "Sterbejahr": 2019 }, "Fons Merkies": { "Geburtsjahr": 1966, "Sterbejahr": 2019 }, "Marius Felix Lange": { "Geburtsjahr": 1968, "Sterbejahr": 2019 }, "Frank Engel": { "Geburtsjahr": 1975, "Sterbejahr": 2019 }, "Thomas Rimes": { "Geburtsjahr": 1976, "Sterbejahr": 2019 }, "Anno Schreier": { "Geburtsjahr": 1979, "Sterbejahr": 2019 }, "Moritz Anthes": { "Geburtsjahr": 1980, "Sterbejahr": 2019 }, "Nu\u00f1ez Hierro": { "Geburtsjahr": 1980, "Sterbejahr": 2019 },
        "Leonard Evers": { "Geburtsjahr": 1985, "Sterbejahr": 2019} }],
    size: [700, 500],
    margin: { left: 235, top: 50, bottom: 40, right: 10 },
    type: { type: "point", r: 8 },
    projection: "horizontal",
    oPadding: 10,
    oAccessor: "region",
    rAccessor: ["y1990", "y2013"],
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
    axes: [{ orient: "bottom", tickFormat: function (e) { return e + "%" } }],
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