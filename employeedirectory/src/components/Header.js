import React, { Component } from "react";
import InputField from "../InputField";

class Header extends Component {

    render() {
        return (
            <div className="jumbotron text-center" >
                <h1>Employee Directory</h1>
                <hr />
                <p>Type employee's name below to search. Click the table categories section to reverse list order.</p>
                <br />
                <InputField handler={this.props.handler} />
            </div>
        )
    };
};

export default Header;