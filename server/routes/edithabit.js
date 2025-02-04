const express = require('express');
const dbController = require('../controllers/dbController');
const userController = require('../controllers/userController');
const habitController = require('../controllers/habitController')

const router = express.Router();

// add habit to a user ROUTE HANDLER
router.post(
  '/add',
  userController.assignHabit,
  dbController.assignHabit,
  (req, res) => {
    return res.status(200).json(res.locals.habitData);
  }
);

// update today's record ROUTE HANDLER
router.patch(
  '/update',
  habitController.updateHabit,
  (req, res) => {
    return res.status(200).json('Habit updated!');
  }
);

router.patch(
  '/delete',
  habitController.removeHabit,(req, res) => {
    return res.status(200).json('Habit deleted!')
  }
)

module.exports = router;
