import express from "express";
import Job from "../model/job.model.js";

const router = express.Router();

const addJob = async (req, res) => {
  try {
    const data = new Job(req.body);
    await data.save();
    res.status(201).json(data);
  } catch (error) {
    res.status(400).json({ msg: "Error in Posting Job", error: error.message });
  }
};

const getJobs = async (req, res) => {
  try {
    const data = await Job.find();
    if (data.length > 0) {
      res.status(200).json(data);
    } else {
      res.status(404).json({ msg: "Jobs not found" });
    }
  } catch (error) {
    res.status(500).json({ msg: "Error in Finding Job", error: error.message });
  }
};

const deleteJobs = async (req, res) => {
  try {
    const data = await Job.findByIdAndDelete(req.params.id);
    if (data) {
      res.status(200).json({ msg: "Job Deleted Successfully", data });
    } else {
      res.status(404).json({ msg: "No job to delete" });
    }
  } catch (error) {
    res
      .status(500)
      .json({ msg: "Error in Deleting Job", error: error.message });
  }
};

const editJob = async (req, res) => {
  try {
    const data = await Job.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (data) {
      res.status(200).json({ msg: "Job Updated Successfully", data });
    } else {
      res.status(404).json({ msg: "No job to update" });
    }
  } catch (error) {
    res
      .status(500)
      .json({ msg: "Error in Updating Job", error: error.message });
  }
};
const getDetails = async (req, res) => {
  try {
    const data = await Job.findOne({ _id: req.params.id });
    if (data) {
      res.status(200).json({ msg: "Job details Successfully", data });
    } else {
      res.status(404).json({ msg: "No job to find" });
    }
  } catch (error) {
    res
      .status(500)
      .json({ msg: "Error in getting details of Job", error: error.message });
  }
};

export { addJob, getJobs, deleteJobs, editJob, getDetails };
