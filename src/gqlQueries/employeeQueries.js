import { gql } from "@apollo/client";

const updateEmployeeQuery = gql`
  mutation UpdateEmployee($id: ID!, $name: String!, $position: String!, $email: String!, $phone: String!, $permissions: String!) {
    updateEmployee(
      updateEmployee: {
        id: $id
        name: $name
        position: $position
        email: $email
        phone: $phone
        permissions: $permissions
        photo: "https://i.imgur.com/5YAGklB.jpeg/100px180"
      }
    ) {
      id
      name
    }
  }
`;
const deleteEmployeeQuery = gql`
  mutation DeleteEmployee($id: ID!) {
    deleteEmployee(employeeId: $id) {
      success
      message
    }
  }
`;

const newEmployeeQuery = gql`
  mutation createNewEmployee($name: String!, $position: String!, $email: String!, $phone: String!, $permissions: String!) {
    createEmployee(
      newEmployee: {
        name: $name
        position: $position
        email: $email
        phone: $phone
        permissions: $permissions
        photo: "https://i.imgur.com/5YAGklB.jpeg/100px180"
      }
    ) {
      id
      name
      position
      email
      phone
      permissions
      photo
    }
  }
`;

export { updateEmployeeQuery, deleteEmployeeQuery, newEmployeeQuery };
