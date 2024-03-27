import Container from "@/components/Container";
import Header from "@/components/share/Header";
import img from "../../assets/About/about.png";
import Image from "next/image";

const About = ({ title }) => {
  return (
    <div>
      <Header title={"About us"} />

      <Container>
        <div className="w-full h-[60vh] flex flex-col lg:flex-row flex-wrap items-enter justify-center">
          <div className="w-[50%] h-full  bg-primary-foreground space-y-2">
            <h2 className="font-bold text-[#000000] text-[22px]">
              Lorem Ipsum is simply <br /> dummy text of the printing <br />
              and.
            </h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry standard dummy text
              ever since the 1500s.
            </p>
          </div>
          <div className="w-[50%] h-fll">
            <Image
              className="w-ful h-ful"
              src={img}
              height={180}
              width={300}
              alt="about-image"
            />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default About;
