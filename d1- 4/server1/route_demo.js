const express = require('express');
const app = express();
app.use(express.json());
// 1. DUMMY DATА
const customers = [
{ id: 1, name: 'Suresh' },
{ id: 2, name: 'Mahesh' }
];

app.get('/customers', (req, res) => {
res.json(customers);
});

app.listen(3001, ()=>{
    console.log("server istarted on port 3001")
});