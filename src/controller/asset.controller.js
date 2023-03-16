const assetModel = require("../model/asset.model")

const findAllAsset = async (req, res) => {
    const assets = await assetModel.findAllAsset()

    res.json({ data: assets })
}

const createAsset = async (req, res) => {
    const values = { ...req.body }

    const result = await assetModel.createAsset(values)

    const { insertId } = result

    const asset = await assetModel.findById(insertId)


    res.json({ data: asset })
}

const findAssetById = async (req, res) => {
    
    const { id } = req.params

    const asset = await assetModel.findById(id)

    res.json({ asset })

}

const findAssetsByEmployeeId = async (req, res) => {
    
    const { id } = req.params

    const assets = await assetModel.findAssetsByEmployeeId(id)

    res.json({ assets })
}

const deleteAssetById = async (req, res) => {
    
    const { id } = req.params

    await assetModel.deleteById(id)

    res.json({ mensaje: `asset ${id} eliminado`})
    
}

const updateAssetById = async (req, res) => {
    
    const { id } = req.params

    const values = { ...req.body }
  
    await assetModel.updateById(id, values)

    const asset = await assetModel.findById(id)



    res.json({ asset })

}

module.exports = {
    findAllAsset: findAllAsset,
    createAsset: createAsset,
    findAssetById: findAssetById,
    deleteAssetById: deleteAssetById,
    updateAssetById: updateAssetById,
    findAssetsByEmployeeId: findAssetsByEmployeeId
}