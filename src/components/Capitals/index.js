import {Component} from 'react'

import './index.css'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

class Capitals extends Component {
  state = {id: countryAndCapitalsList[0].id}

  onChangeValue = event => {
    this.setState({id: event.target.value})
  }

  paraText = () => {
    const {id} = this.state
    const filter = countryAndCapitalsList.filter(k => k.id === id)
    const value = filter[0].country
    return value
  }

  render() {
    const {id} = this.state
    const paraContent = this.paraText()

    return (
      <div>
        <h1>Countries And Capitals</h1>
        <div className="container-2">
          <select value={id} onChange={this.onChangeValue}>
            {countryAndCapitalsList.map(k => (
              <option key={k.id} value={k.id}>
                {k.capitalDisplayText}
              </option>
            ))}
          </select>
          <p>is capital of which country</p>
        </div>
        <p>{paraContent}</p>
      </div>
    )
  }
}
export default Capitals
