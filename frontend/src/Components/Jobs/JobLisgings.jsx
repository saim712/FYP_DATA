import React, { useState, useEffect } from 'react';
import axios from 'axios';
import JobList1 from './JobList1';
import { Link } from 'react-router-dom';
import Spinner from './Spinner';

function JobListings({ lessjobsshow = false }) {
  const [jobsdata, setJobsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState(''); // State to hold search term
  const [filteredJobs, setFilteredJobs] = useState([]); // State to hold filtered jobs
  
  // Define the job list based on the search term
  const joblists = lessjobsshow ? filteredJobs.slice(0, 3) : filteredJobs;

  // Fetch data when the component mounts or when search term changes
  useEffect(() => {
    const fetchData = async () => {
      try {
        const apiUrl = lessjobsshow 
          ? 'http://localhost:3000/api/users/fetjobs?_limiit=3' 
          : 'http://localhost:3000/api/users/fetjobs';
        
        const res = await axios.get(apiUrl);
        setJobsData(res.data); // Save all jobs in jobsdata
        setFilteredJobs(res.data); // Initialize filteredJobs with all data

      } catch (error) {
        console.log('Error Fetching data :', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [lessjobsshow]);

  // Apply filter to the jobs data
  useEffect(() => {
    const filtered = jobsdata.filter(job =>
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) // Case insensitive search for job title
    );
    setFilteredJobs(filtered);
  }, [searchTerm, jobsdata]); // Rerun when searchTerm or jobsdata changes

  // Handle the search term change
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <section className="bg-blue-50 px-4 py-10">
      <div className="container-xl lg:container m-auto">
        <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
          {lessjobsshow ? 'Recent Jobs' : 'All Jobs'}
        </h2>

        {/* Search input field */}
        <div className="mb-6 text-center">
          <input
            type="text"
            placeholder="Search for a job title..."
            value={searchTerm}
            onChange={handleSearchChange}
            className="p-2 border rounded-md"
          />
        </div>

        {/* Job Listings */}
        {loading ? (
          <Spinner loading={loading} />
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {joblists.map((job, index) => (
              <JobList1 job={job} key={index} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default JobListings;
