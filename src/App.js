import React, { Component } from 'react';
import {SearchInput,Table,AddContact} from './Components';
import './App.css';

class App extends Component {
  state = {
    contacts:[]
  }
  componentDidMount(){
     this.fetchDataFromApi({fn:contacts =>this.setState({contacts})})
  }

  fetchDataFromApi = ({query = '',options = {method:'GET'},fn}) =>{
    fetch(`http://127.0.0.1:8000/contacts${query}`,options)
    .then(resp => resp.json())
    .then(fn);
  }

  onSeachItem = e => this.fetchDataFromApi({query:`?q=${e}`,fn:contacts =>this.setState({contacts})});



  onDeleteItem = (e) =>{
    this.fetchDataFromApi({query:`/${e}`,options:{method:'DELETE'}
    ,fn:contacts =>this.fetchDataFromApi({fn:contacts =>this.setState({contacts})})});
  }

  onAddItem = ({name,phoneNumber}) =>{
    this.fetchDataFromApi({options:{
      headers: {
       'Accept': 'application/json',
       'Content-Type': 'application/json'
         },
       method: "POST",
       body: JSON.stringify({name, phoneNumber})
    },fn:contact => this.setState({contacts:[...this.state.contacts,contact]})})

  }

  render() {
    return (
      <div>
        <SearchInput onSeachItem={this.onSeachItem}/>
        <AddContact onAddItem={this.onAddItem} />
        <Table contacts={this.state.contacts} onDeleteItem={this.onDeleteItem} />
      </div>
    );
  }
}

export default App;
