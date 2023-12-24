import React from 'react';
import { IToDoItem } from '../App';

interface IProps {
    toDoItem: IToDoItem,
    removeItem: (id: number) => void
}

const ListItem: React.FC<IProps> = (props: IProps) => {
    return (
        <tr key={props.toDoItem.id}>
            <td>{props.toDoItem.text}</td>
            <td>{props.toDoItem.date?.toDateString()}</td>
            <td>
                <button type="button" className="btn btn-danger" onClick={() => { props.removeItem(props.toDoItem.id as number) }}>Remove</button>
            </td>
        </tr>
    )
}

export default ListItem;