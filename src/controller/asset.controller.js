const assetModel = require("../model/asset.model")

const findAllAsset = async (req, res) => {
   try {
    const assets = await assetModel.findAllAsset()

    res.status(200).json({ data: assets })
    
   } catch (error) {
    
        res.status(500).json({msg: "Algo salió mal", error: error})
   }
}

const createAsset = async (req, res) => {
    try {
    const values = { ...req.body }

    const result = await assetModel.createAsset(values)

    const { insertId } = result

    const asset = await assetModel.findById(insertId)

    res.status(200).json({ data: asset })

    } catch (error) {
        
        res.status(500).json({msg: "Algo salió mal", error: error})
    }
}

const findAssetById = async (req, res) => {
    
    try {
        
        const { id } = req.params

        const asset = await assetModel.findById(id)

        res.status(200).json({ asset })

    } catch (error) {

        res.status(500).json({msg: "Algo salió mal", error: error})
    }

}

const findAssetsByEmployeeId = async (req, res) => {
    
    try {
        const { id } = req.params

        const assets = await assetModel.findAssetsByEmployeeId(id)

        res.status(200).json({ assets })

    } catch (error) {

        res.status(500).json({msg: "Algo salió mal", error: error})

    }
}

const deleteAssetById = async (req, res) => {
    
    try {
        const { id } = req.params

        await assetModel.deleteById(id)

        res.status(200).json({ mensaje: `asset ${id} eliminado`})
    
    } catch (error) {
        
        res.status(500).json({msg: "Algo salió mal", error: error})
    
    }
    
}

const updateAssetById = async (req, res) => {
    
    try {
        
        const { id } = req.params

        const values = { ...req.body }
  
        await assetModel.updateById(id, values)

        const asset = await assetModel.findById(id)

        res.status(200).json({ asset })
    
    } catch (error) {
        
        res.status(500).json({msg: "Algo salió mal", error: error})
    
    }

}

module.exports = {
    findAllAsset: findAllAsset,
    createAsset: createAsset,
    findAssetById: findAssetById,
    deleteAssetById: deleteAssetById,
    updateAssetById: updateAssetById,
    findAssetsByEmployeeId: findAssetsByEmployeeId
}