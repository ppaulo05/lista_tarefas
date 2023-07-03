const express = require('express'); 
const tarefaController = require('./controllers/tarefaController'); 
const app = express(); 
const port = 3000; 
app.set('view engine', 'ejs'); 
app.use(express.urlencoded({ extended: true })); 
app.get('/tarefas', tarefaController.getTarefas); 
app.post('/tarefas', tarefaController.addTarefa); 
app.listen(port, () => { 
console.log(`Servidor rodando em http://localhost:${port}`);
});
