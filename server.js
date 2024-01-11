   const app = require('express')()

   // express middleware
   const bodyParser = require('body-parser')
   app.use(bodyParser.urlencoded({ extended: false }))
   app.use(bodyParser.json())




// app.get('/webhook', (req, res) => {

//     const VERIFY_TOKEN = "random string"
//     // Parse the query params
//     console.log(req.query);
//     const mode = req.query['hub.mode'];
//     const token = req.query['hub.verify_token'];
//     const challenge = req.query['hub.challenge'];

//     // Checks if a token and mode is in the query string of the request
//     if (mode && token) {

//       // Checks the mode and token sent is correct
//       if (mode === 'subscribe' && token === VERIFY_TOKEN) {

//         // Responds with the challenge token from the request
//         console.log('WEBHOOK_VERIFIED');
//         res.status(200).send(challenge);

//       } else {
//         // Responds with '403 Forbidden' if verify tokens do not match
//         res.sendStatus(403);      
//       }
//     }
// })


app.post('/webhook', (req, res) => {
	try {
		console.log(req.body);
	}
	catch(error) {
		console.error(error);
	}
})

   const PORT = 5000
   // start server  
   app.listen(PORT, () => console.log(`Listening on port ${PORT}`))



