import React from 'react';
import firebase from 'firebase';
import Field from './field.jsx';
import Header from './header.jsx';
import Box from 'react-layout-components'

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
    };

    var config = {
      apiKey: "AIzaSyAmIiPLjX_zXq_djDWVu2ECCZjRFFUAlPk",
      authDomain: "fcg-kunstrasen.firebaseapp.com",
      databaseURL: "https://fcg-kunstrasen.firebaseio.com",
      storageBucket: "",
    }
    var app = firebase.initializeApp(config);
    // for (var i = 0; i < 1408; i++) {
    //   app.database().ref("fields/" +  i).set({
    //     id: i + 1,
    //     available: true,
    //     category: 'normal',
    //   });
    // }
    app.database().ref('fields').on("value", function(dataSnapshot) {
      console.log(dataSnapshot.val());
      var data = Object.keys(dataSnapshot.val()).map(key => dataSnapshot.val()[key]);
      this.setState({items: data});
      console.log(this.state.items);
    }.bind(this));
  }
  render() {

    return <div className="fcg">
      <Header></Header>
      <div className="content">
        <Box width={1776} wrap>
          {this.state.items.map(function(field) {
            return <Field key={field.id} id={field.id} available={field.available}></Field>
          })}
        </Box>
      </div>
    </div>
  }
}
