import React from 'react'
import { FormFranchise } from '../components/form/FormFranchise';

function Franchise() {
  const bgFranchise = {
    width: "100%",
    backgroundImage: "url(/image/Header_home.jpg)",
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat'
  };
  return (
    <div className="min-h-screen" style={bgFranchise}>
      <div className="absolute top-0 bottom-0 right-0 left-0 bg-black/80">
        <div className="grid items-center min-h-full p-4">
          <FormFranchise />
        </div>
      </div>
    </div>
  )
}

export default Franchise