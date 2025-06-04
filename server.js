const express = require('express');
const app = express();
const path = require('path');

const PORT = 5500;

app.use(express.static(__dirname));

app.get('/', (req, res) => {
    return res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/projects', (req, res) => {
    return res.sendFile(path.join(__dirname, 'project.html'));
});

app.get('/publications', (req, res) => {
    return res.sendFile(path.join(__dirname, 'publications.html'));
});

app.get('/secondments', (req, res) => {
    return res.sendFile(path.join(__dirname, 'secondments.html'));
});

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
