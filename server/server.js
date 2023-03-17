const express = require('express');
const cors = require('cors')
const app = express();
app.use(cors())

require('./config/mongoose.config');
require('./routes/product.routes')(app);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(8000, () => console.log("The server is all fired up on port 8000"));