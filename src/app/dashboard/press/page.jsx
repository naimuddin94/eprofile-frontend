import { Frame } from "@/assets/images";
import { ComingSoon, DashboardHeader } from "../_components";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Ellipsis, SquareArrowOutUpRight } from "lucide-react";
const data = [
  {
    id: 1,
    img: Frame,
    title: 'How to Write a Press Release That Gets Results in 2023 (Expert Tips)',
    desc: 'How many times have you heard “ just deliver newsworthy content”?',
    publication_date: 'Jul 5, 2023',
    read: 14,
    status: 'Active',
  },
  {
    id: 1,
    img: Frame,
    title: 'How to Write a Press Release That Gets Results in 2023 (Expert Tips)',
    desc: 'How many times have you heard “ just deliver newsworthy content”?',
    publication_date: 'Jul 5, 2023',
    read: 14,
    status: 'Reject',
  },
  {
    id: 1,
    img: Frame,
    title: 'How to Write a Press Release That Gets Results in 2023 (Expert Tips)',
    desc: 'How many times have you heard “ just deliver newsworthy content”?',
    publication_date: 'Jul 5, 2023',
    read: 14,
    status: 'In Review',
  }
]

export default function PressPage() {
  return (
    // <ComingSoon/>
    <div className="container">
      <DashboardHeader title={'Press'} btnTitle={'Add Press'} />

      <div className="mt-10">
        {data.map(item => (
          <div key={item.id} className="bCenter py-3 border-b-[1px] ">
            <div className="flex gap-2 w-[75%]">
              <div>
                <Image src={item.img} alt={item.desc} className="w-[120px] h-[120px] rounded-lg" />
              </div>
              <div  className="flex flex-col justify-between py-1">
                <div className="space-y-2">
                  <h1 className="2xl:text-xl xl:text-[18px] font-semibold">{item.title}</h1>
                  <p>{item.desc}</p>
                </div>
                <div className="flex items-center gap-3 text-sm ">
                  <p>Published on {item.publication_date}</p>
                  <p>{item.read} min read</p>
                  <SquareArrowOutUpRight size={15}/>
                </div>
              </div>
            </div>
            <div className="w-[25%]  bCenter ">
              <div>
                <p className={`py-2  ${item.status === 'Active' && 'bg-green-400'} ${item.status === 'Reject' && 'bg-red-400'} ${item.status === 'In Review' && 'bg-blue-400'} text-white text-md w-[140px] center rounded-full `}>{item.status}</p>
              </div>
              <Button className="p-0 bg-transparent hover:bg-gray-200 h-min w-min text-md font-bold text-black ">
                <Ellipsis />
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
