import React from 'react'; 

class AddNewItem extends React.Component{
  	state={
    	value:''
  	}	
	handleChange = event => {
    	this.setState({ value: event.target.value });
   	};
	addItem = event => {
        event.preventDefault();
        this.props.addItem(this.state.value)
  	};
	
	inputIsEmpty = () => {
    	return this.state.value === '';
  	};
  

  
	render(){
      return(
      	<React.Fragment>
        	<h2>Shopping List</h2>
            <form onSubmit={this.addItem}>
              <input
                type="text"
                placeholder="Enter New Item"
                value={this.state.value}
                onChange={this.handleChange}
              />
              <button disabled={this.inputIsEmpty()} onClick={this.addItem}>Add</button>
            </form>
        
        </React.Fragment>
      
      )    
    }
}
export default AddNewItem;