import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";

import icon1 from "../../assets/Home/icon1.png";
import icon2 from "../../assets/Home/icon2.png";
import icon3 from "../../assets/Home/icon3.png";

const HomeServicesCard = () => {
  return (
    <div>
      <section className="">
        <div className="w-[90%] mx-auto py-10">
          <div className="text-center ">
            <h1 className="text-2xl font-bold ">
              Lorem ipsum dolor sit amet consectetur.
            </h1>
            <p className="w-[70%] mx-auto py-5">
              Lorem ipsum dolor sit amet consectetur. Volutpat at mus ut
              viverra. Pharetra vulputate <br /> nunc nam ultricies tortor sed
              tellus.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-10 md:gap-7">
              <Card className=" ">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <Image
                      className="rounded-md"
                      src={icon1}
                      height={40}
                      width={35}
                      alt="development"
                    />
                    <CardTitle className="text-start text-[18px]">
                      Development
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="text-start pl-16 space-y-1">
                  <p>Mobile App Development</p>
                  <p>Software Development</p>
                  <p>Web Development</p>
                  <p>AR/VR</p>
                  <p>Artificial Intelligence</p>
                  <p>Blockchain</p>
                </CardContent>
              </Card>

              <Card className="">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <Image
                      className="rounded-md"
                      src={icon2}
                      height={30}
                      width={35}
                      alt="development"
                    />
                    <CardTitle className="text-start text-[18px]">
                      Design & Production
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="text-start space-y-1 pl-16">
                  <p>Web Design</p>
                  <p>User Experience Design</p>
                  <p>Logo Design</p>
                  <p>Graphic Design</p>
                  <p>Design</p>
                  <p>Digital Design</p>
                </CardContent>
              </Card>

              <Card className="">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <Image
                      className="rounded-md"
                      src={icon2}
                      height={30}
                      width={35}
                      alt="development"
                    />
                    <CardTitle className="text-start text-[18px]">
                      Design & Production
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="text-start space-y-1 pl-16">
                  <p>Web Design</p>
                  <p>User Experience Design</p>
                  <p>Logo Design</p>
                  <p>Graphic Design</p>
                  <p>Design</p>
                  <p>Digital Design</p>
                </CardContent>
              </Card>

              <Card className="">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <Image
                      className="rounded-md"
                      src={icon3}
                      height={40}
                      width={35}
                      alt="development"
                    />
                    <CardTitle className="text-start text-[18px]">
                      Marketing
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="text-start space-y-1 pl-16">
                  <p>Digital Marketing</p>
                  <p>SEO</p>
                  <p>Social Media Marketing</p>
                  <p>Mobile Marketing</p>
                  <p>Content Marketing</p>
                  <p>Search Marketing</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomeServicesCard;