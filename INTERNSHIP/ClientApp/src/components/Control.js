import React, { Component } from 'react';

class Control extends Component {

    // constructor(props) {
    //     super(props);

    //     this.state = {
    //         tennguoidung: '',
    //     };

    //     this.onHandleChange = this.onHandleChange.bind(this);
    //     this.onHandleSubmit = this.onHandleSubmit.bind(this);
    //     this.reset = this.reset.bind(this);
    // }

    // onHandleChange(event) {
    //     this.setState({
    //         [event.target.name]: event.target.value
    //     })
    // }

    // onHandleSubmit(event) {
    //     event.preventDefault();
    //     console.log(this.state);
    // }

    // reset() {
    //     this.setState({
    //         tennguoidung: '',
    //     })
    // }

    render() {
        return (
            <div className="row mt-15">
                {/* search */}
                <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                    <div className="form-group">
                        <input type="text" name="" id="" className="form-control" placeholder="" aria-describedby="helpId" />
                    </div>
                </div>
                {/* sắp xếp */}
                <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                    <button type="button" className="btn btn-primary">
                        <i className="fa fa-plus" aria-hidden="true"></i> sắp xếp
                    </button>
                </div>
            </div>
        )
    }
}

export default Control;