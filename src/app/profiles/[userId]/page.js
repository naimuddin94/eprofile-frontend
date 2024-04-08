import SingleProfile from './components/profile'

export default function Page({params}){
  return (
    <SingleProfile userId={params?.userId}/>
  )
}