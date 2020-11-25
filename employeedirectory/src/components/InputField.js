import React, { Component } from "react";

class InputField extends Component {

    render() {
        return (
            <form className="search" >
                <div className="form-group text-center">
                    <input
                        onChange={(e) => {
                            this.props.handler(e.target.value)
                            console.log(e.target.value);
                        }}
                        type="text"
                        className="form-control"
                        placeholder="Enter employee name"
                    />
                </div>
            </form >
        )
    };
};

export default InputField;