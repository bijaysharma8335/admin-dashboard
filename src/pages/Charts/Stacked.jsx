import React from 'react'
import ChartsHeader from '../../components/ChartsHeader'

const Stacked = () => {
  return (
    <div className='m-4 md:m-10 mt-24 p-10 dark:bg-secondary-dark-bg rounded-3xl'>
        <ChartsHeader category="Stacked " title="Revenue Breakdown"/>
        <div className="w-full">
            <StackedChart/>
        </div>
    </div>
  )
}

export default Stacked