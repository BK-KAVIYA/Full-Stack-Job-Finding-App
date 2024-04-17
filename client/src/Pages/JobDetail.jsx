import { useEffect, useState } from "react";
//import { Linkedin } from "../assets";
import moment from "moment";
import { AiOutlineSafetyCertificate } from "react-icons/ai";
import { useParams } from "react-router-dom";
import jobs from "../../public/jobs.json";
import CustomButton from "../components/JobPost/CustomButton";
import JobCard from "../components/JobPost/JobCard";
import Card from "../components/Card/Card";

const JobDetail = () => {
  const params = useParams();
  const id = parseInt(params.id);
  const [job, setJob] = useState(null);
  const [similarjob, setSimilarJob] = useState(null);
  const [selected, setSelected] = useState("0");

  useEffect(() => {
    const fetchJob = async () => {
      try {
        const response = await fetch(`/poxy/jobs/get-job-detail/${id}`);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setJob(data.data); // Assuming the job data is nested under 'data' key
        setSimilarJob(data.similarJobs); // This is the array of similar jobs
        console.log(similarJobs);
      } catch (error) {
        console.error("Error fetching job:", error);
      }
    };

    fetchJob();
  }, [id]);

  return (
    <div className="container mx-auto mt-0 text-gray-700">
      <h1 className="text-3xl font-semibold py-5">Job Details</h1>
      <div className="w-full flex flex-col md:flex-row gap-10">
        {/* LEFT SIDE */}
        <div className="w-full h-fit md:w-2/3 2xl:2/4 bg-purple-200 px-5 py-10 md:px-10 shadow-md">
          <div className="w-full flex items-center justify-between">
            <div className="w-3/4 flex gap-2">
              <img
                src={job?.company[0]?.profileUrl} // Update company logo parameter
                alt={job?.company[0]?.name} // Update company name parameter
                className="w-20 h-20 md:w-24 md:h-20 rounded"
              />

              <div className="flex flex-col">
                <p className="text-xl font-semibold text-gray-600">
                  {job?.jobTitle}
                </p>
                <span className="text-base">{job?.location}</span>{" "}
                {/* Update job location parameter */}
                <span className="text-base text-blue-600">
                  {job?.company[0]?.name} {/* Update company name parameter */}
                </span>
                <span className="text-gray-500 text-sm">
                  {moment(job?.createdAt).fromNow()}{" "}
                  {/* Update posting date parameter */}
                </span>
              </div>
            </div>

            <div className="">
              <AiOutlineSafetyCertificate className="text-3xl text-blue-500" />
            </div>
          </div>

          <div className="w-full flex flex-wrap md:flex-row gap-2 items-center justify-between my-10">
            <div className="bg-[#bdf4c8] w-40 h-16 rounded-lg flex flex-col items-center justify-center">
              <span className="text-sm">Salary</span>
              <p className="text-lg font-semibold text-gray-700">
                {job?.salary} {/* Update salary parameter */}
              </p>
            </div>

            <div className="bg-[#bae5f4] w-40 h-16 rounded-lg flex flex-col items-center justify-center">
              <span className="text-sm">Job Type</span>
              <p className="text-lg font-semibold text-gray-700">
                {job?.jobType} {/* Update job type parameter */}
              </p>
            </div>

            <div className="bg-[#fed0ab] w-40 h-16 px-6 rounded-lg flex flex-col items-center justify-center">
              <span className="text-sm">No. of Applicants</span>
              <p className="text-lg font-semibold text-gray-700">
                {job?.applicants?.length}{" "}
                {/* Update number of applicants parameter */}
              </p>
            </div>

            <div className="bg-[#cecdff] w-40 h-16 px-6 rounded-lg flex flex-col items-center justify-center">
              <span className="text-sm">No. of Vacancies</span>
              <p className="text-lg font-semibold text-gray-700">
                {job?.vacancies} {/* Update number of vacancies parameter */}
              </p>
            </div>
          </div>

          <div className="w-full flex gap-4 py-5">
            <CustomButton
              onClick={() => setSelected("0")}
              title="Job Description"
              containerStyles={`w-full flex items-center justify-center py-3 px-5 outline-none rounded-full text-sm ${
                selected === "0"
                  ? "bg-purple-600 text-white"
                  : "bg-white text-black border border-gray-300"
              }`}
            />

            <CustomButton
              onClick={() => setSelected("1")}
              title="Company"
              containerStyles={`w-full flex items-center justify-center  py-3 px-5 outline-none rounded-full text-sm ${
                selected === "1"
                  ? "bg-black text-white"
                  : "bg-white text-black border border-gray-300"
              }`}
            />
          </div>

          <div className="my-6">
            {selected === "0" ? (
              <>
                <p className="text-xl font-semibold">Job Description</p>
                <span className="text-base">{job?.detail[0]?.desc}</span>{" "}
                {/* Update job description parameter */}
                {job?.detail[0]?.requirement && (
                  <>
                    <p className="text-xl font-semibold mt-8">Requirement</p>
                    <span className="text-base">
                      {job?.detail[0]?.requirement}{" "}
                      {/* Update job requirement parameter */}
                    </span>
                  </>
                )}
              </>
            ) : (
              <>
                <div className="mb-6 flex flex-col">
                  <p className="text-xl text-blue-600 font-semibold">
                    {job?.company[0]?.name}{" "}
                    {/* Update company name parameter */}
                  </p>
                  <span className="text-base">{job?.company[0]?.location}</span>{" "}
                  {/* Update company location parameter */}
                  <span className="text-sm">
                    {job?.company[0]?.email}{" "}
                    {/* Update company email parameter */}
                  </span>
                </div>
                <p className="text-xl font-semibold">About Company</p>
                <span>{job?.company[0]?.about}</span>{" "}
                {/* Update company about parameter */}
              </>
            )}
          </div>

          <div className="w-full">
            <CustomButton
              title="Apply Now"
              containerStyles={`w-full flex items-center justify-center text-white bg-purple-600 py-3 px-5 outline-none rounded-full text-base`}
            />
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="w-full md:w-1/3 2xl:w-2/4 p-5 mt-20 md:mt-0">
          <p className="text-gray-500 font-semibold">Similar Job Posts</p>

          <div className="w-full flex flex-wrap gap-4">
            {similarjob &&
              similarjob.map((job, index) => <Card data={job} key={index} />)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetail;
