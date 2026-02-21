import express from "express";

const apple = express();

apple.get('/owner', (req, res) => {
  res.json({ "owner": "fayan" });
});
apple.listen(5001, () => {
  console.log("🚀 Counter Running at port 5001");
});