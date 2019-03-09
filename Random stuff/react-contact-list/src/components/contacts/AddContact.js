import React, { Component } from 'react';
import { Consumer } from '../../context';
import NewContactInput from '././NewContactInput';
import axios from 'axios';
// import uuid from 'uuid';

class AddContact extends Component {
	state = {
		name: '',
		email: '',
		phone: '',
		showContactInfo: false,
		errors: {}
	};

	onSubmit = (dispatch, e) => {
		e.preventDefault();

		const { name, email, phone, showContactInfo } = this.state;

		if (name === '') {
			this.setState({ errors: { name: 'Name is required !' } });
			return;
		}
		if (email === '') {
			this.setState({ errors: { email: 'Name is required !' } });
			return;
		}
		if (phone === '') {
			this.setState({ errors: { phone: 'Name is required !' } });
			return;
		}

		const newContact = {
			name: name,
			email: email,
			phone: phone,
			showContactInfo: showContactInfo
		};

		axios.post('https://jsonplaceholder.typicode.com/users', newContact).then((res) => {
			dispatch({
				type: 'ADD_CONTACT',
				payload: res.data
			});
		});

		this.setState({
			name: '',
			email: '',
			phone: '',
			errors: {}
		});

		this.props.history.push('/');
	};

	onChange = (e) => {
		this.setState({ [e.target.name]: e.target.value });
	};

	render() {
		const { name, email, phone, errors } = this.state;
		return (
			<Consumer>
				{(value) => {
					const { dispatch } = value;
					return (
						<div className="card new-contact">
							<div className="card-header">Add contact</div>
							<div className="card-body">
								<form onSubmit={this.onSubmit.bind(this, dispatch)}>
									<NewContactInput
										label="Name"
										type="text"
										name="name"
										className="form-control"
										placeholder="enter name..."
										value={name}
										onChange={this.onChange}
										error={errors.name}
									/>
									<NewContactInput
										label="Email"
										type="email"
										name="email"
										className="form-control"
										placeholder="enter email..."
										value={email}
										onChange={this.onChange}
										error={errors.email}
									/>
									<NewContactInput
										label="phone"
										type="text"
										name="phone"
										className="form-control"
										placeholder="enter phone..."
										value={phone}
										onChange={this.onChange}
										error={errors.phone}
									/>
									<input type="submit" className="btn btn-light btn-block" value="Add contact" />
								</form>
							</div>
						</div>
					);
				}}
			</Consumer>
		);
	}
}

export default AddContact;
