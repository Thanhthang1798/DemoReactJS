import React, { Component } from 'react';
class TaskForm extends Component {

    constructor(props) {
        super(props);

        this.state = {
            name: '',
            mota: '',
        };

        this.onHandleChange = this.onHandleChange.bind(this);
        this.onHandleSubmit = this.onHandleSubmit.bind(this);
        this.reset = this.reset.bind(this);
    }

    onHandleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    onHandleSubmit(event) {
        event.preventDefault();
        if(this.state.name === '' || this.state.mota===''){
            alert("Điền thông tin trước khi submit")
        }
        else{
            if (this.state.id) {
                this.UpdateItem();
            } else {
                this.AddItem();
            }
        }
    }

    reset() {
        this.setState({
            id: null,
            name: '',
            mota: '',
        })
    }

    onCloseForm = () => {
        this.props.onCloseForm();
    }

    componentWillMount() {
        if (this.props.internship) {
            var item = this.props.internship;
            console.log(item)
            this.setState({
                id: item.id,
                name: item.name,
                mota: item.mota,
            })
        }

    }

    componentWillReceiveProps(nextProps) {
        if (nextProps) {
            if (nextProps.internship) {
                var item = nextProps.internship;
                console.log(item)
                this.setState({
                    id: item.id,
                    name: item.name,
                    mota: item.mota,
                })
            }else{
                this.setState({
                    id:null,
                    name:'',
                    mota: '',
                })
            }

        }
    }

    AddItem() {
        // Simple POST request with a JSON body using fetch
        var intern = {
            name:this.state.name,
            mota:this.state.mota,
        }
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(intern),
        };
        fetch('https://localhost:44338/api/Internships', requestOptions)
            .then(response => response.json())
            .then(
                data => {
                    console.log(data)
                    this.props.reloadData();
                    this.onCloseForm();
                }
            );

    }
    UpdateItem() {
        console.log(JSON.stringify(this.state));
        const putMethod = {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(this.state),
        };
        fetch('https://localhost:44338/api/Internships/' + this.state.id, putMethod)
            .then(response => response.json())
            .then(
                data => {
                    console.log(data)
                    this.props.reloadData();
                    this.onCloseForm();
                }
            );
    }

    render() {
        return (
            <div className="card text-left">
                <div className="card-header">
                    {this.state.id ? 'Cập nhật' : 'Thêm mới'}
                    <span
                        className="float-right"
                        onClick={this.onCloseForm}
                    >X</span>
                </div>
                <div className="card-body">
                    <form onSubmit={this.onHandleSubmit}>
                        <div className="form-group">
                            <label >Tên</label>
                            <input
                                type="text"
                                name="name"
                                className="form-control"
                                value={this.state.name}
                                onChange={this.onHandleChange}
                            />
                        </div>
                        <div className="form-group">
                            <label >Mô tả</label>
                            <textarea
                                rows="5"
                                type="text"
                                name="mota"
                                value={this.state.mota}
                                className="form-control"
                                onChange={this.onHandleChange}
                            ></textarea>
                        </div>
                        <button type="submit" className="btn btn-primary" >Submmit</button>
                        <button type="reset" className="btn btn-secondary ml-15" onClick={this.reset} >Xóa Trắng</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default TaskForm;