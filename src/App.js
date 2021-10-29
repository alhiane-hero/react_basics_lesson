import React, {Component} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Header from "./components/Header";
import Home from "./components/Home";
import Items from './components/Items';
import Form from "./components/Form";
import Blog from "./components/Blog";
import Not_Found from "./components/Not_Found";
import './styles/all.scss';
import './App.css';

class App extends Component {
  constructor() {
    super();
    console.log('constructor!');
  }

  componentDidMount() {
    console.log('component did mount!');
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('component updated!');
    console.log(prevProps, prevState);
  }

  state = {
    username: '',
    items: [
      {id: 1, name: 'Alhiane', age: 24},
      {id: 2, name: 'Aicha', age: 20},
      {id: 3, name: 'Lahcen', age: 32}
    ]
  }

  addUser = _ => {
    let username = this.state.username;
    let items = this.state.items;
    items.push({id: 4, name: 'Fati', age: 17});
    this.setState({
      username: username,
      items: items
    });
  }

  deleteUser = _ => {
    let username = this.state.username;
    let items = this.state.items;
    items.pop();
    this.setState({
      username,
      items,
    });
  }

  handleChange = event => {
    let items = this.state.items;
    this.setState({
      username: event.target.value,
      items: items
    });
  }

  render () {
    console.log('render!');
    return (
      <BrowserRouter>
        <div className='App'>
          <Header />
          <Switch>
            <Route exact path='/' render={_ => (
              <Home />
            )}/>
            <Route exact path='/items' render={_ => (
              <Items items={this.state.items}
              addUser={this.addUser}
              deleteUser={this.deleteUser}/>
            )}/>
            <Route exact path='/forms' render={_ => (
              <Form handleChange={this.handleChange}
              username={this.state.username}/>
            )}/>
            <Route exact path='/blog' component={Blog}/>
            <Route exact path='/:test_params' component={Not_Found}/>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
