import React, { Component } from 'react'
import axios from 'axios'
import speaker from '../../assets/speaker.svg'
import Filter from '../Filter'
import './style.css'

class arabicListWords extends Component {
  state = {
    initialList: [],
    audioList: [],
    filteredItems: [],
    clickedFilter: ''
  }

  componentDidMount() {
    axios.get(`api/arabic-words`).then(({ data }) => {
      this.setState({
        initialList: data,
        filteredItems: data
      })
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

  getPronunciation = (sentence, index) => {
    axios
      .get(`/api/arabic-words-pronunciation/${sentence}`)
      .then(result => {
        this.setState(prevState => {
          const newAudioList = prevState.audioList.slice()
          newAudioList[index] = result.data[0].standard_pronunciation.pathmp3
          return { audioList: newAudioList }
        })
      })
      .catch(err => console.log(err))
  }

  render() {
    return (
      <div>
        <h1 className="arabic-list-title"> List Of Arabic Words </h1>
        <React.Fragment>
          <Filter
            filterList={['All', 'greetings', 'getting around']}
            updateClickedFilter={this.updateClickedFilter}
          />
          <div>
            {this.state.filteredItems.map(
              ({ english, arabic, pronunciation }, index) => (
                <ul className="list">
                  <li className="english-word">{english}</li>
                  <li className="arabic-word">{arabic}</li>
                  <li className="pronunciation">
                    <div className="audio">
                      <img
                        type="image"
                        src={speaker}
                        className="get-pronunciation"
                        onClick={() => this.getPronunciation(arabic, index)}
                      />
                      <audio
                        className="audio-bar"
                        controls
                        src={this.state.audioList[index]}
                      />
                    </div>
                    {pronunciation}
                  </li>
                </ul>
              )
            )}
          </div>
        </React.Fragment>
      </div>
    )
  }
}

export default arabicListWords
