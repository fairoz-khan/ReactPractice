import React, { FormEvent, useState } from 'react';
import { IToDoItem } from '../App';
//import * as modStyles from './additem.module.css';

export interface IProps {
    handleAdd: (data: IToDoItem) => void
}

const AddItem: React.FC<IProps> = (props) => {
    const [todo, setToDo] = useState<string | null>(null);
    const [todoDate, setToDoDate] = useState<Date | null>(null);

    const handleAddToDo = (ev: FormEvent) => {
        ev.preventDefault();
        props.handleAdd({ text: todo, date: todoDate })
    }
    return (
        <div>
            <form className="row g-3">
                <div className="col-auto">
                    <input
                        type="text"
                        className="form-control"
                        id="inputText2"
                        placeholder="Enter To Do List Here."
                        onChange={(value) => setToDo(value.target.value)}
                    />
                </div>
                <div className="col-auto">
                    <input
                        type="date"
                        className="form-control-plaintext"
                        id="todolistDate"
                        onChange={(value) => setToDoDate(value.target.valueAsDate)}
                    />
                </div>
                <div className="col-auto">
                    <button className="btn btn-primary mb-3" onClick={handleAddToDo}>Add</button>
                </div>
            </form>
        </div>
    );
}

export default AddItem;