import React from "react";
import { Link } from "react-router-dom";
import "../../App.css";
import { FiCalendar, FiClock, FiDollarSign, FiMapPin } from "react-icons/fi";

function Card({ data }) {
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
  } = data;

  return (
    <section className="card">
      <Link
        to={`/jobs/get-job-detail/${_id}`}
        className="flex gap-4 flex-col sm:flex-row items-start"
      >
        <img
          src={companyLogo}
          alt="company logo"
          className="w-20 h-20 rounded-full"
        />
        <div className="flex flex-col gap-2">
          <h4 className="text-primary mb-1">{companyName}</h4>
          <h3 className="text-lg font-semibold mb-2">{jobTitle}</h3>
          <div className="text-primary/70 text-base flex flex-wrap gap-2 mb-2">
            <span className="flex items-center gap-2">
              <FiMapPin />
              {jobLocation}
            </span>
            <span className="flex items-center gap-2">
              <FiClock />
              {jobType}
            </span>
            <span className="flex items-center gap-2">
              <FiDollarSign />
              {salary}
            </span>
            <span className="flex items-center gap-2">
              <FiCalendar />
              {createdAt}
            </span>
          </div>
          <p className="text-base text-primary/70">{Description}</p>
        </div>
      </Link>
    </section>
  );
}

export default Card;
