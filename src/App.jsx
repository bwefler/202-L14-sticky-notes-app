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

  // Map over the notes array and for each note object
  onSearch = (text) => {
    const newSearchText = text.toLowerCase();
    // map over all notes
    const updatedNotes = this.state.notes.map((note) => {
      // if text string is empty, set doesMatchSearch and return
      if (!newSearchText) {
        note.doesMatchSearch = true;  
        return note;
      } else {
        const title = note.title.toLowerCase();
        const description = note.description.toLowerCase();
        const titleMatch = title.includes(newSearchText);
        const descriptionMatch = description.includes(newSearchText);
        const hasMatch = titleMatch || descriptionMatch;
        // Update search result
        note.doesMatchSearch = hasMatch;
        return note;
      };
    });
    // Update state
    this.setState({
      notes : updatedNotes,
      searchText : newSearchText,
    });
  };

  deleteNote = (noteId) => {
    //  remove note which matches note ID
    const updatedNotes = this.state.notes.filter(
      note => note.id !== noteId
    );
    this.setState({ notes : updatedNotes});
  };

  render() {
    return (
      <div className="app">
        <Header onSearch={this.onSearch} addNote={this.addNote} searchText={this.state.searchText} />
        <NotesList deleteNote={this.deleteNote} onType={this.onType} notes={this.state.notes} />
      </div>
    );
  }
}

export default App;
