var Note = React.createClass({
    render: function() {
        var style = {
            backgroundColor: this.props.color
        };
        
        return (
            <div className="note" style={style}> 
                <span className="delete-note" onClick={this.props.onDelete}> x </span>
                {this.props.children}
            </div>
        );
    }
});

var NoteEditor = React.createClass({
    getInitialState: function() {
        return {
            text: ''    
        };    
    },
    
    handleTextChange: function(event) {
        this.setState({ text: event.target.value });    
    },
    
    handleNoteAdd: function() {
        var newNote = {
            text: this.state.text,
            color: 'yellow',
            id: Date.now()
        };
        
        this.props.onNoteAdd(newNote);
        this.setState({ text: '' });
    },
    
    render: function() {
        return (
            <div className="note-editor">
                <textarea 
                    placeholder="Enter your note here..." 
                    rows={5} 
                    className="textarea"
                    value={this.state.text}
                    onChange={this.handleTextChange}
                />
                <button className="add-button" onClick={this.handleNoteAdd}> Add </button>
            </div>
        );
    }
});

var NotesGrid = React.createClass({
    componentDidMount: function() {
        var grid = this.refs.grid;
        this.msnry = new Masonry( grid, {
            itemSelector: ".note",
            columnWidth: 100,
            gutter: 10,
            isFitWidth: true
        });    
    },
    
    componentDidUpdate: function(prevProps) {
        if (this.props.notes.length !== prevProps.notes.length) {
            this.msnry.reloadItems();
            this.msnry.layout();
        }    
    },
    
    render: function() {
        var onNoteDelete = this.props.onNoteDelete;
        
        return (
            <div className="notes-grid" ref="grid">
                {
                    this.props.notes.map(function(note) {
                        return ( 
                            <Note 
                                key={note.id}
                                onDelete={onNoteDelete.bind(null, note)}
                                color={note.color}> 
                                {note.text} 
                            </Note>
                        );
                    })
                }
            </div>
        );
    }
});

var NotesApp = React.createClass({
    getInitialState: function() {
            return {
                notes: [{
                    id: 0,
                    text: "Повседневная практика показывает, что дальнейшее развитие различных форм деятельности в значительной степени обуславливает создание соответствующий условий активизации. Задача организации, в особенности же дальнейшее развитие различных форм деятельности позволяет выполнять важные задания по разработке форм развития. Значимость этих проблем настолько очевидна, что реализация намеченных плановых заданий позволяет выполнять важные задания по разработке систем массового участия.",
                    color: "#FFD700"
                }, {
                    id: 1,
                    text: "Товарищи! реализация намеченных плановых заданий представляет собой интересный эксперимент проверки форм развития. Разнообразный и богатый опыт реализация намеченных плановых заданий требуют от нас анализа дальнейших направлений развития. Задача организации, в особенности же начало повседневной работы по формированию позиции позволяет оценить значение дальнейших направлений развития. Не следует, однако забывать, что новая модель организационной деятельности обеспечивает широкому кругу (специалистов) участие в формировании форм развития.",
                    color: "20B2AA"
                }, {
                    id: 2,
                    text: "Значимость этих проблем настолько очевидна, что постоянное информационно-пропагандистское обеспечение нашей деятельности позволяет выполнять важные задания по разработке дальнейших направлений развития. Не следует, однако забывать, что консультация с широким активом требуют от нас анализа направлений прогрессивного развития. Товарищи! постоянный количественный рост и сфера нашей активности обеспечивает широкому кругу (специалистов) участие в формировании форм развития. Таким образом сложившаяся структура организации позволяет оценить значение форм развития.",
                    color: "#90EE90"
                }, {
                    id: 3,
                    text: "Товарищи! реализация намеченных плановых заданий представляет собой интересный эксперимент проверки форм развития. Разнообразный и богатый опыт реализация намеченных плановых заданий требуют от нас анализа дальнейших направлений развития.",
                    color: "#87CEFA"
                },{
                    id: 4,
                    text: "Не следует, однако забывать, что консультация с широким активом требуют от нас анализа направлений прогрессивного развития. Товарищи! постоянный количественный рост и сфера нашей активности обеспечивает широкому кругу (специалистов) участие в формировании форм развития. Таким образом сложившаяся структура организации позволяет оценить значение форм развития.",
                    color: "#FFB6C1"
                },{
                    id: 5,
                    text: "Повседневная практика показывает, что дальнейшее развитие различных форм деятельности в значительной степени обуславливает создание соответствующий условий активизации. Задача организации, в особенности же дальнейшее развитие различных форм деятельности позволяет выполнять важные задания по разработке форм развития. Значимость этих проблем настолько очевидна, что реализация намеченных плановых заданий позволяет выполнять важные задания по разработке систем массового участия.",
                    color: "#5F9EA0"
                }]
            };  
    },
    
    componentDidMount: function() {
        var localNotes = JSON.parse(localStorage.getItem('notes'));
        if (localNotes) {
            this.setState({ notes: localNotes });
        }
    },
    
    componentDidUpdate: function() {
        this._updateLocalStorage();    
    },
    
    handleNoteDelete: function(note) {
        var noteId = note.id;
        var newNotes = this.state.notes.filter(function(note) {
            return note.id !== noteId;
        });
        this.setState({notes: newNotes});
    },
    
    handleNoteAdd: function(newNote) {
        var newNotes = this.state.notes.slice();
        newNotes.unshift(newNote);
        this.setState({ notes: newNotes });
    },
    
    render: function() {
        return (
            <div className="notes-app">
                <h2 className="app-header">NotesApp</h2>
                <NoteEditor onNoteAdd={this.handleNoteAdd} />
                <NotesGrid notes={this.state.notes} onNoteDelete={this.handleNoteDelete}/>
            </div>
        );
    },
    
    _updateLocalStorage: function() {
        var notes = JSON.stringify(this.state.notes);
        localStorage.setItem('notes', notes);
    }
});

ReactDOM.render(
    <NotesApp />,
    document.getElementById('mount-point')
);