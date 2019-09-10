import React, { Component } from 'react'
import axios from 'axios'
import forvoApi from 'forvo';
import './style.css'

class arabicListWords extends Component {
  state = {
    arabicList: []
  }

  componentDidMount() {
    axios.get(`api/arabic-words`).then(({ data }) => {
      this.setState({ arabicList: data })
    })
  }

  getPronunciation=()=>{
    // const forvo = forvoApi({ key: '2997f047b9a545330bb9f3776fce7ee0'});
    // const start = async () => {
    //   const wordPronunciations = await forvo.pronouncedWordsSearch({ search: word, language: 'ar' })
    //   alert(wordPronunciations)
    // }
    //
    // start().catch(err => console.log(err.stack));
    axios.get(`https://apifree.forvo.com/key/2997f047b9a545330bb9f3776fce7ee0/format/json/action/pronounced-words-search/search/hello/language/en`).then(({ data }) => {
      console.log('result',data)
    })

  }

  render() {
    return (
      <div>
        <h1> List Of Arabic Words </h1>
        <React.Fragment>
        <button onClick={()=>this.getPronunciation()}/>
          {this.state.arabicList.map(({ english, arabic, pronunciation }) => (
            <ul>
              <li className="word-item">
                {english}  :
                {arabic}
                '{pronunciation}'
              </li>
            </ul>
          ))}
        </React.Fragment>
      </div>
    )
  }
}

export default arabicListWords
