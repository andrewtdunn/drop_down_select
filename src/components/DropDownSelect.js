import { Component } from 'react'
import { ListContainer } from './ListContainer'
import { SelectedContainer } from './SelectedContainer'


export class DropDownSelect extends Component {
  constructor(props) {
    super (props)
    this.state = {
      items: [
        {
          id: 1,
          hexColor: "#c488f3",
          name: "2 Day Shipping",
          selected: true
        },
        {
          id: 2,
          hexColor: "#25a696",
          name: "3-5 Day Shipping",
          selected: false
        },
        {
          id: 3,
          hexColor: "#da3b11",
          name: "Address Check",
          selected: false
        }
      ],
      showDropdown: true
    }
    this.toggleDropdown = this.toggleDropdown.bind(this)
    this.onItemChange = this.onItemChange.bind(this)
    this.getCSV = this.getCSV.bind(this)
  }

  toggleDropdown(){
    this.setState({
      showDropdown: !this.state.showDropdown
    })
  }

  findByID(id){
    console.log(id)
  }

  onItemChange(id, checked){
    let items = this.state.items
    let itemIndex = items.findIndex(item => item.id == id)
    items[itemIndex].selected = checked
    this.setState({
      items: items
    })
  }

  getCSV(){
    let currItems =
      this.state.items.filter(item => item.selected == true)
    let csv = currItems.map( item => item.id )
    return csv.toString()
  }

  render() {
    return (
      <div className="drop_down_select">
        <input type="hidden" name="selectedItems" value={this.getCSV()}/>
        <SelectedContainer

            onClick={this.toggleDropdown}
            items={this.state.items}
            />
        <ListContainer items={this.state.items}
                       showDropdown={this.state.showDropdown}
                       onItemChange={this.onItemChange}/>
      </div>

    )
  }
}
