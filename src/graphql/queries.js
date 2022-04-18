/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getEmployees = /* GraphQL */ `
  query GetEmployees($id: ID!) {
    getEmployees(id: $id) {
      id
      firstName
      lastName
      address
      mobile
      email
      gender
      department
      position
      createdAt
      updatedAt
      owner
    }
  }
`;
export const listEmployees = /* GraphQL */ `
  query ListEmployees(
    $filter: ModelEmployeesFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listEmployees(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        firstName
        lastName
        address
        mobile
        email
        gender
        department
        position
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
