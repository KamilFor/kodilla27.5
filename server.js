const express = require('express');

const app = express();

app.use(express.urlencoded({ extended: false }));

app.use(express.json());

app.use('/concerts', require('./routers/concerts'));

app.use('/seats', require('./routers/seats'));

app.use('/', require('./routers/testimonials'));

app.listen(8000, () => {
  console.log(' Server is runing on port: 8000');
});
