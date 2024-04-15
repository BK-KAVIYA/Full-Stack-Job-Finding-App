import { GoLocation } from "react-icons/go";
import moment from "moment";
import { Link } from "react-router-dom";

const JobCard = ({ job }) => {
  return (
    <Link to={`/job-detail/${job?.id}`}>
      <div
        className="w-full  h-[16rem] md:h-[14rem] bg-white flex flex-col  shadow-lg 
                rounded-md px-3 py-5 "
      >
        <div className="flex gap-3">
          <img
            src={job?.companyLogo}
            alt={job?.company?.name}
            className="w-14 h-14"
          />

          <div className="">
            <p className="text-lg font-semibold">{job?.jobTitle}</p>
            <span className="flex gap-2 items-center">
              <GoLocation className="text-slate-900 text-sm" />
              {job?.location}
            </span>
          </div>
        </div>

        <div className="py-3">
          <p className="text-sm">{job?.description?.slice(0, 200) + "..."}</p>
        </div>

        <div className="flex items-center justify-between">
          <p className="bg-[#1d4fd826] text-[#1d4fd8] py-0.5 px-1.5 rounded font-semibold text-sm">
            {job?.employmentType}
          </p>
          <span className="text-gray-500 text-sm">
            {moment(job?.postingDate).fromNow()}
          </span>
        </div>
      </div>
    </Link>
  );
};

export default JobCard;
