const express = require("express");
const app = express();
const PORT = process.env.PORT || 8082;
const path = require("path");
const homeRouter = require("./routes/home");
const prodsRouter = require("./routes/products");

/* --- PORT --- */

app.listen(PORT, () => {
    console.log(`Escuchando en http://localhost:${PORT}`);
});

/* --- MIDDLEWARES --- */

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, "public")));

/* --- ROUTES --- */

app.use("/", homeRouter);
app.use("/api/prods", prodsRouter);