import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import env from '../env.json';

const Note = () => {
    let { noteURL } = useParams();
    const [noteText, setNoteText] = useState('');
    const [lineClass, setLineClass] = useState('hide');
    const [formClass, setFormClass] = useState('hide');
    const [errorClass, setErrorClass] = useState('hide');

    useEffect(() => {
        if (noteURL !== undefined) {
            fetch(env.urlBackend, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: JSON.stringify({ 'url': noteURL })
            })
                .then(response => response.json())
                .then(response => {
                    console.log(response);
                    if (response.result) {
                        setNoteText(response.note)
                        setLineClass('')
                        setFormClass('hide')
                        setErrorClass('hide')
                    }
                    else if (!response.result) {
                        setLineClass('hide')
                        setFormClass('hide')
                        setErrorClass('')
                    }
                })
        }
        else {
            setLineClass('hide')
            setFormClass('')
            setErrorClass('hide')
        }
    }, [])

    let getNote = (event) => {
        event.preventDefault();
        let url = event.target.elements.note.value;
        url = url.trim();
        if (url === '') {
            alert('Заполните поля');
            return false;
        }
        noteURL = url;
        window.location.href = env.url + "/" + url;
    };

    const searchNote = () => {
        window.location.href = env.url;
    }

    return (
        <div>
            <div className={lineClass}>
                <h4>Note:</h4>
                <div>{noteText}</div>
                <div><button className="btn btn-primary mt-3" onClick={searchNote}>Смотреть ище один note</button></div>
            </div>
            <div className={errorClass}>
                <p>Произошла ошибка!</p>
            </div>
            <div className={formClass}>
                <form onSubmit={getNote} >
                    <label className="form-label" htmlFor="">Введите hash заметки</label>
                    <input className="form-control" name="note" id="note"></input>
                    <button className="btn btn-primary mt-3" type="submit">Искать заметку</button>
                </form>
            </div>
        </div>
    );
}

export default Note;