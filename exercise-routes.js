const router = require("express").Router();
const {
  createResistance,
  getResistanceById,
  deleteResistance,
} = require("../../controllers/resistance-controller");

const {
  createCardio,
  getCardioById,
  deleteCardio,
} = require("../../controllers/cardio-controller");


const { authMiddleware } = require('../../utils/auth');


router.use(authMiddleware);

// /api/exercise/cardio
router.route("/cardio").post(createCardio);

// /api/exercise/cardio/:id
router.route("/cardio/:id").get(getCardioById).delete(deleteCardio);

// /api/exercise/resistance
router.route("/resistance").post(createResistance);

// /api/exercise/resistance/:id
router.route("/resistance/:id").get(getResistanceById).delete(deleteResistance);

module.exports = router;
