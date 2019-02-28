import React, { Component } from 'react';
import Contact from './Contact';


class Contacts extends Component {
  state = {
    contacts: [
      {
        id: 1,
        name: 'Jonhn Doe',
        email: 'google@gmail.com',
        number: '555 - 555 - 555'
      },
      {
        id: 2,
        name: 'Mary Jane',
        email: 'google@gmail.com',
        number: '333 - 333 - 333'
      },
      {
        id: 3,
        name: 'Kyle Kent',
        email: 'google@gmail.com',
        number: '888 - 888 - 888'
      }
    ]
  }

  render() {
    return (
      <div>
        {this.state.contacts.map((contact) => {
          return (
            <Contact contact={contact} key={contact.id} />
          )
        })}
      </div>
    );
  }
}

export default Contacts;