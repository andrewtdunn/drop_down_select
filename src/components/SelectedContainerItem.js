import { NameLabel } from './NameLabel'

export const SelectedContainerItem = ({id, name, hexColor}) => {


  return (
    <span className="selected_container_item">
      <NameLabel name={name}
                 hexColor={hexColor}/>
      <span className="tooltip_text">{name}</span>
      <span className="comma">,</span>
    </span>
  )
}
