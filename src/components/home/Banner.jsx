import { Home1 } from "@/assets/images";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MapPin, Search } from "lucide-react";
import banner from "../../assets/Home/banner2.png";
import Link from "next/link";
import Image from "next/image";

const Banner = () => {
  return (
    <div>
      <section
        className={`relative bg-image w-full bg-cover lg:h-[75vh] object-contain`}
      >
        {/* <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div> */}
        <div className="w-[90%] flex gap-4 flex-col lg:flex-row z-50  mx-auto py-6 lg:py-10">
          <div className="lg:w-[50%] order-2 lg:order-1 z-50 ">
            <h1 className="text-xl md:text-3xl lg:text-4xl tracking-wide font-bold my-3 lg:my-10">
              Lorem ipsum dolor sit amet consectetur. Elementum vulputate{" "}
            </h1>
            <p className="tracking-wide">
              Lorem ipsum dolor sit amet consectetur. Volutpat at mus ut
              viverra. Pharetra vulputate nunc nam ultricies tortor sed tellus.
              Elementum lorem diam duis aliquam id ullamcorper est aliquet
              imperdiet. Et tortor sit interdum eget. In orci lacus dui integer.{" "}
              <Link href={"#"} className="text-primary font-bold">
                Read more
              </Link>
            </p>
            <div className="flex flex-col lg:flex-row gap-3 mt-5 ">
              <div className="relative">
                <Search className="absolute top-1/2 left-1 -translate-y-1/2" />
                <Input
                  placeholder="What are you looking for?"
                  className="rounded-md pl-9 focus:border-[#FF6702] focus:outline-[#FF6702] placeholder:text-[#000000] placeholder:text-[14px] border shadow-md shadow-red-600/20"
                />
              </div>

              <div className="flex gap-4 items-center">
                <Button className="hover:bg-[#FF6702]/40 z-50 px-6">
                  Find
                </Button>
                <Button className="hover:bg-[#FF6702]/40 z-50 px-8">
                  Get Listed
                </Button>
              </div>
            </div>
          </div>

          <div className="lg:w-[50%] order-1 lg:order-2 z-50 ">
            <Image className="w-full" src={banner} height={180} width={450} />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Banner;