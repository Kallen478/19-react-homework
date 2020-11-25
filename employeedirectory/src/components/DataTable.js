import React from "react";
import DataBody from "./DataBody";
import TableListings from "./TableListings.js";

function DataTable(props) {
    let query = props.query;
    return (
        <div className="header">
            <table className="table">
                <TableListings
                    reverseOrder={props.reverseOrder}
                />
                <section>
                    {props.results.sort(props.compareFnc)
                        .filter(function (data) {
                            const empName = `${data.name.first} ${data.name.last}`;
                            if (!query) {
                                return data;
                            } else if (empName.toLowerCase().includes(query.toLowerCase())) {
                                return data;
                            }
                        })
                        .map(function (employee) {
                            return (
                                <DataBody
                                    photo={employee.picture.thumbnail}
                                    empName={`${employee.name.first} ${employee.name.last}`}
                                    address={`${employee.location.street.number} ${employee.location.street.name}`}
                                    email={employee.email}
                                    phone={employee.phone} />
                            );
                        })}
                </section>
            </table>
        </div>
    )
};

export default DataTable;