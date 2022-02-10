
import React from "react";

// Getting local JSON file
import Newspapers from "./newspapers.json";

function pagination() {
  return (
    <div>
        <table border="2">
            <tbody>
                <tr>
                    <th>Title</th>
                    <th>Department</th>
                </tr>
                {Newspapers.newspapers.map((item, i) => (
                    <tr key={i}>
                        <td>{item.title}</td>
                        <td>{item.submitdate}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
  )
}

export default pagination;

