import React from 'react'
import CopyButton from './colorActions/copyBtn'
import LockButton from './colorActions/lockBtn'
import LoveButton from './colorActions/loveBtn'
import MoreButton from './colorActions/moreBtn'
import ReloadButton from './colorActions/Reloadbtn'

function ColorActionsBar ({ color }) {
  return (
    <div className='colorActionBar'>
      <LoveButton />
      <LockButton />
      <MoreButton />
      <ReloadButton />
      <CopyButton textToCopy={color} />
    </div>
  )
}

export default ColorActionsBar
