const express = require("express")
const employeeRouter = express.Router()
const {findAllEmployee, createEmployee, findEmployeeById, deleteEmployeeById, updateEmployeeById} = require ("../controller/employee.controller")

//Router() :creamos un enrutador que nos permite manejar las rutas  



employeeRouter.get("/", findAllEmployee)
employeeRouter.get("/:id", findEmployeeById)
employeeRouter.post("/", createEmployee)
employeeRouter.delete("/:id", deleteEmployeeById)
employeeRouter.put("/:id", updateEmployeeById)



// cuando yo acceda a la ruta raiz, de ete enrutador va a a manejar el 
//request: peticion q estamos haciendo y manejamos la respuesta q se va
// a dar, mediante el objeto de response yo puedo enviar algo



module.exports = employeeRouter;

//en este archivo es donde estas fciones se conectan a la bd
