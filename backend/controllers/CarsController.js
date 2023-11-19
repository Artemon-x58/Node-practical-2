const carModel = require("../models/carModel");
const asyncHandler = require("express-async-handler");

class CarsController {
  add = asyncHandler(async (req, res) => {
    const { title, color } = req.body;
    // Контрольна валідація
    if (!title || !color) {
      res.status(400);
      throw new Error("Provide all required fields");
    }
    const car = await carModel.create({ ...req.body });
    res.status(201).json({ code: 201, car });
  });
  //Валідний існуючий.
  //Валідний неіснуючий
  //Невалідний
  getAll = asyncHandler(async (req, res) => {
    const cars = await carModel.find({});
    res.status(200).json({ code: 200, cars, qty: cars.length });
  });
  getOne = asyncHandler(async (req, res) => {
    const { id } = req.params;
    const car = await carModel.findById(id);
    if (!car) {
      res.status(404);
      throw new Error(`Car not found: ${id}`);
    }
    res.status(200).json({ code: 200, car });
  });
  update = asyncHandler(async (req, res) => {
    const { id } = req.params;
    const car = await carModel.findByIdAndUpdate(
      id,
      { ...req.body },
      { runValidators: true }
    );
    if (!car) {
      res.status(404);
      throw new Error(`Car not found: ${id}`);
    }
    res.status(200).json({ code: 200, car });
  });
  remove = asyncHandler(async (req, res) => {
    const { id } = req.params;
    const car = await carModel.findByIdAndDelete(id);
    if (!car) {
      res.status(404);
      throw new Error(`Car not found: ${id}`);
    }
    res.status(200).json({ code: 200, car });
  });
}

module.exports = new CarsController();
