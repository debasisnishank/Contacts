import logo from './logo.svg';
import './App.css';
import React, {Component} from 'react';
import ReactDOM from 'react-dom/client';
import ListContact from "./ListContact";

const contacts = [
    {
        "id": "karen",
        "name": "Karen Isgrigg",
        "handle": "karen_isgrigg",
        "avatarURL": "http://localhost:5001/karen.jpg"
    },
    {
        "id": "richard",
        "name": "Richard Kalehoff",
        "handle": "richardkalehoff",
        "avatarURL": "http://localhost:5001/richard.jpg"
    },
    {
        "id": "tyler",
        "name": "Tyler McGinnis",
        "handle": "tylermcginnis",
        "avatarURL": "http://localhost:5001/tyler.jpg"
    }
];


// eslint-disable-next-line no-undef
/*class ContactList extends Component{
    render() {
        const people = this.props.contacts;
        return (
            <>
                <h1>Hello its night, please come to the bed.</h1>
                <ol>
                    {people.map((person) => (
                        <li key={person.name}>{person.name}</li>
                    ))}
                </ol>
            </>
        )
    }
}*/

class App extends Component {
    render() {
        return (
            <div>
                <ListContact contacts={contacts}/>
            </div>
        );
    }
}

export default App;
