import React, { Component } from 'react';
// import uuid from 'uuid';
import axios from 'axios';

const Context = React.createContext();

// ----------------------REDUCER----------------------//

const Reducer = (state, action) => {
  switch (action.type) {
    case 'DELETE_CONTACT':
      return {
        ...state,
        contacts: state.contacts.filter(
          (contact) => contact.id !== action.payload,
        ),
      };
    case 'HIDE_CONTACT':
      return {
        ...state,
        contacts: state.contacts.map((contact) => {
          if (contact.id === action.payload) {
            contact.showContactInfo = !contact.showContactInfo;
          }
          return contact;
        }),
      };
    case 'ADD_CONTACT':
      return {
        ...state,
        contacts: [action.payload, ...state.contacts],
      };
    case 'EDIT_CONTACT':
      return {
        ...state,
        contacts: state.contacts.map((contact) => {
          const newArrayItem = (contact.id === action.payload.id) ? (contact = action.payload) : (contact);
          return newArrayItem;
        }),
      };
    default: return state;
  }
};

// ----------------------COMPONENT----------------------//

export class Provider extends Component {
  state = {
    contacts: [],
    dispatch: (action) => {
      this.setState((state) => Reducer(state, action));
    },
  }

  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then((res) => this.setState({ contacts: res.data }));
  }

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const { Consumer } = Context;

// ----------------------Using Fetch----------------------//

// function handleErrors(res) {
//   if (!res.ok) {
//       throw Error(res.statusText);
//   }
//   return res.json();
// }

// fetch("http://httpstat.us/500")
//     .then(handleErrors)
//     .then(response => console.log("ok") )
//     .catch(error => console.log(error) );
