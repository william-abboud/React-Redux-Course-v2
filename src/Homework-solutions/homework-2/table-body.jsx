import React from 'react';
import { array } from 'prop-types';
import Record from './record';

export default function TableBody({ records = [], recordDataOrder = [] }) {
    return (
        <tbody>
            {
                records.map(record => <Record key={record.id} record={record} recordDataOrder={recordDataOrder} />)
            }
        </tbody>
    );
}

TableBody.propTypes = {
    records: array.isRequired,
    recordDataOrder: array.isRequired
};
