import { ListItem } from './ListItem'
import { PropItemTypes } from 'react'

export const ListContainer = ({ items, showDropdown, onItemChange }) => {


  return (
    <div className={"list_container " +(showDropdown ? 'show':'hidden')}>
      {items.map((item, i) =>
				<ListItem key={i}
						   {...item}
                onItemChange={onItemChange}/>
				)}
    </div>
  )
}
