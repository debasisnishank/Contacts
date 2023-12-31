import React, {Component} from "react";

class ListContact extends Component {
    render() {
        return (
            <ol className="contact-list">
                {this.props.contacts.map(contact => (
                    <li key={contact.id} className="contact-list-item">
                        <div
                            className="contact-avatar"
                            style={{
                                backgroundImage: `url(${contact.avatarURL})`
                            }}
                        />
                        <div className="contact-details">
                            <p>{contact.name}</p>
                            <p>{contact.handle}</p>
                        </div>
                        <button className="contact-remove">Remove</button>
                    </li>
                ))}
            </ol>
        );
    }
}

export default ListContact