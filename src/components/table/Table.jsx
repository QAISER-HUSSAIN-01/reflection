import React from 'react'
import { data } from './data';
function Table() {
    return (
        <div>
            <table border={2}>
                <thead>
                    <tr>

                    </tr>
                </thead>
                <tbody>
                    {data.map((item,index)=>(
                    <tr>
                        {/* <td key={index}>{item.id}</td> */}
                        {data.map((item, index) => (<td key={index}>{item.id}</td>))}
                    </tr>
                    ))}

                </tbody>
            </table>
        </div>
    )
}

export default Table;