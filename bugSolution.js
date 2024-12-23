const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/users', (req, res) => {
  res.send('List of Users');
});

app.use((req,res,next)=>{ // this middleware should always be after any other route
    res.send('I will always be sent'); // This will interrupt normal flow of other routes
});
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});