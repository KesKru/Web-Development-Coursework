import React, { Component } from 'react';
import { Consumer } from '../../context';
import Contact from './Contact';

class Contacts extends Component {
  componentWillUpdate() {
    console.log('componentWillUpdate...');
  }

  componentDidUpdate() {
    console.log('componentDidUpdate...');
  }

  render() {
    return (
      <Consumer>
        {value => (
          <React.Fragment>
            {value.contacts.map((contact) => (
              <Contact
                contact={contact}
                key={contact.id}
              />
            ))}
          </React.Fragment>
        )}
      </Consumer>
    );
  }
}

export default Contacts;
