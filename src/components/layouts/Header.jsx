import React from 'react'

const Header = (props) => {
  const {tabs} = props
  return (
    <div>
      {tabs.map(element => {
        return <span key={element.tab}> { element.tab } </span>
      })}
    </div>
  )
}

export default Header;
