const express = require('express');
const fs = require('fs');


const filePath = 'data.json';
const app = express();
const PORT = 4000;

//New imports
const http = require('http').Server(app);
const cors = require('cors');

app.use(cors());

app.get('/', (req, res) => {
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      res.status(500).send('Erreur lors de la lecture du fichier');
      return;
    }
    res.json(JSON.parse(data));
    console.log(data);
  });
});

app.put('/', express.json(), (req, res) => {
  const newState = req.body.serverState;
  fs.writeFile(filePath, JSON.stringify({ serverState: newState }), (err) => {
    console.log(newState);
    if (err) {
      res.status(500).send('Erreur lors de l\'écriture dans le fichier');
      return;
    }
    res.send('État du bouton mis à jour avec succès');
  });
});


http.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});