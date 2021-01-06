
### NOTES
this is a Codealong from codedamn.com

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

------

STYLING IN NEXTJS:

1. **style in JSX**: these styles are component based
```js
// Styled jsx - to apply css to individual components

function Heading(props) {
  return(
    <div>
      <h1>{props.heading}</h1>
      <style jsx>
      // <style jsx global> //for applying style globally
        {`
          h1{
            color: red;
          }
        `}
      </style>
    </div>
  )
}

export default function About() {
  return (
    <div>
      <Heading heading="h1 with jsx styles" />
      <h3>About</h3>
    </div>
  ) 
}
```

In the source we can see how the styles are added for the jsx styling
```html
<div>
  <div class="jsx-1023600582">
    <h1 class="jsx-1023600582">h1 with jsx styles</h1>
   </div>
   <h3>About</h3>
 </div>
```

2. **Global styles**: as seen in the styles dir , we create a file and import in the pages
> Note for global styles we need to import it in _app.tsx 
```js
import '../styles/globals.css'
```
3. **CSS Modules** : styles are applied only to the imported component
```css 
 /* syntax: Home.module.css */
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
```
```js
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
     <h2>Home page</h2>
    </div>
  )
}
```
so we should import and add styles like `<p className={styles.container}>.....</p>` in the component

4. Adding SASS support
- install sass as dev dependency `npm i sass --save-dev`
- restart the dev server
- and import as normanl css modules `file.module.scss`

--------

File structure : creating a folder in pages for better structure
- create a dir in pages/ for a route 
- ex: `/pages/page1/index.tsx`
- goto localhost:3000/page1 to view the content
- we can have styles module in this dir


------
API'S in nextjs:
- API's files are in pages/ api dir 
```js
import { NextApiRequest, NextApiResponse } from "next";

export default function (req: NextApiRequest, res: NextApiResponse) {
  // it should not be a react component
  //  res.json({status : 'ok', name: 'next'})
  res.json({ num: Math.floor(Math.random() * 10) });
}

// http://localhost:3000/api/random-number
```

in the console 
```js
fetch('http://localhost:3000/api/random-number', {method: 'POST', body: 'Hello'})
// send json data
fetch("http://localhost:3000/api/random-number", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ username: "admin", password: "admin" }),
});


```
we can view the post data in the terminal which is the server side,
```js
console.log('REQUEST Query', req.query)  // in url http://localhost:3000/api/random-number?q=1 
console.log('REQUEST Query', req.query)  // in url http://localhost:3000/api/random-number?name="nextjs" 
console.log('REQUEST Query', req.query.name)  // in url http://localhost:3000/api/random-number?name="nextjs" 

REQUEST Query { name: 'nextjs' }
REQUEST Query { name: 'nextjs' }
REQUEST Query nextjs
``` 

===
```js
import { NextApiRequest, NextApiResponse } from "next";

export default function(req: NextApiRequest, res: NextApiResponse) {
  // it should not be a react component
  //  res.json({status : 'ok', name: 'next'})
  // console.log('REQUEST BODY', req.body)
  // console.log('REQUEST BODY', req.body.username)
  // console.log('REQUEST Cookies', req.cookies)
  // console.log('REQUEST headers', req.headers)
  // console.log('REQUEST Query', req.query)  // in url http://localhost:3000/api/random-number?q=1 
  // console.log('REQUEST Query', req.query)  // in url http://localhost:3000/api/random-number?name="nextjs" 
  // console.log('REQUEST Query', req.query.name)  // in url http://localhost:3000/api/random-number?name="nextjs" 
  // console.log('REQUEST url', req.url) 

  // res.send('res send data')
  // res.setHeader('X-Custom-Header', 'This is a custom header')
  // res.setHeader('Set-Cookie', 'porgrammer = true')
  // res.statusCode = 200 //404
  // res.end('End of response') // to end the response stream
  res.json({ num: Math.floor(Math.random() * 10) });

}

// http://localhost:3000/api/random-number

```

### Simple JWT Auth

- install the package `npm i jsonwebtoken`
- install the types `npm i @types/jsonwebtoken --save-dev`


=========== End



