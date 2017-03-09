import UpDownArrows from 'react-icons/lib/ti/arrow-unsorted'
import { SelectedContainerItem } from './SelectedContainerItem'

export const SelectedContainer = ({ items, onClick}) => {

  const currentItems =
    items.filter(item => item.selected == true)


  return (
    <div onClick={onClick} className="selected_container">
      {currentItems.map((item, i) =>
				 <SelectedContainerItem {...item} key={i}/>

				)}
      <UpDownArrows className="up_down_arrows"/>
    </div>
  )
}
