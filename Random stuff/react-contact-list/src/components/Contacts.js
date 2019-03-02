import React, { Component } from 'react';
import Contact from './Contact';


class Contacts extends Component {
  state = {
    contacts: [
      {
        id: 1,
        name: 'Jonhn Doe',
        email: 'Jonhn@gmail.com',
        number: '555 - 555 - 555',
        showContactInfo: true
      },
      {
        id: 2,
        name: 'Mary Jane',
        email: 'Mary@gmail.com',
        number: '333 - 333 - 333',
        showContactInfo: true
      },
      {
        id: 3,
        name: 'Kyle Kent',
        email: 'Kyle@gmail.com',
        number: '888 - 888 - 888',
        showContactInfo: true
      }
    ]
  }

  showHideContact = (id, e) => {
    const newContacts = this.state.contacts;
    newContacts.map((contact) => {
      if (contact.id === id) {
        contact.showContactInfo = !contact.showContactInfo
      }
      return newContacts;
    })
    this.setState({
      contacts: newContacts
    });
  };

  deleteContact = (id, e) => {
    const newContacts = this.state.contacts.filter(contact => contact.id !== id)
    this.setState({
      contacts: newContacts
    });
  };

  render() {
    return (
      <React.Fragment>
        {this.state.contacts.map((contact) => {
          return (
            <Contact
              contact={contact}
              showHideContact={this.showHideContact}
              deleteContact={this.deleteContact}
              key={contact.id}
            />
          )
        })}
      </React.Fragment>
    );
  }
}

export default Contacts;