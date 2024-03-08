
import data from "./data.json" assert {type:'json'};
import handlebars from 'vite-plugin-handlebars';
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    rollupOptions: {
      input : {
        main: 'index.html',
        sub1: 'legislation.html',
      
        sub3: 'resources.html',
        sub4: 'SDF.html',
        sub5: 'structures.html',
        
        sub6:'assessments.html',
      }
    },
  },
  base : '/responsive_webpages/',
  plugins: [handlebars({
    context : {
      data   
  }
})],
})