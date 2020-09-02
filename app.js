import express from 'express';


const app = express();


//  Routes
app.get('/', (req, res) => {
     res.send('we are on home');
});

app.get('/posts', (req, res) => {
     res.send('we are on posts');
});


// serve
app.listen(3000)