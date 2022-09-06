const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

app.get('/', (req, res) => {
  res.status(200).json({ message: "Hello there!!!!" });
})

const port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log('listening on port ' + port);
});