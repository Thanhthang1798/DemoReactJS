import React, { Component } from 'react';
import TaskItem from './TaskItem';

class TaskList extends Component {

    render() {
        var { internship } = this.props;
        var list = internship.map((internship, index) => {
            return <TaskItem
                key={internship.id}
                index={index}
                internship={internship}
                onUpdate = { this.props.onUpdate }
                onDelete = { this.props.onDelete }
            />
        });

        return (
            <div className="row mt-15">
                <table className="table text-center">
                    <thead>
                        <tr>
                            <th>STT</th>
                            <th>Tên</th>
                            <th>Trạng Thái</th>
                            <th>Hành động</th>
                        </tr>
                    </thead>
                    <tbody>
                        {list}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default TaskList;