const express = require("express");
const router = express.Router();
const {
  addJob,
  getJobs,
  deleteJobs,
  editJob,
  getDetails,
} = require("../controllers/job.controllers");

router.post("/", addJob);
router.get("/", getJobs);
router.delete(`/:id`, deleteJobs);
router.put(`/:id`, editJob);
router.get(`/:id`, getDetails);

module.exports = router;
