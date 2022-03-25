import React from 'react'
import {useState} from 'react'
import '../../tut.css';

const SignUpPage = ({onAdd}) => {

    const [username, setUsername] =useState('')
    const [password, setPassword] =useState('')
    const [name, setName] =useState('')
    const [phone, setPhone] =useState('')
    const [address, setAddress] =useState('')

    const onSubmit = (e) => {
        e.preventDefault()

        if(!username) {
            alert('Please fill up the Username')
            return
        }
        if(!password) {
            alert('Please fill up the Password')
            return
        }
        if(!name) {
            alert('Please fill up the Name')
            return
        }
        if(!phone) {
            alert('Please fill up the Phone Number')
            return
        }
        if(!address) {
            alert('Please fill up the Address')
            return
        }

        onAdd({ username, password, name, phone, address })

        setUsername('')
        setPassword('')
        setName('')
        setPhone('')
        setAddress('')

    }


  return (
    <form className='SignUpForm' onSubmit={onSubmit}>
        <h1>Registration Page</h1>
            <div className='form-control'>
                <label>Username</label><div></div>
                <input type='text' placeholder ='Type Username here' 
                value={username} onChange={(e) =>
                setUsername(e.target.value)}/>
            </div>
            <div className='form-control'>
                <label>Password</label><div></div>
                <input type='text' placeholder ='Type Password here'
                value={password} onChange={(e) =>
                setPassword(e.target.value)}/>
            </div>
            <div className='form-control'>
                <label>Name</label><div></div>
                <input type='text' placeholder ='Type Name here'
                value={name} onChange={(e) =>
                setName(e.target.value)}/>
            </div>
            <div className='form-control'>
                <label>Phone Number</label><div></div>
                <input type='text' placeholder ='Type Phone Number here'
                value={phone} onChange={(e) =>
                setPhone(e.target.value)}/>
            </div>
            <div className='form-control'>
                <label>Address</label><div></div>
                <input type='text' placeholder ='Type Address here'
                value={address} onChange={(e) =>
                setAddress(e.target.value)}/>
            </div>

            <input type='submit' value='Sign Up'
            className='btn btn-block'/>

            <a href='/'>Go Back to Login Page</a>

        </form>
  )

}

export default SignUpPage