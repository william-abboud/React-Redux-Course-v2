import React from 'react';
import { object, func } from 'prop-types';

export default function TableHeader({ tableHeadings = {}, onClickCb }) {
    return (
        <thead>
            <tr>
                {
                    Object.keys(tableHeadings).map(key => (
                        <th key={key} onClick={() => onClickCb(key)}>
                            {tableHeadings[key]}
                        </th>
                    ))
                }
            </tr>
        </thead>
    );
}

TableHeader.propTypes = {
    tableHeadings: object.isRequired,
    onClickCb: func.isRequired,
};
