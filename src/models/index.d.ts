import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type EmployeeMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Employee {
  readonly id: string;
  readonly fname?: string;
  readonly lname?: string;
  readonly addr?: string;
  readonly sin?: string;
  readonly mobile?: string;
  readonly email?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Employee, EmployeeMetaData>);
  static copyOf(source: Employee, mutator: (draft: MutableModel<Employee, EmployeeMetaData>) => MutableModel<Employee, EmployeeMetaData> | void): Employee;
}