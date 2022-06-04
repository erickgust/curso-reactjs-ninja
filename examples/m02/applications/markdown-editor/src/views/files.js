'use strict'

import React from 'react'

const files = {
  1: '# Title',
  2: '# Subtitle'
}

const handleOpenFile = (fileId) => () => {
  console.log('clicou em', fileId)
}

export const Files = () => (
  <aside className='files-list'>
    <h2>Files</h2>

    <ul>
      {Object.keys(files).map((fileId) => (
        <li key={fileId}>
          <button onClick={handleOpenFile(fileId)}>
            {fileId}
          </button>
        </li>
      ))}
    </ul>
  </aside>
)
