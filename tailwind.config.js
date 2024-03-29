/* eslint-disable no-undef */
'use strict';

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./views/**/**.hbs', './public/js/*.js'],
  theme: {
    extend: {
      colors: {
        background: "#131313",  // Onyx
        foreground: "#151515",  // Cinder
        input: "#1c1c1c",       // Mirage
        label: "#ccc",
        faint: "#6b696c",
        button: "#353535",
        "button-hover": "#262626",
      }
    }
  },
  plugins: []
};

