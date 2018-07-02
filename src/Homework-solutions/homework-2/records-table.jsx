import React, { Component } from 'react';
import { array } from 'prop-types';
import TableHeader from './table-header';
import TableBody from './table-body';

export default class RecordsTable extends Component {
    constructor(props) {
        super(props);

        this.state = {
            records: []
        };

        this.sortData = this.sortData.bind(this);
    }

    sortData(criteria) {
        function sort(current, next) {
            if (current[criteria] < next[criteria]) {
                return -1;
            }

            if (current[criteria] > next[criteria]) {
                return 1;
            }
            
            return 0;
        }

        this.setState({
            records: !this.state.records.length
                ? [...this.props.records].sort(sort)
                :  [...this.state.records].sort(sort)
        });
    }
    
    render() {
        const tableHeadings = {
            position: 'Position',
            salary: 'Salary',
            office: 'Office',
            extensionNumber: 'Ext.'
        };

        const recordDataOrder = [
            'position',
            'salary',
            'currency',
            'office',
            'extensionNumber',
        ];

        return (
            <table>
               <TableHeader
                    tableHeadings={tableHeadings}
                    onClickCb={this.sortData}
                />
               <TableBody 
                    records={this.state.records.length ? this.state.records : this.props.records}
                    recordDataOrder={recordDataOrder}
                />
            </table>
        );
    }
}

RecordsTable.propTypes = {
    records: array.isRequired
};