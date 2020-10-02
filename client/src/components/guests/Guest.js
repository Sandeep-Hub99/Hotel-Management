import React from 'react'

const Guest = () => {
  return (
    <div className="guest-card">
    <div className="card-head">
      <div>
        <label> Confirmed
      <i className='fas fa-check-square '>
            <input type="checkbox" />
          </i>
        </label>
      </div>
      <div>
        <button>
          <i className="fas fa-user-edit"></i>
        </button>
        <button>
          <i className="fas fa-trash-alt remove"></i>
        </button>
      </div>
    </div>
    <div className="card-body">
      <h2>Satyajit Das</h2>
      <span className='badge red'>'Double'</span>
      <div className="contact">
        <i className="fas fa-phone-alt" />
        <p>444 333 7777</p>
      </div>
      <h2>Nalco Steel Plant,Anugul</h2>
    </div>
  </div>
  )
}

export default Guest
