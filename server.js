const express = require('express');
const path = require('path');
const app = express();
app.use(express.json());
app.use(express.static(path.join(__dirname, '/public')));


let scores = [];
app.post('/api/save-score', (req,res)=>{
  const { score } = req.body || {};
  scores.push({ score, ts: Date.now() });
  res.json({ ok:true, count:scores.length });
});


app.get('/api/progress', (req,res)=> res.json(scores.slice(-20)));

const PORT = 4444;
app.listen(PORT, ()=> console.log(`http://localhost:${PORT}`));
