import Image from "next/image";
import logo from "./../../assets/logo.png";
import success from "../,,/../../assets/Login/success.png";
import blob1 from "../,,/../../assets/Login/blob1.png";
import blob2 from "../,,/../../assets/Login/blob2.png";
import blob3 from "../,,/../../assets/Login/blob3.png";
import Link from "next/link";

const ForgotPassword = () => {
  return (
    <div>
      {/* <div className="h-screen  px-5 lg:px-20 py-3 lg:py-6 w-full bg-primary-foreground">


        <div className="hidden lg:block">
          <Image
            className="absolute left-0 bottom-0 w-ful h-ful"
            src={blob1}
            height={10}
            width={355}
            alt="blob"
          />

          <Image
            className="absolute translate-[360deg] right-[290px] top-10 w-ful h-ful"
            src={blob2}
            height={120}
            alt="blob"
            width={95}
          />

          <Image
            className="absolute  bottom-10 right-1 w-ful h-ful"
            src={blob3}
            height={120}
            width={110}
            alt="blob"
          />
        </div>

        <div className="max-w-5xl mt-5 lg:mt-6 flex justify-center items-center mx-auto">
          <div className="py-4 lg:py-8">
            <div className="rounded-xl h w-full p-10">
              <h1 className="font-bold mb-2 text-dark text-center text-[22px]">
                Password Change
              </h1>
              <h2 className="text-[#17B367] text-center font-bold text-[24px]">
                Successful!
              </h2>
            </div>

            <div>
              <Image src={success} height={300} width={360} alt="success" />

              <h2 className="text-dark font-bold text-[17px] pt-5 lg:pt-8">
                Please check your email for create a new way password
              </h2>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default ForgotPassword;
