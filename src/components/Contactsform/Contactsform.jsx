import { Component } from 'react';

export default class Contactsform extends Component {
  state = {
    name: '',
    number: '',
  };

  handleChange = ({ target }) => {
    this.setState({
      [target.name]: target.value,
    });
  };
  handleSubmit = evt => {
    evt.preventDefault();
    if (this.props.contacts.find(item => item.name === this.state.name)) {
      alert(`${this.state.name} is already in contacts.`);
    } else {
      this.props.onSubmit({ ...this.state });
      this.setState({
        name: '',
        number: '',
      });
    }
  };

  render() {
    return (
      <form className="form" onSubmit={this.handleSubmit}>
        <label>
          Name
          <input
            onChange={this.handleChange}
            value={this.state.name}
            className="form__input"
            type="text"
            name="name"
            required
          />
        </label>
        <label>
          Namber
          <input
            onChange={this.handleChange}
            value={this.state.number}
            className="form__input"
            type="tel"
            name="number"
            required
          />
        </label>
        <button className="form__button" type="submit">
          Add contact
        </button>
      </form>
    );
  }
}
