import { PropTypes } from 'react'

export const ListItem = ({id, hexColor, name, selected, onItemChange}) => {

  const onChange = (e) => {
    let checked = e.target.checked
    onItemChange(id, checked)
  }
  return (

  <div className="list_item">
    <input type="checkbox" checked={selected} onChange={onChange}/>
    <span style={{color: hexColor }}>&#9646;</span>
    {name}
  </div>
  )

}
