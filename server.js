import express from "express";

const app = express();

app.get("/api/customers", (req, res) => {
  const customers = [
    { id: 1, firstName: "John", lastName: "Smith" },
    { id: 2, firstName: "Joe", lastName: "Green" },
    { id: 3, firstName: "Ted", lastName: "Lee" }
  ];

  res.json(customers);
});

const port = 5000;

app.listen(port, () => `Server running on port ${port}`);
