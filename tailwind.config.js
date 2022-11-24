/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  daisyui :{
    themes: [
      {
        mytheme: {
        
"primary": "#1f989b",
        
"secondary": "#3ffcc0",
        
"accent": "#e59ed8",
        
"neutral": "#2D3439",
        
"base-100": "#F9F9FB",
        
"info": "#7CCCF4",
        
"success": "#1CAB55",
        
"warning": "#F2B973",
        
"error": "#EB5842",
        },
      },
    ],
  },
  plugins: [
    require("daisyui"),
]
}