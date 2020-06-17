import React, { Component } from 'react';
import $ from 'jquery';
import './App.css'
import Header from './components/Header';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      laData : {}
    };
  }

  getLAData(){
    const load = document.getElementById('siteLoading')
    $.ajax({
      url: '/laData.json',
      dataType: 'json',
      cache: false,
      success: function(data){
        this.setState({laData: data});
        setTimeout(() => {
          load.outerHTML='';
        }, 500)
      }.bind(this),
      error: function(xhr, status, err) {
        console.log(err);
        alert(err);
      }
    });
  }

  componentDidMount() {
    this.getLAData();
  }
  render() {
    return(
      <div className="App">
        <Header />
      </div>
    )
  }
}

export default App;