import React, {Component} from 'react';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      newItem : "",
      list:[]
    }
  }

  updateInput(key, value) {
    // update react state
    this.setState({ [key]: value });
  }

  addItem() {
    // create a new item with unique id
    const newItem = {
      id: 1 + Math.random(),
      value: this.state.newItem.slice()
 
    };

    // copy current list of items
    const list = [...this.state.list];

    // add the new item to the list
    list.push(newItem);

    // update state with new list, reset the new item input
    this.setState({
      list,
      newItem: ""
    });
  }
  clearList() {
    this.setState({
      newItem : "",
      list:[]
    });
  }
  deleteItem(id) {
    // copy current list of items
    const list = [...this.state.list];
    // filter out the item being deleted
    const updatedList = list.filter(item => item.id !== id);

    this.setState({ list: updatedList });
  }
  render() {
    return (
      <div className="App">
        <h1 className="app-title">TODO List</h1>
        <div className="container">
        <div
          style={{
            padding: 30,
            textAlign: "left",
            maxWidth: 500,
            margin: "auto"
          }}
        >
          Add an Item to TODO List
          <br />
          <input
            type="text"
            class="lf-ui-form-item"
            placeholder="Type item here"
            value={this.state.newItem}
            onChange={e => this.updateInput("newItem", e.target.value)}
          />
          <button
            className="add-btn btn-floating"
            onClick={() => this.addItem()}
            disabled={!this.state.newItem.length}
          >
            <i class="material-icons"> + </i>
          </button>
          <button
            style={{margin: 15}}
            onClick={() => this.clearList()}
          >
            <i class="material-icons"> Clear List </i>
          </button>
          <br /> <br />
          <ul>
            {this.state.list.map(item => {
              return (
                <li key={item.id}>
                  {item.value}
                  <button className="btn btn-floating" onClick={() => this.deleteItem(item.id)}>
                    <i class="material-icons">x</i>
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      </div>
    );
  }
}

export default App;
