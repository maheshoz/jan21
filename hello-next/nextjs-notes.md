
### NOTE

1. Next.js is serverside(sends html content/pages for routes same as static not just js code) not a SPA(no reload for getting the pages,mostly) like react apps
2. there are some `seo` and `performance` benefits

INSTALLING NEXT.JS
- have node installed
- then run the cmd in shell
- `npx create-next-app hello-next` or `npx create-next-app hello-next --use-npm` if we have yarn installed but we wanna use npm
- cd into the created dir and run `npm run dev` in shell

Adding TYPESCRIPT support:

- Renamed the `.jsx files to .tsx`(where we code react components) for typescript support and `.js to .ts` (for normal js code with ts support)
- created a `tsconfig.json` file and install some dev dependencies `npm i typescript @types/node @types/react --save-dev`
- we installed @types/node as it helps to write **serverside code** and @types/react for **autocomplete** on client-side in react 

- there would be error to load the page but once we run the dev script, next will automatically detect and write into the tsconfig file. it shows the message 
- After `npm run dev` , MESSAGE in shell: `We detected TypeScript in your project and created a tsconfig.json file for you.`

- reload and everyting works fine










