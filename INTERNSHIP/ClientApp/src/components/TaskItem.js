import React, { Component } from 'react';

class TaskItem extends Component {

    onDetele = () =>{
        if(window.confirm("Bạn có muốn xóa "+ this.props.internship.name)){
            this.props.onDelete(this.props.internship.id)
        }
    }
    onUpdate = () =>{
        this.props.onUpdate(this.props.internship.id)
    }
    render() {
        var { internship, index } = this.props;

        return (
            <tr>
                <td>{index + 1}</td>
                <td>{internship.name}</td>
                <td>{internship.mota}</td>
                <td className="text-center">
                    <button type="button" className="btn btn-danger mr-15" onClick = {this.onDetele}> Xóa</button>
                    <button type="button" className="btn btn-warning" onClick = {this.onUpdate}> Sửa</button>
                </td>
            </tr>
        )
    }
}

export default TaskItem;