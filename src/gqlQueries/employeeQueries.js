import { gql } from "@apollo/client";

const updateEmployeeQuery = gql`
  mutation UpdateEmployee($id: ID!, $name: String!, $position: String!, $email: String!, $phone: String!, $permissions: String!, $photo: String!) {
    updateEmployee(updateEmployee: { id: $id, name: $name, position: $position, email: $email, phone: $phone, permissions: $permissions, photo: $photo }) {
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
const deleteEmployeeQuery = gql`
  mutation DeleteEmployee($id: ID!) {
    deleteEmployee(employeeId: $id) {
      success
      message
    }
  }
`;

const newEmployeeQuery = gql`
  mutation createNewEmployee($name: String!, $position: String!, $email: String!, $phone: String!, $permissions: String!, $photo: String!) {
    createEmployee(newEmployee: { name: $name, position: $position, email: $email, phone: $phone, permissions: $permissions, photo: $photo }) {
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

const getEmployeesQuery = gql`
  query {
    getEmployees {
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

export { updateEmployeeQuery, deleteEmployeeQuery, newEmployeeQuery, getEmployeesQuery };
