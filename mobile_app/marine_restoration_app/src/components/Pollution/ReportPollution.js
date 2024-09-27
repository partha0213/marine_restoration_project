// ReportPollution.js
import React, { useState } from 'react';
import axios from 'axios';

const ReportPollution = () => {
  const [reportData, setReportData] = useState({
    reporterName: '',
    pollutionType: '',
    location: '',
    description: ''
  });

  const handleChange = (e) => {
    setReportData({ ...reportData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/report', reportData);
      alert('Report submitted successfully');
    } catch (error) {
      console.error('Error submitting report:', error);
    }
  };

  return (
    <div>
      <h2>Report Pollution</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="reporterName"
          placeholder="Your Name"
          value={reportData.reporterName}
          onChange={handleChange}
        />
        <input
          type="text"
          name="pollutionType"
          placeholder="Type of Pollution"
          value={reportData.pollutionType}
          onChange={handleChange}
        />
        <input
          type="text"
          name="location"
          placeholder="Location"
          value={reportData.location}
          onChange={handleChange}
        />
        <textarea
          name="description"
          placeholder="Description"
          value={reportData.description}
          onChange={handleChange}
        />
        <button type="submit">Submit Report</button>
      </form>
    </div>
  );
};

export default ReportPollution;
