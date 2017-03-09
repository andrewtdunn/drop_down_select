import { PropTypes } from 'react'
import { NameLabel } from './NameLabel'

export const ListItem = ({id, hexColor, name, selected, onItemChange}) => {

  const onChange = (e) => {
    let checked = e.target.checked
    onItemChange(id, checked)
  }
  return (

  <div className="list_item">
    <input type="checkbox" checked={selected} onChange={onChange}/>
    <NameLabel name={name}
               hexColor={hexColor}/>
  </div>
  )

}
