import React, { Component } from 'react'
import uuid from 'uuid';

const Context = React.createContext();

const Reducer = (state, action) => {
  switch (action.type) {
    case 'DELETE_CONTACT':
      return {
        ...state,
        contacts: state.contacts.filter(
          contact => contact.id !== action.payload
        )
      }
    case 'HIDE_CONTACT':
      return {
        ...state,
        contacts: state.contacts.map((contact) => {
          if (contact.id === action.payload) {
            contact.showContactInfo = !contact.showContactInfo
          }
          return contact;
        })
      }
    case 'ADD_CONTACT':
      return {
        ...state,
        contacts: [action.payload, ...state.contacts]
      }
    default: return state;
  };
}

export class Provider extends Component {
  state = {
    contacts: [
      {
        id: uuid(),
        name: 'Jonhn Doe',
        email: 'Jonhn@gmail.com',
        number: '555-555-555',
        showContactInfo: true
      },
      {
        id: uuid(),
        name: 'Mary Jane',
        email: 'Mary@gmail.com',
        number: '333-333-333',
        showContactInfo: true
      },
      {
        id: uuid(),
        name: 'Kyle Kent',
        email: 'Kyle@gmail.com',
        number: '888-888-888',
        showContactInfo: true
      }
    ],
    dispatch: (action) => {
      this.setState((state) => Reducer(state, action))
    }
  }

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    )
  }
}

export const Consumer = Context.Consumer;

// showHideContact = (id, e) => {
//     const newContacts = this.state.contacts;
//     newContacts.map((contact) => {
//       if (contact.id === id) {
//         contact.showContactInfo = !contact.showContactInfo
//       }
//       return newContacts;
//     })
//     this.setState({
//       contacts: newContacts
//     });
//   };

//   deleteContact = (id, e) => {
//     const newContacts = this.state.contacts.filter(contact => contact.id !== id)
//     this.setState({
//       contacts: newContacts
//     });
//   };

// const Reducer = (state, action) => {
//   switch (action.type) {
//     case 'DELETE_CONTACT':
//       console.log(state)
//       return console.log(state.contacts = state.contacts.filter(
//         contact => contact.id !== action.payload))
//     case 'HIDE_CONTACT':
//       console.log(state)
//       return console.log(state.contacts = state.contacts.map((contact) => {
//         if (contact.id === action.payload) {
//           contact.showContactInfo = !contact.showContactInfo
//         }
//         return state;
//       }))
//     default: return state;
//   };
// }