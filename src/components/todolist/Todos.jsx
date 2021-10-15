import React from 'react'

const Todos = (props) => {
  const { data } = props
  return (
    <div>
      {data.map(e => {
        return (
          <li key={e.work}>
            <span>{ e.work }</span>
          </li>
        )
      })}
    </div>
  )
}

export default Todos;
