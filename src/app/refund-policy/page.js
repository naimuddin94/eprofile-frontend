import Container from "@/components/Container";
import Header from "@/components/share/Header";
import data from "../../components/data/refund.json";
import React from "react";

const RefundPolicy = ({ title }) => {
  return (
    <div>
      <Header title={"Refund Policy "} />
      <Container>
        <div className="mt-4 my-2">
          <div>
            {data.map((refund, i) => (
              <div key={i} className="mb-2">
                <h2 className="text-[20px] lg:text-[23px] font-semibold text-primary border-b-2 border-primary pb- inline-block py-1">
                  {refund.title}
                </h2>
                <p className="text-[#000000] text-[18px] lg:text-[19px] py-3 lg:py-4">
                  {refund.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default RefundPolicy;
