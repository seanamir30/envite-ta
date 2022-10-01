import { useState } from "react"
import { useNavigate } from "react-router-dom";

const Create = () => {
  const navigate = useNavigate();
  const [hostedBy, setHostedBy] = useState('')
  const [eventTitle, setEventTitle] = useState('')
  const [fromDate, setFromDate] = useState('')
  const [fromTime, setFromTime] = useState('')
  const [toDate, setToDate] = useState('')
  const [toTime, setToTime] = useState('')
  const [street, setStreet] = useState('')
  const [suburb, setSuburb] = useState('')
  const [state, setState] = useState('')
  const [postcode, setPostcode] = useState('')

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const localStorage = window.localStorage
    const data = {
      hostedBy: hostedBy,
      eventTitle: eventTitle,
      fromDate: fromDate,
      fromTime: fromTime,
      toDate: toDate,
      toTime: toTime,
      street: street,
      suburb: suburb,
      state: state,
      postcode: postcode,
    }
    localStorage.setItem('partyData',JSON.stringify(data))
    navigate('/event', {replace: true})
  }

  return (
    <div className="bg-secondary-3 h-screen flex flex-col items-center">
      <div className="relative flex flex-col items-center">
        <img src="/images/BirthdayCake.png"/>
        <form className="flex flex-col rounded-[10px] drop-shadow-xl bg-white absolute -bottom-96 justify-center px-6 pt-4 w-11/12" onSubmit={(e)=>handleSubmit(e)}>
          <label className="mt-3">Event Title</label>
          <input required className="pl-4 max-h-8 rounded-[10px] w-full border border-neutral-3 mb-3" type="text" value={eventTitle} onChange={(e)=>setEventTitle(e.target.value)} placeholder="Event Title"/>
          <label>Host Name</label>
          <input required className="pl-4 max-h-8 rounded-[10px] w-full border border-neutral-3 mb-3" type="text" value={hostedBy} onChange={(e)=>setHostedBy(e.target.value)} placeholder="Host"/>
          <label>Party start date & time</label>
          <input required className="pl-4 max-h-8 rounded-[10px] w-full border border-neutral-3 mb-3" type="date"value={fromDate} onChange={(e)=>setFromDate(e.target.value)} />
          <input required className="pl-4 max-h-8 rounded-[10px] w-full border border-neutral-3 mb-3" type="time"value={fromTime} onChange={(e)=>setFromTime(e.target.value)} />
          <label>Party end date & time</label>
          <input required className="pl-4 max-h-8 rounded-[10px] w-full border border-neutral-3 mb-3" type="date"value={toDate} onChange={(e)=>setToDate(e.target.value)} />
          <input required className="pl-4 max-h-8 rounded-[10px] w-full border border-neutral-3 mb-3" type="time"value={toTime} onChange={(e)=>setToTime(e.target.value)} />
          <label>Street</label>
          <input required className="pl-4 max-h-8 rounded-[10px] w-full border border-neutral-3 mb-3" type="text"value={street} onChange={(e)=>setStreet(e.target.value)} />
          <label>Suburb</label>
          <input required className="pl-4 max-h-8 rounded-[10px] w-full border border-neutral-3 mb-3" type="text" value={suburb} onChange={(e)=>setSuburb(e.target.value)} placeholder="Suburb"/>
          <label>State</label>
          <input required className="pl-4 max-h-8 rounded-[10px] w-full border border-neutral-3 mb-3" type="text" value={state} onChange={(e)=>setState(e.target.value)} placeholder="State"/>
          <label>Postcode</label>
          <input required className="pl-4 max-h-8 rounded-[10px] w-full border border-neutral-3 mb-3" type="text" value={postcode} onChange={(e)=>setPostcode(e.target.value)} placeholder="Postcode"/>
          <button type="submit" className="my-6 text-white py-3 rounded-[10px] font-bold bg-gradient-to-r from-primary-3 to-primary-4">Next</button>
        </form>
      </div>
    </div>
  )
}

export default Create