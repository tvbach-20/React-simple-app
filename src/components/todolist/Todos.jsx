import React, {useState} from 'react'
import { Checkbox } from '@material-ui/core'

const Todos = (props) => {
  const { data } = props
  const [checkedList, setCheckedList] = useState([]);

  const handlePickWorked = (e) => {
    const checkStatus = e.target.checked;
    const value = parseInt(e.target.value);
    if (checkStatus) {
      setCheckedList(checkedList => [...checkedList, value]);
      document.getElementsByClassName(`work-${value}`)[0].classList.add("checked");
    } else {
      setCheckedList(checkedList.filter(e => e !== value))
      document.getElementsByClassName(`work-${value}`)[0].classList.remove("checked");
    }
  }
  return (
    <div>
      {data.map((e, index) => {
        return (
          <li key={index}>
            <Checkbox
              value={index}
              color="primary"
              inputProps={{ 'aria-label': 'secondary checkbox' }}
              onClick={(e) => handlePickWorked(e)}
            />
            <span className={`work-${index}`}>{ e.work }</span>
          </li>
        )
      })}
      <h3>{checkedList}</h3>
    </div>
  )
}

export default Todos;
