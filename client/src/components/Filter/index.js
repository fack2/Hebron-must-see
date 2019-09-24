import React from 'react'
import './style.css'

const Filter = ({ filterList, updateClickedFilter }) => (
  <React.Fragment>
    <fieldset className="filter">
      <legend>Filter</legend>
      {filterList.map(filterType => (
        <button onClick={() => updateClickedFilter(filterType)}>
          {filterType}
        </button>
      ))}
    </fieldset>
  </React.Fragment>
)

export default Filter
