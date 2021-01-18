/*!
 *
 * Jquery Mapael - Dynamic maps jQuery plugin (based on raphael.js)
 * Requires jQuery and Mapael >=2.0.0
 *
 * Map of madiun_fixed_3
 * 
 * @author me
 */
(function (factory) {
    if (typeof exports === 'object') {
        // CommonJS
        module.exports = factory(require('jquery'), require('jquery-mapael'));
    } else if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define(['jquery', 'mapael'], factory);
    } else {
        // Browser globals
        factory(jQuery, jQuery.mapael);
    }
}(function ($, Mapael) {

    "use strict";
    
    $.extend(true, Mapael,
        {
            maps :  {
                madiun_fixed_3 : {
                    width : 63.814098,
                    height : 72.748596,
                    getCoords : function (lat, lon) {
                        // todo
                        return {"x" : lon, "y" : lat};
                    },
                    'elems': {
                        "polygon1567" : "m 62.49,8.52 c -1.05,-0.66 0.09,-2.35 -0.02,-3.43 0.23,-1.51 0.46,-3.02 0.69,-4.53 -2.02,-0.2 -4.04,-0.41 -6.06,-0.61 -1.2,1.04 -2.4,2.07 -3.61,3.11 1.62,1.09 3.23,2.17 4.85,3.26 0.43,2.47 -1.47,2.27 -3.09,1.74 -1.23,-0.64 -2.35,0.52 -2.89,1.47 0.77,0.82 1.36,2.63 2.43,2.55 1.18,0.77 2.37,1.55 3.55,2.32 0.83,-1.98 1.67,-3.96 2.5,-5.94 0.54,0.02 1.09,0.04 1.63,0.06 z",
                        "path1569" : "m 58.1,6.43 c -1.79,-1.1 -3.45,-2.5 -5.3,-3.43 -1.06,0.72 -1.95,1.9 -3.11,2.34 -1.47,-0.12 -2.95,-0.25 -4.42,-0.37 -1.86,1.64 1.15,1.69 -0.05,3.19 -0.59,2.2 -1.59,3.73 -3.95,2.93 -0.96,0.3 -0.84,2.17 -1.36,3.11 -0.59,0.96 -0.42,2.49 0.84,2.73 1.4,1.11 1.25,-1.16 1.76,-2 -0.18,-1.28 2.29,-1.78 2.25,-0.47 -0.08,1.6 0.95,1.8 2.31,1.58 1.66,-0.76 0.58,2.71 2.01,1.52 0.45,-1.14 0.5,-2.57 0.8,-3.82 1.14,0.03 2.51,0.74 3.23,-0.51 1.6,-0.73 0.47,-1.7 -0.28,-2.64 -1.26,-0.88 -0.44,-1.96 0.59,-2.55 0.87,-0.96 2.28,0.09 3.4,0.06 1.43,0.62 1.02,-0.79 1.27,-1.68 z",
                        "path1571" : "m 49.4,17.65 c -1.51,1.46 -1.21,-0.7 -1.85,-1.38 -1.01,-0.23 -2.91,0.67 -2.83,-0.94 0.33,-1.38 -1.52,-1.94 -1.87,-0.69 -0.65,1.62 -1.14,3.27 -0.93,5.04 0,1.37 0,2.74 0,4.1 -1.24,0.09 -2.25,0.59 -2.11,1.99 -0.27,1.34 0.47,2.13 1.82,1.73 1.3,-0.62 1.88,1.39 1.16,2.14 -1.63,1.16 0.29,1.26 1.36,1.26 1.24,0.48 2.03,-1.37 3.17,-0.22 1.42,0.84 1.66,-0.36 1.38,-1.29 0.36,-1.24 -1.88,-0.91 -2.66,-1.46 -1.58,0 -1.32,-1.55 -0.72,-2.52 0.15,-1.57 1.16,-1.77 2.52,-1.4 1.21,0.31 2.35,-0.16 3.5,-0.48 -0.39,-2.9 1.92,-1.43 3.29,-0.75 0.85,-0.03 0.7,-2.16 1.15,-3.03 0.35,-1.21 2.26,-1.5 2.08,-2.97 0.19,-1.18 0.76,-2.52 -0.79,-2.92 -0.97,-0.29 -2.07,-2.1 -2.94,-1.25 -0.92,0.71 -1.61,2.11 -2.95,1.53 -1.64,-0.73 -1.22,1.33 -1.57,2.34 -0.07,0.39 -0.14,0.79 -0.21,1.18 z",
                        "path1573" : "m 51.69,22.01 c 0.62,1.97 -1.19,1.97 -2.5,2.35 -1.01,0.15 -2.66,-0.74 -3.25,0.07 -0.11,0.96 -1.6,2.51 -0.4,3.08 1.18,0.36 2.36,0.73 3.54,1.09 -0.71,1.34 0.63,1.6 0.22,2.95 1.49,0.23 0.72,-1.68 1.09,-2.56 0.73,-1.18 1.67,-1.7 2.98,-1.04 0.94,-0.09 2.71,1.24 3.07,0.14 0.54,-2.48 1.08,-4.97 1.61,-7.45 0.79,1.49 2.07,0.3 1.61,-0.99 0.29,-0.91 2.54,0.38 2.38,-1.44 0.56,-1.49 1.11,-2.98 1.67,-4.47 -1.13,-0.72 -1.02,-1.9 -0.88,-3.07 0.36,-1.49 -0.03,-2.3 -1.65,-1.96 -0.74,0.8 -1.03,2.31 -1.6,3.38 -0.82,1.75 -1.45,3.37 -1.58,5.31 -0.23,1.28 -2.21,1.55 -2.15,3.02 -0.49,0.71 -0.14,3.18 -1.25,2.59 -0.96,-0.25 -1.93,-1.28 -2.91,-1 z",
                        "polygon1575" : "m 48.46,31.18 c -0.43,0.95 -1.59,1.89 -1.89,2.93 0.24,1.71 0.89,3.47 0.88,5.16 -0.11,1.34 -1.68,1.77 -2.44,1.14 -0.8,-0.74 -1.14,1.62 -1.6,2.27 -0.75,1.28 1.34,1.51 2.16,1.77 1.36,-0.49 2.73,-0.06 4.09,0.18 0.48,-1.02 0.6,-2.54 1.29,-3.26 1.62,-0.05 3.26,-0.17 4.72,0.69 1.5,1.24 1.27,-0.81 1.96,-1.46 1.19,-0.14 2.88,0.1 2.07,-1.59 -0.57,-1.25 0.4,-2.14 1.07,-3.08 1.34,-1.35 0.06,-1.57 -1.27,-1.35 -1.15,-0.07 -0.16,-2.46 -2.06,-1.99 -1.22,-0.5 -2.18,0.78 -3.27,1.16 -0.81,-0.84 -0.78,-2.17 0.07,-2.96 0.43,-0.77 2.79,-2.16 0.87,-2.19 -1.14,-0.14 -2.45,-0.78 -3.5,-0.61 -1.12,0.78 -1.18,2.02 -1.22,3.27 -0.7,1.64 -1.54,-0.53 -1.6,-0.38 -0.12,0.1 -0.24,0.21 -0.36,0.31 z",
                        "polygon1577" : "m 39.9,32.04 c -0.56,1.18 -2.52,-1.12 -2.43,0.3 0.32,1.31 0.64,2.62 0.96,3.93 -1.2,0.9 -2.43,-0.73 -3.72,-0.15 -0.38,0.39 1.29,2.46 0.06,2.39 0.99,0.55 1.3,-0.9 2.82,-0.1 1.03,0.43 3.1,-2.08 2.71,-1.15 -0.12,-1.32 3.24,-1.47 2.2,-1.54 1.8,-0.59 -0.68,2.05 1.24,1.98 2.44,0.46 1.6,3.62 1.49,2.66 1.3,0.52 1.68,-3.09 1.95,-1.91 -0.3,-1.53 -0.61,-3.06 -0.91,-4.59 0.33,-0.86 0.87,-3.32 1.5,-2.72 -1.11,-1 -4.15,0.31 -3.06,0.04 -1.75,0.06 -3.38,-0.53 -5,-1.12 -1.44,0.65 1.53,0.67 0.18,1.99 z",
                        "path1579" : "m 39.69,31.93 c 0.94,-1 -1.93,-1.66 0.07,-2.12 1.19,0.54 2.35,0.96 2.99,-0.51 0.5,-1.34 -0.67,-1.95 -1.92,-1.55 -1.74,0.39 -0.61,-1.96 -1.88,-1.27 -2.34,0.54 -1.88,-3.2 -3.96,-2.4 -1.33,0.06 -2.54,0.23 -2.08,1.86 0.57,1.42 -1.42,1.49 -1,2.73 1.66,0.51 -1.18,2.16 1.01,2.32 0.68,1.31 1.82,0.31 2.79,0.91 0.33,1.73 -0.78,4.43 1.86,4.47 1.23,-0.38 -0.19,-2.1 -0.11,-3.06 -0.78,-1.35 0.12,-2.25 1.41,-1.3 0.35,0.17 0.51,0.23 0.81,-0.07 z",
                        "polygon1581" : "m 36.42,16.27 c -1.4,0.26 -2.41,1.44 -3.64,2.12 2.19,-0.23 3.44,1.88 4.63,2.33 -0.22,1.13 -1.19,2.3 -0.91,3.39 0.46,1.18 0.99,2.26 2.44,2.13 1.16,0.19 0.26,-2.42 1.59,-2.35 1.69,0.15 1.04,-1.52 1.15,-2.61 0,-1.24 0,-2.48 0,-3.72 -2.07,-0.62 -2.73,-3.02 -3.68,-0.53 -0.53,-0.25 -1.06,-0.5 -1.59,-0.75 z",
                        "path1583" : "m 36.49,16.04 c 1.17,0.78 2,0.93 1.93,-0.44 1.43,0.07 1.12,-1.82 1.66,-2.75 0.34,-1.13 0.44,-2.61 1.99,-1.95 1.37,0.51 1.99,-0.28 2.33,-1.54 0.32,-1.01 1.73,-2.39 -0.03,-2.69 -0.96,-0.22 -2.86,-0.06 -1.8,-1.52 0.65,-1.28 -1.8,-0.91 -1.55,0.39 -1.09,1.03 -2.17,2.06 -3.26,3.09 -0.13,-1.51 -0.79,-2.13 -2.24,-1.42 -1.82,0.51 -3.81,0.53 -5.46,1.52 -0.13,1.16 -1.05,2.54 0.26,3.3 1.15,0.87 1.71,2.06 1.24,3.48 -0.44,1.1 0.1,2.49 1.21,2.6 1.24,-0.64 2.29,-2.01 3.72,-2.08 z",
                        "path1585" : "m 39.89,57.05 c -0.99,3.12 -3.96,0.37 -4.9,-1.12 -1.32,0.06 -0.77,2.3 -1.58,2.6 -1.24,-0.68 -2.34,-1.06 -1.99,0.8 -0.13,1.25 1.25,2.06 1.76,3.12 0.91,0.86 -0.39,2.18 0.96,2.81 0.93,1.01 1.73,2.22 3.2,2.39 1.22,0.44 2.43,0.99 3.74,0.56 2.47,-0.31 4.95,-0.61 7.42,-0.92 0.74,-1.06 0.5,-2 -0.35,-2.89 -0.05,-1.66 -0.09,-3.32 -0.14,-4.98 -0.95,-0.49 -2.88,-0.15 -2.64,-1.67 -0.05,-1.28 -0.17,-2.51 -1.64,-2.81 -1.79,-1.57 -2.6,1.24 -3.86,2.1 z",
                        "path1587" : "m 25.86,19.62 c -0.38,1.56 -1.26,3.09 -1.34,4.68 0.18,1.25 0.73,2.55 -0.13,3.67 -1.16,1.48 -0,1.64 1.37,1.47 1.9,0.09 3.91,-0.29 5.58,0.85 1.61,-0.21 0.18,-1.47 0.34,-2.18 0.6,-1.05 1.32,-1.49 1.01,-2.98 -0.38,-1.57 1.74,-0.95 2.7,-1.34 1.33,-0.01 1.09,-1.94 1.69,-2.84 0.02,-0.65 -1.82,-0.49 -1.86,-1.88 -1.24,-0.19 -2.64,-0.06 -3.42,-1.24 -1.47,-0.35 0.27,-3.15 -0.8,-2.78 -1.46,1.28 -4.18,1.05 -4.57,3.26 -0.19,0.43 -0.37,0.91 -0.58,1.32 z",
                        "path1589" : "m 13.79,18.23 c 0.27,-1.37 -0.42,-3.98 1.9,-2.69 2.19,-0.37 6.73,2.68 7.4,0.1 0.11,-1.29 0.36,-2.43 1.9,-2.35 1.23,-0.17 2.34,-0.49 2.66,-1.84 1.07,-1.35 -1.3,-1.35 -2.1,-1.84 C 24.46,9.44 23.31,8.27 22.27,8.86 21.28,10.07 20.15,8.53 19.27,8.61 c -1.04,0.89 -1,2.22 -1.15,3.47 -0.95,0.73 -1.98,1.13 -3.16,0.7 -2.55,-0.36 -5.1,-0.72 -7.64,-1.08 -0.69,0.86 -2.5,1.59 -1.13,2.67 0.36,1.23 0.17,2.65 0.32,3.95 1.79,0.63 3.59,1.26 5.38,1.89 0.63,-0.66 1.27,-1.32 1.9,-1.98 z",
                        "polygon1591" : "m 14.49,30.65 c 1.76,2.84 1.15,-1.81 2.29,-1.55 1.1,1.02 2.09,0.62 3.05,-0.35 1.05,-0.29 2.32,0.38 3.46,0.46 2.4,-1.56 0.25,-4.76 1.48,-7.04 0.07,-0.95 1.64,-2.81 -0.14,-2.64 -1.01,-0.3 -3.06,0.08 -2.08,-1.52 0.93,-1.56 -1.3,-1.07 -2.22,-1.43 -2.03,-0.35 -4.06,-0.7 -6.08,-1.05 0.38,2.15 -0.77,3.63 -2.27,4.93 -1.8,-0.56 -3.64,-1.27 -5.46,-1.88 -0.29,1.43 0.46,2.23 1.74,2.71 0.96,0.79 3.2,1.08 2.56,2.76 -1.14,2.11 1.33,2.72 2.64,3.68 0.99,1.4 -1.34,1.78 1.02,2.94 z",
                        "polygon1593" : "m 56.78,42.73 c -1.82,-0.67 -5.74,-2.65 -6.29,0.15 -0.12,3.16 -2.95,1.05 -5.01,1.82 -0.89,2.33 -1.79,4.66 -2.68,6.98 -2.56,-0.27 -1.81,3.79 0.25,2.64 1.8,1.82 3.11,-0.03 5.08,-0.06 2.2,0.15 4.4,0.28 6.22,-1.12 1.3,-0.33 1.78,-1.37 2.04,-2.59 0.41,-1.45 1.13,-2.89 1.35,-4.35 -0.32,-1.16 -0.64,-2.32 -0.96,-3.48 z",
                        "polygon1595" : "m 39.11,38.64 c 2.35,-0.21 1.56,3.03 -0.59,1.44 0.54,2.76 -2.23,4.02 -2.23,6.48 1.4,1.54 -2.97,0.53 -1.09,2.12 1.04,0.97 1.15,2.19 3.08,2.22 1.45,0.27 3.11,1.36 4.42,0.4 0.85,-2.21 1.69,-4.41 2.54,-6.62 -1.3,-0.37 -3.01,-1.03 -1.84,-2.59 0.24,-1.79 1.87,-2.01 1.68,-3.51 -0.72,-0.65 -2.95,-0.59 -2.3,-1.9 0.86,-1.43 -2.81,-0.75 -2.25,0.64 0.05,0.75 -0.98,0.89 -1.43,1.32 z",
                        "polygon1597" : "m 32.54,38 c -1.05,-0.91 -1.81,-2.4 -3.39,-2.22 -0.73,0.5 -0.55,2.47 -2.15,1.46 -0.98,-0.37 -2.54,-0.6 -2.1,0.97 0.07,2.46 0.15,4.92 0.22,7.38 1.51,0.52 2.8,-2.61 2.53,-1.67 0.15,-1.38 0.29,-2.76 0.44,-4.14 1.09,0.19 2.7,-0.32 2.79,1.25 0.11,1.5 3.83,1.88 2.63,1.71 1.15,0.29 4.19,-0.64 3.27,-0.06 1.53,1.78 1.82,-4.6 1.44,-2.1 -0.49,-0.91 -3.12,-1.61 -2.71,-1.27 -0.83,-0.79 -1.87,-1.39 -2.26,0.11 -0.82,0.4 -2.35,-0.64 -0.72,-1.41 z",
                        "polygon1599" : "m 33.77,32.14 c -1.01,-1.38 -2.84,-1.61 -4.27,-2.42 -1.28,-0.02 -2.57,-0.03 -3.85,-0.05 -0.08,1.52 -0.15,3.04 -0.23,4.56 -2.55,0.12 1.48,3.56 0.12,2.17 0.56,0.52 3.02,-0.75 2.81,0.27 -0.06,-1.54 3.36,-0.32 2.42,-0.78 0.42,0.83 0.77,3.33 1.69,2.51 -1.08,1.15 1.39,-1.7 1.41,-0.36 0.22,-1.13 0.12,-2.56 1.68,-2.28 -0.1,-1.23 0.23,-2.71 -0.15,-3.78 -0.45,-0.35 -1.11,0.13 -1.63,0.14 z",
                        "polygon1601" : "m 27.07,57.04 c 0.95,-0.64 3.33,0.67 2.56,-1.8 -0.52,-1.96 1.68,-1.56 1.64,-3.59 1.74,-0.09 1.11,2.64 2.95,2.46 0.52,-0.97 2.51,-3.95 1.03,-5.11 -2.51,-1.28 1.82,-1.56 0.73,-2.75 -0.76,-1.44 2.88,-2.88 0.64,-3.39 -1.15,1.04 -2.72,-0.03 -4.08,-0.07 -1.54,0.2 -1.7,-1.29 -2.18,-2.39 -0.69,-0.48 -2.67,-0.78 -2.2,0.78 -0.22,1.16 -0.07,2.55 -0.53,3.56 -1.59,0.78 -2.95,1.65 -2.41,3.73 0.08,1.53 2.35,2.21 1.91,3.98 1.01,1.57 -1.73,4.22 -0.06,4.59 z",
                        "polygon1603" : "m 18.06,36.92 c 0.6,-0.98 3.93,-0.64 2.76,-1.16 1.3,0.07 2.68,0.85 3.92,0.45 -1.18,-1.19 0.56,-3.2 0.48,-2.55 0.07,-1.33 0.13,-2.66 0.2,-3.99 -2.08,0.06 -3.89,-0.51 -3.36,-0.46 -2.14,-0.87 -3.57,0.66 -3.19,0.53 -0.96,0.64 -0.28,4.12 -0.12,3.11 -0.73,1.14 -1.23,2.5 -2.09,3.51 0.47,0.18 0.93,0.37 1.4,0.55 z",
                        "polygon1605" : "m 22.72,46.27 c -0.28,-3.36 -0.55,-6.71 -0.83,-10.07 -1.12,-0.14 -2.63,-0.91 -3.29,0.45 -0.66,1.41 -2.33,-1.17 -2.84,0.62 -1.09,0.83 -0.2,4.31 -0.57,3.14 0.36,1.76 0.64,3.48 1.04,5.22 1.84,0.17 3.75,0.72 5.54,0.67 0.4,-0.23 0.67,-0.64 0.95,-0.03 z",
                        "polygon1607" : "m 13.68,43.65 c 0.97,-0.91 2.34,-0.19 1.53,-1.88 -0.12,-1.15 -0.39,-4.57 -0.53,-3.48 0.69,-0.92 2.93,-3.15 2.15,-2.52 0.61,-1.43 2.11,-2.69 1.51,-4.35 0.4,-1.09 -2.38,-1.08 -1.88,-1.8 -0.44,0.74 -0.35,3.35 -1.46,1.79 -0.97,-1.36 -3,2.2 -2.25,1.62 -0.6,1.09 -2.14,1.33 -2.31,2.7 -0.8,2.06 -1.9,4.01 -2.46,6.15 0.74,1.5 3.65,1.46 2.97,1.27 0.91,0.16 1.82,0.33 2.73,0.49 z",
                        "polygon1609" : "m 16.87,65.19 c 1.65,-1.75 -2.28,-3.7 1.28,-2.99 1,0.1 2.83,-1.26 3.07,0.18 0.78,1.17 -1.4,1.43 -0.8,2.85 -0.8,1.49 5.28,-0.28 2.83,0.36 1.16,-0.27 2.41,0.69 3.46,0.42 0.79,-1.58 0.01,-3.51 0.19,-3.18 -0.67,-0.99 -1.81,-2 -0.44,-2.94 0.38,-0.82 -2.02,-2.42 -1.59,-2.26 -0.87,0.6 -3.83,1.29 -2.59,1.9 -0.8,-0.61 0.85,-4.14 0.44,-3.23 0.63,-1.04 0.28,-4.48 0.56,-3.29 -0.25,-2.15 -0.21,-4.42 -0.65,-6.5 -0.71,-0.29 -4.19,-0.68 -3.12,-0.18 -0.93,0.09 -3.31,0.71 -3.15,-0.08 0.22,1.77 1.26,3.58 0.37,5.31 -0.36,1.5 -1.27,2.99 -0.54,4.53 0.15,1.49 1.29,3.07 0.31,4.45 -0.63,1.42 -1.25,2.85 -1.88,4.27 -1.82,0.17 0.6,3.45 0.32,2.54 0.52,1.19 2.1,1.15 3.12,1.75 -0.11,-0.98 1.26,-2.84 -0.21,-3 -0.61,-0.1 -0.92,-0.27 -0.98,-0.92 z",
                        "path1611" : "m 22.99,46.58 c 0.22,2.65 0.44,5.29 0.65,7.94 0.54,0.38 1.23,2.57 1.78,1.93 1.07,0.56 1.53,-1.55 1.48,-2.41 -0.2,-1.05 0.56,-2.56 -0.63,-3.13 0.01,-1.16 -1.96,-1.5 -1.23,-2.9 0.39,-1.99 -0.43,-3.41 -0.24,-5.49 -0.5,-1.98 0.34,-5.38 0.13,-6.13 -0.75,0.89 -2.91,-0.94 -2.74,0.44 0.27,3.25 0.54,6.5 0.8,9.76 z",
                        "polygon1613" : "m 6.94,46.73 c 0.87,-0.43 2.73,-1.15 2.62,0.48 -0.06,1.64 3.95,0.95 2.92,0.77 0.89,-0.85 1.14,-4.46 0.94,-3.26 0.65,-1.48 -3.38,-1.76 -2.52,-1.33 C 7.99,43.01 5.18,42.16 2.36,41.31 c -0.75,0.88 -2.91,3.56 -2.43,2.58 -0.5,1.75 1.77,0.83 1.57,2.39 -0.3,2.11 3.17,3.26 1.84,2.44 0.82,-0.75 1.19,-2.46 2.56,-2.02 0.35,0.01 0.69,0.03 1.04,0.04 z",
                        "polygon1615" : "M 4.75,40.62 C 4.59,38.86 6.68,41.01 6.84,39.11 6.01,38.32 4.9,38.35 6.17,37 6.98,35.57 7.8,34.14 8.61,32.71 7.86,30.65 4.56,33.31 5.83,32.61 c -1.25,0.54 -2.5,4.47 -1.94,2.48 -0.34,1.77 -0.68,3.53 -1.01,5.3 0.61,0.03 1.35,0.61 1.88,0.24 z",
                        "polygon1617" : "m 8.41,31.88 c 1.03,1.06 -1.23,4.25 -0.87,3.19 -0.6,1.05 -2.38,4.18 -1.79,3.14 1.99,-0.12 1.51,2.43 1.09,2.07 1.49,0.98 2.68,-2.84 2.17,-1.79 0.72,-1.34 1.01,-3.02 1.99,-4.16 1.45,-0.82 2.16,-2.37 3.16,-3.63 -0.79,-1.13 -4.38,-0.52 -3.15,-0.83 -1.33,0.03 -2.62,-0.64 -3.93,-0.89 -0.69,0.97 -1.83,2.02 -0.1,2.55 0.44,0.19 0.95,0.23 1.42,0.36 z",
                        "path1619" : "M 8.03,40.84 C 7.09,40.88 5.21,39.41 5,40.61 4.67,41.56 1.63,40.01 3.12,41.28 c 1.64,0.43 3.23,1.04 4.89,1.35 -0.38,-0.63 -0.19,-1.14 0.02,-1.79 z",
                        "path1621" : "m 6.99,28.7 c 1.84,0.44 3.64,1.32 5.55,0.74 1.47,-0.22 1.12,-1.93 -0.23,-2.17 -0.86,-0.59 -2.5,-1.08 -1.88,-2.44 0.52,-1.21 0.26,-2.34 -1.12,-2.69 C 8.36,21.86 7.02,20.27 6.33,20.87 5.18,21.99 6.54,22.87 7.19,23.81 8.15,25.03 7.05,28.3 5.32,28.37 3.89,28.24 3.42,29.43 2.87,30.5 2.02,31.64 4.64,31.36 5.08,32.16 5.41,33.33 7.67,31.14 5.77,30.95 5.31,30.55 6.83,29.24 6.99,28.7 Z",
                        "path1623" : "m 22.91,8.38 c 1.74,0.63 3.48,1.26 5.21,1.89 0.12,1 -0.62,2.35 -1.43,2.82 -0.93,0.47 -2.66,0.18 -3.08,1.13 -0.31,1.59 -0.62,3.16 -1.06,4.72 1.02,-0.07 2.63,0.93 3.28,0.16 0.6,-1 0.59,-2.68 2.05,-2.75 2.15,-0.58 5.08,-2.33 2.31,-4.12 -1.57,-1.06 -0.85,-3.87 0.92,-4.31 2.01,-0.44 4.03,-0.87 6.04,-1.31 0.79,-0.24 2.41,0.07 1.94,-1.71 0.36,-1.45 -1.9,-0.01 -2.76,-0.11 C 34.67,4.89 33.02,4.03 31.35,3.75 29.72,3.32 28.08,2.9 26.44,2.48 25.46,3.42 24.16,4.19 23.38,5.24 23.22,6.29 23.07,7.34 22.91,8.38 Z",
                        "path1625" : "m 41.12,51.94 c -1.7,-0.48 -3.4,-0.96 -5.11,-1.44 -0.47,1.32 -0.94,2.63 -1.4,3.95 -1.4,-0.07 -2.11,-0.94 -2.48,-2.23 -1.31,-1.18 -0.55,2.08 -2.02,1.58 -0.42,0.49 -0.35,2.52 -0.06,2.97 0.59,0.68 1.9,0.84 2.91,1.32 1.22,0.52 0.42,-2.29 1.71,-2.3 1.63,-0.17 3.25,4.76 4.91,1.36 0.41,-1.09 3,-2.12 1.35,-3.21 0.06,-0.67 0.13,-1.33 0.19,-2 z",
                        "polygon1627" : "m 25.16,57.33 c 0.6,0.93 2.46,2.01 1.18,3.13 -0.94,0.92 1.37,3.83 1.12,2.86 -0.32,0.97 -2.15,3.39 -1,3.07 -1.57,-0.44 -3.15,-0.78 -4.77,-0.37 -0.97,0.39 -3.01,2.51 -2.99,1.08 -0.24,1.16 -0.86,2.52 0.85,2.61 1.1,0.55 4.46,-0.46 3.33,0.25 1.11,-0.64 4.31,0.83 3.25,0.16 2.1,0.82 4.17,1.9 6.29,2.57 1.93,-0.18 3.87,-0.35 5.8,-0.53 0.86,-0.88 1.18,-4.4 1.24,-3.16 0.12,-0.85 -3.53,-1.85 -2.73,-1.3 -1.66,-0.38 -2.41,-2.16 -3.63,-3.21 0.82,-1.53 -0.81,-2.61 -1.49,-3.81 -1.13,-0.71 -1.7,-3.45 -0.7,-3.02 -1.12,-0.33 -1.26,2.37 -2.55,1.12 -1.57,-0.04 -0.82,-1.88 -2.38,-1.87 -0.57,-0.4 -0.57,0.09 -0.82,0.43 z",
                        "polygon1629" : "m 17.78,62.52 c -0.03,1.03 0.49,4.01 -0.31,3.22 0.84,0.33 2.91,0.84 2.73,-0.56 -0.54,-1.46 1.57,-1.78 0.7,-3.01 -0.6,-0.48 -2.22,0.36 -3.12,0.35 z",
                        "polygon1631" : "m 23.61,54.89 c -0.57,1.44 -1.49,2.78 -1.43,4.39 1.23,0.66 3.41,-2.41 2.55,-1.83 0.84,-0.7 -0.91,-1.81 -1.12,-2.56 z",
                        "polygon1633" : "m 28.47,57.27 c -1.44,-1.19 -1.55,1.24 -0.15,1.22 0.82,1.06 0.89,-1.75 1.65,-1.47 -0.5,0.08 -1,0.16 -1.51,0.24 z",
                        "polygon1635" : "m 35.86,38.4 c -0.65,1.46 3.3,1.81 2.45,1.39 0.93,0.34 2.71,0.69 1.79,-0.71 -1.4,-0.32 -2.82,-0.47 -4.24,-0.68 z"
                    }
                }
            }
        }
    );

    return Mapael;

}));