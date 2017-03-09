export const SelectedContainerItem = ({id, name, hexColor}) => {


  return (
    <span className="selected_container_item">
      <span style={{color: hexColor }}>&#9646;</span>
      {name}
      <span className="tooltip_text">{name}</span>
      <span className="comma">,</span>
    </span>
  )
}
