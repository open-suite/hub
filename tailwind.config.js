/* eslint-disable no-undef */
'use strict';

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./views/**/**.{html,ejs}', './public/js/*.js'],
  theme: {
    extend: {
      colors: {}
    }
  },
  plugins: []
};

