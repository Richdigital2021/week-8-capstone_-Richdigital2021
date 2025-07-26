import React, { createContext, useState, useContext, useEffect } from "react";
import { useToast } from "@/hooks/use-toast";
import API from "@/utils/axiosConfig";

function mapBackendJobToFrontend(job) {
  return {
    id: job._id,
    title: job.jobTitle,
    company: job.companyName,
    location: job.location || "",
    jobType: job.jobType || "",
    salaryRange: job.salaryRange || "",
    applicationDate: job.applicationDate
      ? new Date(job.applicationDate).toISOString().split("T")[0]
      : "",
    applicationDeadline: job.applicationDeadline
      ? new Date(job.applicationDeadline).toISOString().split("T")[0]
      : "",
    status: (job.applicationStatus || "applied").toLowerCase(),
    resumeFile: job.resumeFile,
    coverLetterFile: job.coverLetterFile,
    interviews: [],
    contactEmail: "",
    contactPhone: "",
    jobPostingUrl: "",
    notes: "",
    nextStepsDate: "",
    contactPerson: "",
    source: "",
  };
}

const JobContext = createContext(undefined);

export const JobProvider = ({ children }) => {
  const [jobs, setJobs] = useState([]);
  const { toast } = useToast();

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const res = await API.get("/jobs");
        if (res.data.success) {
          setJobs(res.data.data.map(mapBackendJobToFrontend));
        }
      } catch (error) {
        toast({
          title: "Error loading jobs",
          description: error.response?.data?.message || "Something went wrong.",
        });
      }
    };

    fetchJobs();
  }, []);

  const addJob = async (job) => {
    const backendJob = {
      jobTitle: job.title,
      companyName: job.company,
      location: job.location,
      applicationDate: job.applicationDate,
      applicationDeadline: job.applicationDeadline,
      applicationStatus: job.status,
      jobType: job.jobType,
      salaryRange: job.salaryRange,
      resumeFile: job.resumeFile,
      coverLetterFile: job.coverLetterFile,
      source: job.source,
      contactPerson: job.contactPerson,
      contactEmail: job.contactEmail,
      contactPhone: job.contactPhone,
      jobPostingUrl: job.jobPostingUrl,
      notes: job.notes,
      nextStepsDate: job.nextStepsDate,
      interviews: job.interviews,
    };

    try {
      const res = await API.post("/jobs", backendJob);
      if (res.data.success) {
        setJobs((prev) => [
          ...prev,
          mapBackendJobToFrontend(res.data.data.job),
        ]);
        toast({
          title: "Job added",
          description: `${job.title} at ${job.company}`,
        });
      }
    } catch (error) {
      toast({
        title: "Failed to add job",
        description: error.response?.data?.message || error.message,
      });
    }
  };

  const updateJob = async (id, updatedJob) => {
    const backendJob = {};
    if (updatedJob.title) backendJob.jobTitle = updatedJob.title;
    if (updatedJob.company) backendJob.companyName = updatedJob.company;
    if (updatedJob.applicationDate)
      backendJob.applicationDate = updatedJob.applicationDate;
    if (updatedJob.applicationDeadline)
      backendJob.applicationDeadline = updatedJob.applicationDeadline;
    if (updatedJob.status) backendJob.applicationStatus = updatedJob.status;
    if (updatedJob.jobType) backendJob.jobType = updatedJob.jobType;

    try {
      const res = await API.put(`/jobs/${id}`, backendJob);
      if (res.data.success) {
        setJobs((prev) =>
          prev.map((job) =>
            job.id === id ? mapBackendJobToFrontend(res.data.data) : job
          )
        );
        toast({ title: "Job updated", description: "Update successful." });
      }
    } catch (error) {
      toast({
        title: "Update failed",
        description: error.response?.data?.message || error.message,
      });
    }
  };

  const deleteJob = async (id) => {
    try {
      const res = await API.delete(`/jobs/${id}`);
      if (res.data.success) {
        setJobs((prev) => prev.filter((job) => job.id !== id));
        toast({
          title: "Job deleted",
          description: "The job has been removed.",
        });
      }
    } catch (error) {
      toast({
        title: "Delete failed",
        description: error.response?.data?.message || error.message,
      });
    }
  };

  const getJob = (id) => jobs.find((job) => job.id === id);

  return (
    <JobContext.Provider value={{ jobs, addJob, updateJob, deleteJob, getJob }}>
      {children}
    </JobContext.Provider>
  );
};

export const useJobs = () => {
  const context = useContext(JobContext);
  if (!context) {
    throw new Error("useJobs must be used within a JobProvider");
  }
  return context;
};
