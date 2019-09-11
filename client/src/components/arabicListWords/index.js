import React, { Component } from 'react'
import axios from 'axios'
import './style.css'

class arabicListWords extends Component {
  state = {
    arabicList: [],
    audioList:[]
  }

  componentDidMount() {
    axios.get(`/api/arabic-words`).then(({ data }) => {
      this.setState({ arabicList: data })
    })
  }

  getPronunciation = (sentence,index) => {
    console.log('call works')
    axios.get(`/api/arabic-words-pronunciation/${sentence}`)
    .then(result=>
      {
        console.log('axios data :',result.data)

        this.setState((prevState)=>{
           let newAudioList = prevState.audioList.slice();
           newAudioList[index]=result.data[0].standard_pronunciation.pathmp3
          return {audioList: newAudioList}})

      }
    )
    .catch((err)=>console.log('axiox :',err))
  }

  render() {
    return (
      <div>
        <h1> List Of Arabic Words </h1>
        <React.Fragment>
          {this.state.arabicList.map(({ english, arabic, pronunciation },index) => (
            <ul>
              <li className="word-item">
                {english}  :
                {arabic}
                '{pronunciation}'
                <button className="getPronunciation" onClick={()=>this.getPronunciation(arabic,index)}>read</button>
               <audio controls src={this.state.audioList[index]}/>
              </li>
            </ul>
          ))}
        </React.Fragment>
      </div>
    )
  }
}

export default arabicListWords
