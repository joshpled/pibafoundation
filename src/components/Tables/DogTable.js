import React from "react";
import { Table } from "react-bootstrap";

function DogTable({ data }) {
  return (
    <>
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Age</th>
            <th>Breed</th>
            <th>Link</th>
          </tr>
        </thead>
        <tbody>
          {data.length > 0 &&
            data.map((dog) => {
              return (
                <tr key={dog.id}>
                  <td>{dog.ID}</td>
                  <td>{dog.Name}</td>
                  <td>{dog.Age}</td>
                  <td>{dog.Breed}</td>
                  <td>
                    <a href={`https://www.shelterluv.com/tpf-a-${dog.ID}`} target="_blank" rel="noopener noreferrer">
                      Go to SL
                    </a>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </Table>
    </>
  );
}

export default DogTable;
