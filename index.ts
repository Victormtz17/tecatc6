const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json()); // Permite manejar datos JSON en las solicitudes

app.get('/', (req, res) => {
    res.send('¡Servidor funcionando!');
});

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
