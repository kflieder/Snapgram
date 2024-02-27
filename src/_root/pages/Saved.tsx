import React from 'react'

const Saved = () => {
  return (
    <div className="explore-container">
    <div className="explore-inner_container">
    </div>
    <div className="flex-between w-full max-w-5xl mt-16 mb-7">
      <div className="flex-center gap-3 bg-dark-3 rounded-xl px-4 py-2 cursor-pointer">
      <h2 className="h3-bold md:h2-bold w-full">Saved</h2>
      </div>
    </div>
    <div className="flex flex-wrap gap-9 w-full max-w-5xl">
      <ul className="grid-container">
        <li className="relative min-w-80 h-80">
          <div className="grid-post_link">
          <img src="/assets/images/selfie.jpeg" alt="selfie" className="h-full w-full object-cover"/>
          </div>
          <div className="grid-post_user">
            <img src="/icons/profile-placeholder.svg" alt="profile" className="h-8 w-8 rounded-full"/>
            <p className="line-clamp-1">Kflieder</p>
          </div>
        </li>
        
      </ul>
    </div>
  </div>
  )
}

export default Saved