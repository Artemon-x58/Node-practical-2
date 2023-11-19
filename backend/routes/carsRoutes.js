// Cannot GET /api/v1/cars
const express = require("express");
const carsController = require("../controllers/CarsController");
const carSchema = require("../schemas/carSchema");
const carBodyValidate = require("../middlewares/carBodyValidate");
const validateId = require("../middlewares/validateId");

const carsRoutes = express.Router();

// Додати машину
carsRoutes.post("/cars", carBodyValidate(carSchema), carsController.add);
//Отримати всі машини
carsRoutes.get("/cars", carsController.getAll);
//Отримати одну машину
carsRoutes.get("/cars/:id", validateId, carsController.getOne);
//Оновити машину
carsRoutes.put("/cars/:id", validateId, carsController.update);
//Видалити машину
carsRoutes.delete("/cars/:id", validateId, carsController.remove);

module.exports = carsRoutes;
