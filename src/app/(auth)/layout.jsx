import SideBar from "@/components/share/SideBar";


export default function Layout({ children }) {
  return (
    <section className='flex '>
      <SideBar />
      <div className='md:w-[calc(100%_-_300px)] w-full'>
        {children}
      </div>
    </section>
  )
}
