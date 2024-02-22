/* eslint-disable no-undef */
'use strict';

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./views/**/**.{html,handlebars}', './public/js/*.js'],
  theme: {
    extend: {
      colors: {
        clinically: "#524c56",
        background: "#131313",
        foreground: "#151515",
        input: "#1c1c1c",
        label: "#ccc",
        faint: "#6b696c",
        button: "#bdbdbd"
      }
    }
  },
  plugins: []
};

