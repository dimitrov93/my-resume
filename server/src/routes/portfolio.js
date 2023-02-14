const router = require('express').Router();
const portfolioService = require('../services/portfolioService');

router.get('/', async (req,res) => {
    try {
        const portfolios = await portfolioService.find()
        res.status(200).json(portfolios);
      } catch (err) {
        res.status(500).json(err);
      }

});


router.post("/create", async (req, res) => {
    const data = {...req.body};
    try {
      const portData = await portfolioService.create(data);
      console.log(portData);
      res.status(200).json(portData);
    } catch (err) {
      res.status(500).json(err);
    }
  });

//DELETE
router.delete("/:id", async (req, res) => {
    try {
      await portfolioService.deletePortoflio(req.params.id);
      res.status(200).json("Product has been deleted...");
    } catch (err) {
      res.status(500).json(err);
    }
  });

// //Update
// router.put("/:id", async (req, res) => {
//   try {
//     console.log(req.params.id)
//     const updateName = await headerService.update(req.params.id, req.body)
//     res.status(200).json(updateName);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// })

module.exports = router;