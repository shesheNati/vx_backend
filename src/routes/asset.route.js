const express = require("express");
const assetRouter = express.Router();
const {
  findAllAsset,
  createAsset,
  findAssetById,
  deleteAssetById,
  updateAssetById,
  findAssetsByEmployeeId,
} = require("../controller/asset.controller");



assetRouter.get("/", findAllAsset);
assetRouter.get("/:id", findAssetById);
assetRouter.get("/employee_id/:id", findAssetsByEmployeeId);
assetRouter.post("/", createAsset);
assetRouter.delete("/:id", deleteAssetById);
assetRouter.put("/:id", updateAssetById);


module.exports = assetRouter;


