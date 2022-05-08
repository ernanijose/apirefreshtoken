import express from 'express';

const app = express();

const PORT_APP = 3838 || process.env.PORT;

app.listen(PORT_APP, () => {
    console.log(`Servidor rodando na porta: ${PORT_APP}`);
});