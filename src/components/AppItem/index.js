import {Component} from 'react'

import './index.css'

class AppItem extends Component {
  state = {isClicked: false, text: ''}

  OnClickButton = () => {
    this.setState(prevState => ({
      isClicked: !prevState.isClicked,
    }))
  }

  onChangeValueInput = event => {
    this.setState({text: event.target.value})
  }

  render() {
    const {text, isClicked} = this.state
    return (
      <div className="bg-container">
        <div className="card-conatiner">
          <h1 className="heading">Editable Text Input</h1>
          <div className="ableTeditext1">
            {isClicked ? (
              <div className="ableTeditext">
                <p className="textInput">{text}</p>
                <button
                  className="button"
                  type="button"
                  onClick={this.OnClickButton}
                >
                  Edit
                </button>
              </div>
            ) : (
              <div className="ableTeditext">
                <input
                  type="text"
                  onChange={this.onChangeValueInput}
                  className="inputValue"
                  placeholder="Type Anything & Save It"
                  value={text}
                />
                <button
                  className="button"
                  type="button"
                  onClick={this.OnClickButton}
                >
                  Save
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    )
  }
}

export default AppItem
