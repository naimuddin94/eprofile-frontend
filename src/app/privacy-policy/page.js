import Container from "@/Components/Container";
import Header from "@/Components/shared/Header";
import data from "../../Components/data/policy.json";
import React from "react";

const PrivacyPolicy = ({ title }) => {
  return (
    <div>
      <Header title={"Privacy Policy"} />
      <Container>
        <div className="mt-4 my-2">
          <div>
            <div className="mb-2">
              <h2 className="text-[20px] lg:text-[23px] font-semibold text-primary border-b-2 border-primary pb- inline-block py-1">
                How to Contact Us?
              </h2>
              <p className="text-[#000000] text-[18px] lg:text-[19px] py-3 lg:py-4">
                If you have any queries, requests, or comments regarding our
                privacy policy, please get in touch with our team on: <br />
                <br /> <b>United States</b>  <br />
                <br />  5 Great Valley Parkway Suite 210,  
                <br /> 
                Malvern, Pennsylvania 19355
              </p>
            </div>
            {data.map((privacy, i) => (
              <div key={i} className="mb-2">
                <h2 className="text-[20px] lg:text-[23px] font-semibold text-primary border-b-2 border-primary pb- inline-block py-1">
                  {privacy.title}
                </h2>
                <p className="text-[#000000] text-[18px] lg:text-[19px] py-3 lg:py-4">
                  {privacy.description}
                </p>
              </div>
            ))}
            <button>
              <span className="text-primary font-bold text-[18px]">
                Read more..
              </span>
            </button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default PrivacyPolicy;
