const express = require("express");
const employeeRouter = express.Router();
const {
  findAllEmployee,
  createEmployee,
  findEmployeeById,
  deleteEmployeeById,
  updateEmployeeById,
} = require("../controller/employee.controller");

employeeRouter.get("/", findAllEmployee);
employeeRouter.get("/:id", findEmployeeById);
employeeRouter.post("/", createEmployee);
employeeRouter.delete("/:id", deleteEmployeeById);
employeeRouter.put("/:id", updateEmployeeById);

module.exports = employeeRouter;
