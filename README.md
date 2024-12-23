# Express.js Middleware Order Bug

This repository demonstrates a common yet easily overlooked issue in Express.js applications: improper middleware placement.  Incorrect middleware order can lead to unexpected behavior where subsequent routes never execute.

## Bug Description
The `bug.js` file shows an example where a middleware function is placed incorrectly. This middleware always sends a response ('I will always be sent'), preventing the '/users' route from ever being reached.

## Solution
The `bugSolution.js` file corrects the issue by moving the middleware function to its correct position. The correct placement allows the other routes to behave as expected. 

## How to reproduce
1. Clone the repo.
2. Navigate to the directory.
3. Run `node bug.js`. You'll see 'I will always be sent' as the response regardless of request url.
4. Run `node bugSolution.js`. You'll see the expected response based on request url. 