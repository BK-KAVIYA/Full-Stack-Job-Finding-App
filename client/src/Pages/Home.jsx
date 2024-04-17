import React, { useEffect, useState } from "react";
import Banner from "../components/Banner/Banner";
import Card from "../components/Card/Card";
import Jobs from "./Jobs";
import Sidebar from "../SideBar/Sidebar";
import Newslatter from "../components/NewsLatter/Newslatter";
import Hero from "../components/Hero";
import Services from "../components/Services";

export const Home = () => {
  const [selectCategory, setSelectCategory] = useState(null);
  const [jobs, setJobs] = useState([]);
  const [isloading, setIsloading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const itemperpage = 6;

  useEffect(() => {
    setIsloading(true);
    fetch("/poxy/jobs/find-jobs")
      .then((res) => res.json())
      .then((data) => {
        // Assuming `data` contains the entire response object
        const { data: jobsData } = data; // Extracting the 'data' property from the response
        setJobs(jobsData); // Setting 'jobsData' to state
        setIsloading(false);
      })
      .catch((error) => {
        // Handle errors here
        console.error("Error fetching jobs:", error);
        setIsloading(false);
      });
  }, []);

  const [query, setQuery] = useState("");
  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  // filter job by title
  const filteredItems = jobs.filter(
    (job) => job.jobTitle.toLowerCase().indexOf(query.toLowerCase()) !== -1
  );

  // Radio based button filtering
  const handleChange = (e) => {
    setSelectCategory(e.target.value);
  };

  // Button based filtering function
  const handleClick = (e) => {
    setSelectCategory(e.target.value);
  };

  // calculate the index range
  const calculatepageRange = () => {
    const startIndex = (currentPage - 1) * itemperpage;
    const endIndex = startIndex + itemperpage;
    return { startIndex, endIndex };
  };

  // function for the next page
  const nextPage = () => {
    if (currentPage < Math.ceil(filteredItems.length / itemperpage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  // function for the previous page
  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  //Main function
  const filterData = (jobs, selected, query) => {
    let filteredJobs = jobs;
    if (query) {
      filteredJobs = filteredItems;
    }
    if (selected) {
      filteredJobs = filteredJobs.filter(
        ({
          jobLocation,
          maxPrice,
          experienceLevel,
          salaryType,
          employmentType,
          postingDate,
        }) =>
          jobLocation.toLowerCase() === selected.toLowerCase() ||
          parseInt(maxPrice) <= parseInt(selected) ||
          salaryType.toLowerCase() === selected.toLowerCase() ||
          experienceLevel.toLowerCase() === selected.toLowerCase() ||
          employmentType.toLowerCase() === selected.toLowerCase() ||
          postingDate >= selected
      );
    }
    const { startIndex, endIndex } = calculatepageRange();
    filteredJobs = filteredJobs.slice(startIndex, endIndex);
    return filteredJobs.map((data, i) => <Card key={i} data={data} />);
  };

  const result = filterData(jobs, selectCategory, query);
  console.log(result);
  return (
    <div>
      <Hero />
      <Services />
      <Banner query={query} handleInputChange={handleInputChange} />
      {/* main content */}
      <div className="bg-[#FAFAFA] md:grid grid-cols-4 gap-8 lg:px-24 py-12">
        <div className="bg-white p-4 rounded">
          <Sidebar handleChange={handleChange} handleClick={handleClick} />
        </div>
        <div className="col-span-2 bg-white rounded-sm">
          {isloading ? (
            <p className="font-medium">Loading...</p>
          ) : result.length > 0 ? (
            <Jobs result={result} />
          ) : (
            <>
              <h3 className="text-lg font-bold mb-2"> {result.length} Jobs</h3>
              <p>No Data Found!</p>
            </>
          )}
          {result.length > 0 ? (
            <div className="flex justify-center mt-4 space-x-8">
              <button
                onClick={prevPage}
                disabled={currentPage === 1}
                className="hover:underline"
              >
                Previous
              </button>
              <span className="mx-2">
                Page {currentPage} of{" "}
                {Math.ceil(filteredItems.length / itemperpage)}
              </span>
              <button
                onClick={nextPage}
                disabled={
                  currentPage === Math.ceil(filteredItems.length / itemperpage)
                }
                className="hover:underline"
              >
                Next
              </button>
            </div>
          ) : (
            " "
          )}
        </div>
        <div className="bg-white p-4 rounded">
          <Newslatter />
        </div>
      </div>
    </div>
  );
};

export default Home;
