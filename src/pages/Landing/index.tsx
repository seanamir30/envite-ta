import { Link } from "react-router-dom"

const Landing = () => {
  return (
    <div className="bg-secondary-3 flex flex-col justify-center items-center h-screen text-center">
      <div className="text-4xl font-bold pb-6">
        <p>Imagine if</p>
        <p className="text-transparent bg-clip-text bg-gradient-to-r from-primary-3 to-primary-4">Snapchat</p>
        <p>had events.</p>
      </div>
      <div className="pb-9">
        <p className="text-neutral-1 font-light">Easily host and share events with your friends across any social Media</p>
      </div>
      <div className="w-[165.63px] pb-[34px]">
        <img src="/images/AppPreview.svg" alt="App Preview"/>
      </div>
      <Link className="text-white p-6 rounded-[10px] font-bold bg-gradient-to-r from-primary-3 to-primary-4" to="/create">🎉 Create my event</Link>
    </div>
  )
}

export default Landing