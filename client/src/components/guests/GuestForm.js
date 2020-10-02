import React from 'react'

const GuestForm = () => {
  return (
    <div className="Registration">
      <h1>Registration</h1>
      <form >
        <input type="text" placeholder="Name" name="name" />
        <input type="text" placeholder="Phone" name="phone" />
        <input type="text" placeholder="Address" name="Address" />
        <p className="options-label">Rooms</p>
        <div className="options">
          <label className="container">Single
        <input type="radio" name="dietary" Value='Single' />
            <span className="checkmark"></span>
          </label>
          <label className="container">Double
        <input type="radio" name="dietary" Value='Double' />
            <span className="checkmark"></span>
          </label>
          
        </div>
        <input type="submit" value="Add Guest" className="btn" />
      </form>
    </div>
  )
}

export default GuestForm
