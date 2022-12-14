import { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"

export interface partyData {
  hostedBy: string,
  eventTitle: string,
  fromDate: string,
  fromTime: string,
  toDate: string,
  toTime: string,
  street: string,
  suburb: string,
  state: string,
  postcode: string,
}

const Event = () => {
  const navigate = useNavigate()
  const [partyData,setPartyData] = useState<partyData>()

  useEffect(() => {
    const data = localStorage.getItem('partyData')
    if(data === null) navigate('/',{replace: true})
    if(typeof data === 'string'){
      setPartyData(JSON.parse(data))
    }
  }, [])

  const formatDate = (date?: string) => {
    if(!date) return
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

    let raw = date?.split("-");

    return(`${raw[2]} ${months[parseInt(raw[1])]}`)
  }

  const formatTime = (time?: string) => {
    if(!time) return
    let raw = time?.split(':')
    let hours = ((parseInt(raw[0]) + 11) % 12 + 1)
    var suffix = hours <= 12 ? "PM":"AM";

    return `${hours}:${raw[1]} ${suffix}`
  }
  

  return (
    <div className="h-screen bg-secondary-4">
      <img src="/images/BirthdayCake.png" alt="Birthday Cake"/>
      <div className="mt-[11px] px-4">
        <div className="font-bold text-primary-1 text-xl">{partyData?.eventTitle}</div>
        <div className="text-neutral-2 text-sm mt-1">Hosted by <span className="font-bold">{partyData?.hostedBy}</span></div>
        <div className="mt-8 flex items-center">
          <div className="rounded-[10px] mr-5 bg-white drop-shadow p-3">
            <img src="images/Calendar.svg" alt="Calendar"/>
          </div>
          <div className="w-full">
            <div className="font-bold text-primary-1">{formatDate(partyData?.fromDate)} {formatTime(partyData?.fromTime)}</div>
            <div className="text-neutral-1">to <span className="font-bold">{formatDate(partyData?.toDate)} {formatTime(partyData?.toTime)}</span> UTC +10</div>
          </div>
          <Link to="date/edit"><img src="/images/stroke.svg"/></Link>
        </div>
        <div className="mt-4 flex items-center">
          <div className="rounded-[10px] mr-5 bg-white drop-shadow p-3">
            <img src="images/Location.svg" alt="Location"/>
          </div>
          <div className="w-full">
            <div className="font-bold text-primary-1">{partyData?.street}</div>
            <div className="text-neutral-1">{partyData?.suburb}, {partyData?.state}, {partyData?.postcode}</div>
          </div>

          <Link to="location/edit"><img src="/images/stroke.svg"/></Link>
        </div>
      </div>
    </div>
  )
}

export default Event