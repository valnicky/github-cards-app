import React from 'react';
import CardList from './components/CardList';
import './App.css';
import Form from './components/Form';

class App extends React.Component {
  state = {profiles: []}
  addNewProfile = (profileData) => {
   this.setState(prevState => ({
     profiles: [...prevState.profiles, profileData],  }));
  }
  render(){
    return ( <div className = "App" >
      <div className="header">{this.props.title}</div>{this.props.description}
      <Form  onSubmit={this.addNewProfile}/>
        <CardList profiles={this.state.profiles}/>
   </div>
    );}
}

export default App;