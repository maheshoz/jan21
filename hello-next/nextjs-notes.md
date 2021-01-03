
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


FILE STRUCTURE:
- `public` : all files in this directly are accessable to root directory ex. try `localhost:3000/favicon.ico` so you can have static files(imgs,txt,js etc...) or assets which you want in public

- styles : for css styles we can use styles dir or we can just create/drop the css files in pages dir and change the path while importing the css files

- pages : simple routing path for every file name like `/about` for `about.tsx`
- automatically creates routes for pages , the files in pages dir should return jsx
- the function name could be anything , filename is the route, add styles to specific route lke about.module.css 


`_document.tsx` : used to inject our own scripts, uses 'next/document' , 
```js
import Document, {Html, Head, Main, NextScript } from 'next/document'

export default class CustomDocument extends Document {
  render() {
    return( 
      <Html>
        <Head>

        </Head>
        <body>
          <Main></Main>
        </body>

        <NextScript />

      </Html>
    )
  }
}
```

after creating the _doc.tsx save, run the dev script, so that the project files are rebuilt.
And view the content of new documents i.e /about routes , go to  view page source , then ctrl+f custom, highlights the meta property

`_app.tsx` : responsible to render every page as it takes  props and components
```js
function MyApp({ Component, pageProps }) {
  console.log("HELLO FROM _app");
  return <Component {...pageProps} />
}
```
So _app for client side and _document for server side change/add of code



=========== End



