import { GoLocation } from "react-icons/go";
import moment from "moment";
import { Link } from "react-router-dom";

const JobCard = ({ job }) => {
    const {
    _id,
    company: [{ name: companyName }],
    jobTitle,
    company: [{ profileUrl: companyLogo }],
    salary,
    salaryType,
    company: [{ location: jobLocation }],
    jobType,
    createdAt,
    detail: [{ desc: Description }],
  } = job;
  return (
    <Link to={`/poxy/jobs/get-job-detail/${_id}`}>
      <div
        className="w-full  h-[16rem] md:h-[14rem] bg-white flex flex-col  shadow-lg 
                rounded-md px-3 py-5 "
      >
        <div className="flex gap-3">
          <img
            src={companyLogo}
            alt={companyName}
            className="w-14 h-14"
          />

          <div className="">
            <p className="text-lg font-semibold">{jobTitle}</p>
            <span className="flex gap-2 items-center">
              <GoLocation className="text-slate-900 text-sm" />
              {jobLocation}
            </span>
          </div>
        </div>

        <div className="py-3">
          <p className="text-sm">{Description?.slice(0, 200) + "..."}</p>
        </div>

        <div className="flex items-center justify-between">
          <p className="bg-[#1d4fd826] text-[#1d4fd8] py-0.5 px-1.5 rounded font-semibold text-sm">
            {jobType}
          </p>
          <span className="text-gray-500 text-sm">
            {moment(createdAt).fromNow()}
          </span>
        </div>
      </div>
    </Link>
  );
};

export default JobCard;
