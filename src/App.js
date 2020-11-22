import React from 'react';
import logo from './logo.svg';
import './App.css';
import AddNewItem from './AddNewItem';
import DeleteItem from './DeleteItem';
import ItemsList from './ItemsList';

class App extends React.Component {
  state = {
    items: [],
  };

  
    handleAddItem = newItem => {
      this.setState(oldState => ({
        items: [...oldState.items, newItem],
      }));
    };
	deleteLastItem = event => {
    	this.setState(prevState => ({ items: this.state.items.slice(0, -1) }));
  	};
	noItemsFound = () => {
    	return this.state.items.length === 0;
  	};

  

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        
		<AddNewItem addItem={this.handleAddItem} items={this.state.items}/>
        <DeleteItem DeleteItem={this.deleteLastItem} noItems={this.noItemsFound}/>
		<ItemsList items={this.state.items}/>
      </div>
    );
  }
}

export default App;
