import React, { Component } from 'react'

export class Loadinggif extends Component {
  render() {
    return (
      <div className='text-centre' style={{textAlign:'center'}}>
        <iframe title="loading" src="https://giphy.com/embed/y1ZBcOGOOtlpC" width="100" height="100" className="giphy-embed" allowFullScreen style={{color:"white", background:"#0b1320"}} />
      </div>
    )
  }
}

export default Loadinggif
