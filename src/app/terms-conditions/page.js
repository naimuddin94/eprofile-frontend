import Container from "@/components/Container";
import Header from "@/components/share/Header";
import data from "../../components/data/terms.json";
import React from "react";


const TermsConditions = ({ title }) => {
  return (
    <div>
      <Header title={"Terms and Conditions"} />
      <Container>
        <div className="mt-4 my-2">
          <div>
            {data.map((term, i) => (
              <div key={i} className="mb-2">
                <h2 className="text-[20px] lg:text-[23px] font-semibold text-primary border-b-2 border-primary pb- inline-block py-1">
                  {term.title}
                </h2>
                <p className="text-[#000000] text-[18px] lg:text-[19px] py-3 lg:py-4">
                  {term.description}
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

export default TermsConditions;
