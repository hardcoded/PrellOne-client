import React, { Component } from 'react';
import ListPrello from './ListPrello'

class Board extends Component {
  
  render() {
    const list=["Todo","In progress","Done"]
    return  <div>
              <h1>Board</h1>
              {list.map(element => (
                <div style={{ display: 'inline-block' }}>
                 <ListPrello key={element} list={element}></ListPrello>
                 </div>
            ))
        }
             
            </div>
  }
}

export default Board
