import React,{useState} from 'react'
import './Reminder.css'

function Reminder() {
    const [reminder,setReminder]=useState([])
    const [newreminder,setNewreminder]=useState("")

    const handleAddReminder=()=>{
      if (newreminder.trim()){
        setReminder([...reminder,newreminder])
        setNewreminder("")
      }
         
    }
    const handleInputChange=(event)=>{
      setNewreminder(event.target.value)

    }
    const handleDeleteReminder=(index)=>{
      setReminder(reminder.filter((item,itemIndex)=>itemIndex!=index))
    }


  return (
    <div>
            <h1>Reminder App</h1>

      <div className='input-container'>
        <input className='input-field' type='text' placeholder='Add a Reminder' value={newreminder} onChange={handleInputChange}></input>
        <button id="btn" onClick={handleAddReminder}>Add Reminder</button>
      </div>
      <div className='container'>
      <span className="header">Reminders</span>
        {
          reminder.length>0 ?(
            <ul className='reminder-list'>
          {
            reminder.map((reminder,index)=>(
              <li key={index}>{reminder}
              <button onClick={()=>handleDeleteReminder(index)} >Delete</button>
              
              </li>
            ))
          }
        </ul>
          ):
          <p>No reminders found</p>
        }
       
      </div>
    </div>
  )
}

export default Reminder
