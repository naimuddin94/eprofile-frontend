import SideBar from "@/components/share/SideBar";


export default function Layout({ children }) {
  return (
    <section className='flex '>
      <SideBar />
      <div className='lg:w-[calc(100%_-_300px)] md:w-[calc(100%_-_220px)] w-full'>
        {children}
      </div>
    </section>
  )
}
