import {useEffect, useState} from 'react'
import { partyData } from '../Event'
import { useNavigate } from 'react-router'

const EditTime = () => {
const navigate = useNavigate()
  const[partyData, setPartyData] = useState<partyData>()
  const[street, setStreet] = useState('')
  const[suburb, setSuburb] = useState('')
  const[state, setState] = useState('')
  const[postcode, setPostcode] = useState('')

  useEffect(() => {
    const data = localStorage.getItem('partyData')
    if(typeof data === 'string'){
      const parsedData = JSON.parse(data)
      setPartyData(parsedData)
      setStreet(parsedData?.street)
      setSuburb(parsedData?.suburb)
      setState(parsedData?.state)
      setPostcode(parsedData?.postocde)
    }
  }, [])

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if(partyData){
      partyData['street'] = street
      partyData['suburb'] = suburb
      partyData['state'] = state
      partyData['postcode'] = postcode
      localStorage.setItem('partyData', JSON.stringify(partyData))
    }

    navigate('/event', {replace: true})
  }

  return (
    <div className="h-screen bg-secondary-4">
      <img src="/images/BirthdayCake.png"/>
      <form onSubmit={(e)=>handleSubmit(e)}>
        <input value={street} onChange={(e)=>setStreet(e.target.value)} type="text"/>
        <input value={suburb} onChange={(e)=>setSuburb(e.target.value)} type="text"/>
        <input value={state} onChange={(e)=>setState(e.target.value)} type="text"/>
        <input value={postcode} onChange={(e)=>setPostcode(e.target.value)} type="text"/>

        <button type="submit">Save changes</button>
      </form>
    </div>
  )
}

export default EditTime