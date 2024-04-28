// Single Accordion
// Double Accordion

import { useState } from 'react'
import data from './data'

import './styles.css'

export default function Accordion() {
  const [selected, setSelected] = useState(null)
  const [enableMultiSelection, setEnableMultiSelection] = useState(false)
  const [multiple, setMultiple] = useState([])

  function handleSingleSelection(getCurrentId) {
    setSelected(getCurrentId === selected ? null : getCurrentId)
  }

  function handleMultiSelection(getCurrentId) {
    let copyMultiple = [...multiSet]
    const findIndexOfCurrentId = copyMultiple.indexOf(getCurrentId)

    console.log(findIndexOfCurrentId)
    if (findIndexOfCurrentId === -1) copyMultiple.push(getCurrentId)
    else copyMultiple.splice(findIndexOfCurrentId, 1)

    setMultiSet(copyMultiple)

    console.log(selected, multiSet)
  }

  return (
    <div className="wrapper">
      <button onClick={() => setMultiSelection(!multiSelection)}>
        Enable Multi Selection
      </button>

      <div className="accordion">
        {data && data.length > 0 ? (
          data.map((dataItem) => {
            return (
              <div key={dataItem.id} className="item">
                <div
                  onClick={
                    multiSelection
                      ? handleMultiSelection(dataItem.id)
                      : () => handleSingleSelection(dataItem.id)
                  }
                  className="title"
                >
                  <h3>{dataItem.question}</h3>
                  <span>+</span>
                </div>
                {selected === dataItem.id ? (
                  <div className="content">{dataItem.answer}</div>
                ) : null}
              </div>
            )
          })
        ) : (
          <div>No Data Was Found!</div>
        )}
      </div>
    </div>
  )
}
