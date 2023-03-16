const employeeModel = require("../model/employee.model")

const findAllEmployee = async (req, res) => {
    const employees = await employeeModel.findAllEmployee()

    res.json({ data: employees })
}

const createEmployee = async (req, res) => {
    const values = { ...req.body }

    const result = await employeeModel.createEmployee(values)

    const { insertId } = result

    const employee = await employeeModel.findById(insertId)


    res.json({ data: employee })
}

const findEmployeeById = async (req, res) => {
    
    const { id } = req.params

    const employee = await employeeModel.findById(id)

    res.json({ employee })
}

const deleteEmployeeById = async (req, res) => {
    
    const { id } = req.params

    await employeeModel.deleteById(id)

    res.json({ mensaje: `usuario ${id} eliminado`})
    
}

const updateEmployeeById = async (req, res) => {
    
    const { id } = req.params

    const values = { ...req.body }
  
    await employeeModel.updateById(id, values)

    const employee = await employeeModel.findById(id)



    res.json({ employee })

}

module.exports = {
    findAllEmployee: findAllEmployee,
    createEmployee: createEmployee,
    findEmployeeById: findEmployeeById,
    deleteEmployeeById: deleteEmployeeById,
    updateEmployeeById: updateEmployeeById 
}