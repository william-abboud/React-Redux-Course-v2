import React from 'react';
import { array, object } from 'prop-types';

export default function Record({ record, recordDataOrder }) {
    return (
        <tr>
            {
                recordDataOrder.map((recordKey, i) => {
                    if (recordKey === 'currency') {
                        return;
                    }

                    if (recordKey === 'salary') {
                        const salary = record[recordKey];
                        const currency = record[recordDataOrder[i + 1]];
                        
                        return (
                            <td key={recordKey}>{`${salary}${currency}`}</td>
                        );
                    }

                    return <td key={recordKey}>{record[recordKey]}</td>;
                })
            }
        </tr>
    );
}

Record.propTypes = {
    record: object.isRequired,
    recordDataOrder: array.isRequired,
};
