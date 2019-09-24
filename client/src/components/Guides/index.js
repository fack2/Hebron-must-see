import React from 'react'
import Filter from '../Filter'
import ListOfItems from '../ListOfItems'

class Guides extends React.Component {
  state = {
    initialList: [],
    filteredItems: [],
    clickedFilter: ''
  }

  componentDidMount() {
    this.setState({
      initialList: this.props.listOfItems,
      filteredItems: this.props.listOfItems
    })
  }

  updateClickedFilter = clickedFilter => {
    this.setState({ clickedFilter })
    this.updateFilteredItems(clickedFilter)
  }

  updateFilteredItems = clickedFilter => {
    if (clickedFilter === 'All') {
      this.setState({ filteredItems: this.state.initialList })
    } else {
      const filteredItems = this.state.initialList.filter(
        item => item.type === clickedFilter
      )
      this.setState({ filteredItems })
    }
  }

  render() {
    return (
      <React.Fragment>
        <Filter
          filterList={['All', 'English', 'Italian', 'French']}
          updateClickedFilter={this.updateClickedFilter}
        />
        <ListOfItems type="guides" listOfItems={this.state.filteredItems} />
      </React.Fragment>
    )
  }
}

export default Guides
