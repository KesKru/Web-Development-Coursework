import React, { Component } from 'react';
import { Consumer } from '../../context';
import Contact from './Contact';

class Contacts extends Component {
  componentDidUpdate(){
    console.log('componentDidUpdate...')
  }
  componentWillUpdate(){
    console.log('componentWillUpdate...')
  }
  render() {
    return (
      <Consumer>
        {(value) => {
          return (
            <React.Fragment>
              {value.contacts.map((contact) => {
                return (
                  <Contact
                    contact={contact}
                    key={contact.id}
                  />
                )
              })}
            </React.Fragment>
          )
        }}
      </Consumer>
    );
  }
}

export default Contacts;