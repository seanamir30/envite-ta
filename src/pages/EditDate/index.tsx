import {useEffect, useState} from 'react'
import { partyData } from '../Event'
import { useNavigate } from 'react-router'

const EditDate = () => {
  const navigate = useNavigate()
  const[partyData, setPartyData] = useState<partyData>()
  const[fromDate, setFromDate] = useState('')
  const[toDate, setToDate] = useState('')
  const[fromTime, setFromTime] = useState('')
  const[toTime, setToTime] = useState('')

  useEffect(() => {
    const data = localStorage.getItem('partyData')
    if(data === null) navigate('/',{replace: true})
    if(typeof data === 'string'){
      const parsedData = JSON.parse(data)
      setPartyData(parsedData)
      setFromDate(parsedData?.fromDate)
      setFromTime(parsedData?.fromTime)
      setToDate(parsedData?.toDate)
      setToTime(parsedData?.toTime)
    }
  }, [])

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if(partyData){
      partyData['fromDate'] = fromDate
      partyData['toDate'] = toDate
      partyData['fromTime'] = fromTime
      partyData['toTime'] = toTime
      localStorage.setItem('partyData', JSON.stringify(partyData))
    }

    navigate('/event', {replace: true})
  }
  
  return (
    <div className="h-screen bg-secondary-4">
      <img src="/images/BirthdayCake.png"/>
      <form onSubmit={(e)=>handleSubmit(e)}>
        <label>From</label>
        <input value={fromDate} onChange={(e)=>setFromDate(e.target.value)} type="date"/>
        <input value={fromTime} onChange={(e)=>setFromTime(e.target.value)} type="time"/>

        <label>To</label>
        <input value={toDate} onChange={(e)=>setToDate(e.target.value)} type="date"/>
        <input value={toTime} onChange={(e)=>setToTime(e.target.value)} type="time"/>

        <button type="submit">Save changes</button>
      </form>
    </div>
  )
}

export default EditDate