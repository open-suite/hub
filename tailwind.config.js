/* eslint-disable no-undef */
'use strict';

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./views/**/**.{html,ejs}', './public/js/*.js'],
  theme: {
    extend: {
      colors: {
        clinically: "#524c56",
        "chinese-black": "#100D12"
      }
    }
  },
  plugins: []
};

