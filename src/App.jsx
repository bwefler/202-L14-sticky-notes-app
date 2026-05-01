import React, { Component } from "react";
import Header from "./Header.jsx";
import NotesList from "./NotesList.jsx";

class App extends Component {
  state = {
    notes: [
      {
        id: Date.now(),
        title: "",
        description: "",
        doesMatchSearch: true,
      },
    ],
    searchText: "",
  };

  addNote = () => {
    const newNote = {
      id: Date.now(),
      title: "",
      description: "",
      doesMatchSearch: true,
    };
    // add new note to existing note array
    this.setState({ notes: [newNote, ...this.state.notes] });
  };

  onType = (editMeId, updatedKey, updatedValue) => {
    const updatedNotes = this.state.notes.map((note) => {
      if (note.id === editMeId && updatedKey === "title") {
        note.title = updatedValue;
      } else if (note.id === editMeId && updatedKey === "description") {
        note.description = updatedValue;
      }
      return note;
    });
    this.setState({ notes: updatedNotes });
  };

  render() {
    return (
      <div className="app">
        <Header addNote={this.addNote} searchText={this.state.searchText} />
        <NotesList onType={this.onType} notes={this.state.notes} />
      </div>
    );
  }
}

export default App;
