import React, { Component } from "react";

class TableListings extends Component {
    render() {
        const categories = [
            {
                key: 1,
                name: "Photo"
            },
            {
                key: 2,
                name: "Name"
            },
            {
                key: 3,
                name: "Address"
            },
            {
                key: 4,
                name: "Email"
            },
            {
                key: 5,
                name: "Phone Number"
            }];

        return (
            <section>
                <tr>
                    {categories.map(header => (
                        <th key={header.key} scope="col" onClick={this.props.reverseOrder}>{header.name}</th>
                    ))}
                </tr>
            </section >
        )
    };
};

export default TableListings;