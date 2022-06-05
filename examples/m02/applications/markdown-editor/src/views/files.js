'use strict'

import React from 'react'
import PropTypes from 'prop-types'

export const Files = ({ files, handleOpenFile }) => (
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

Files.propTypes = {
  files: PropTypes.object.isRequired,
  handleOpenFile: PropTypes.func.isRequired
}
