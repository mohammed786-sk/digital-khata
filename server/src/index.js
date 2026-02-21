import express from "express";
import route from "./routes/route.js";
import jsonRoute from "./routes/jsonroute.js";

const apple = express();

apple.use("/", route);
apple.use("/json", jsonRoute);

apple.get('/owner', (req, res) => {
  res.json({ owner: "ramesh kaka" });
});

apple.get('/customers/:id', (req, res) => {
  const customerId = req.params.id;
  res.send(`Looking for Customer ID: ${customerId}`);
});
apple.use(express.json());
apple.post('/customer', (req, res) => {
    const newCustomer = req.body;
    console.log('New Customer:', newCustomer);
    res.status(201).json({ message: "customer saved", data: newCustomer
    })
});

apple.listen(5001, () => {
  console.log("🚀 Counter Running at port 5001");
});