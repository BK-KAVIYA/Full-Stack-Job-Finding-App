import React from "react";

import { FaEnvelope, FaEnvelopeOpenText, FaRocket } from "react-icons/fa6";

function Newslatter() {
  return (
    <div>
      <div>
        <h3 className="text-lg font-bold mb-2 flex items-center gap-2">
          <FaEnvelopeOpenText />
          Email me for jobs
        </h3>
        <p className="text-primary/75 text-base mb-4">
          Email your resume to apply for the job. I will get back to you as soon
          as possible.
        </p>
        <div className="w-full space-y-4">
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter your email"
            className="w-full block py-2 pl-3 border focus:outline-none"
          />
          <input
            type="submit"
            value={"Subscribe"}
            className="w-full block py-2 pl-3 border bg-blue rounded-sm text-white cursor-pointer font-semibold"
          />
        </div>
      </div>
      {/* second part */}
      <div className="mt-20">
        <h3 className="text-lg font-bold mb-2 flex items-center gap-2">
          <FaRocket />
          Get notice faster
        </h3>
        <p className="text-primary/75 text-base mb-4">
          Get notice faster by subscribing to our newsletter. We will send you!
        </p>
        <div className="w-full space-y-4">
          <input
            type="submit"
            value={"Upload Your Resume"}
            className="w-full block py-2 pl-3 border bg-blue rounded-sm text-white cursor-pointer font-semibold"
          />
        </div>
      </div>
    </div>
  );
}

export default Newslatter;
