import React from 'react'
import CopyButton from './colorActions/copyBtn'
import LockButton from './colorActions/lockBtn'
import PickButton from './colorActions/pickBtn'
import MoreButton from './colorActions/moreBtn'
import ReloadButton from './colorActions/Reloadbtn'

function ColorActionsBar ({ color, theme }) {
  return (
    <div className={theme + ' colorActionBar'}>
      <ReloadButton theme={theme} />
      <LockButton theme={theme} />
      <PickButton theme={theme}/>
      <MoreButton theme={theme} />
      <CopyButton textToCopy={color} theme={theme} />
    </div>
  )
}

export default ColorActionsBar
