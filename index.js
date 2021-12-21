import express from "express";
import router from './routes/index.js';

const app = express();

app.use('/api/v1', router);

app.use('*', (req, res) => {
    res.status(404).send()
})

const PORT = 12345;

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));