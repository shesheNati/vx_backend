const express = require("express")
const assetRouter = express.Router()
const {findAllAsset, createAsset, findAssetById, deleteAssetById, updateAssetById, findAssetsByEmployeeId } = require ("../controller/asset.controller")

//Router() :creamos un enrutador que nos permite manejar las rutas  



assetRouter.get("/", findAllAsset)
assetRouter.get("/:id", findAssetById)
assetRouter.get("/employee_id/:id", findAssetsByEmployeeId)
assetRouter.post("/", createAsset)
assetRouter.delete("/:id", deleteAssetById)
assetRouter.put("/:id", updateAssetById)



// cuando yo acceda a la ruta raiz, de ete enrutador va a a manejar el 
//request: peticion q estamos haciendo y manejamos la respuesta q se va
// a dar, mediante el objeto de response yo puedo enviar algo



module.exports = assetRouter;

//en este archivo es donde estas fciones se conectan a la bd
