import React from 'react'
import {useState} from 'react'

const SignUpPage = ({onAdd}) => {

    const [text, setText] =useState('')
    const [day, setDay] =useState('')
    const [reminder, setReminder] =useState(false)

    const onSubmit = (e) => {
        e.preventDefault()

        if(!text) {
            alert('Please add a task')
            return
        }

        onAdd({ text, day, reminder })

        setText('')
        setDay('')
        setReminder(false)
    }

  return (
    <form className='add-form' onSubmit={onSubmit}>
            <div className='form-control'>
                <label>Username</label>
                <input type='text' placeholder ='Type Username here' 
                value={text} onChange={(e) =>
                setText(e.target.value)}/>
            </div>
            <div className='form-control'>
                <label>Password</label>
                <input type='text' placeholder ='Type Password here'
                value={day} onChange={(e) =>
                setDay(e.target.value)}/>
            </div>
            <div className='form-control'>
                <label>Name</label>
                <input type='text' placeholder ='Type Name here'
                value={day} onChange={(e) =>
                setDay(e.target.value)}/>
            </div>
            <div className='form-control'>
                <label>Phone Number</label>
                <input type='text' placeholder ='Type Phone Number here'
                value={day} onChange={(e) =>
                setDay(e.target.value)}/>
            </div>
            <div className='form-control'>
                <label>Address</label>
                <input type='text' placeholder ='Type Address here'
                value={day} onChange={(e) =>
                setDay(e.target.value)}/>
            </div>

            <input type='submit' value='Sign Up'
            className='btn btn-block'/>
        </form>
  )
}

export default SignUpPage