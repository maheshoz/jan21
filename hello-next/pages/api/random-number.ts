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
