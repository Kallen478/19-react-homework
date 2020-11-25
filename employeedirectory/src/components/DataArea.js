import React, { Component } from "react";
import DataTable from "./DataTable";
import Header from "./Header"
import API from "../utils/API";

class DataArea extends Component {
    state = {
        search: "",
        results: [],
        order: "ascend"
    };

    handleReverseOrder = () => this.state.order === "ascend" ? this.setState({ order: "descend" }) : this.setState({ order: "ascend" });

    compareFnc = (a, b) => {

        if (this.state.order === "ascend") {
            if (a.name.first < b.name.first) {
                return -1;
            }
            if (a.name.first > b.name.first) {
                return 1;
            }
            return 0;
        }
        else {
            if (a.name.first < b.name.first) {
                return 1;
            }
            if (a.name.first > b.name.first) {
                return -1;
            }
            return 0;
        }
    };

    handleUserInput = value => {
        this.setState({ search: value })
    };

    searchEmployee = () => {
        API.search()
            .then(res => {
                this.setState({ results: res.data.results })
                console.log(this.state.results)
            })
            .catch(err => console.log(err));
    };

    componentDidMount() {
        this.searchEmployee();
    };

    render() {
        return (
            <div>
                <Header
                    handler={this.handleUserInput} />
                <DataTable
                    query={this.state.search}
                    results={this.state.results}
                    reverseOrder={this.handleReverseOrder}
                    compareFnc={this.compareFnc} />
            </div>
        )
    };
};

export default DataArea;