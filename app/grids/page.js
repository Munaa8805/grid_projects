import React from 'react'
import Grids from '@/components/Grids'

const GridsPage = () => {
  return (
    <div className="pb-5">
      <h1 className="mb-2 mt-4 text-center w-full p-5 font-bold hover:underline-offset-2 hover:cursor-pointer">
        Nice Grids
      </h1>
      <Grids />
    </div>
  );
}

export default GridsPage