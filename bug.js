const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

//Uncommon error:  Improper use of middleware leading to unexpected behavior
//Example: Incorrect order of middleware or middleware that modifies the response prematurely
app.use((req,res,next)=>{ // this middleware should always be after any other route
    res.send('I will always be sent'); // This will interrupt normal flow of other routes
});
app.get('/users', (req, res) => {
  res.send('List of Users');
});