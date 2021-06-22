import React, { useEffect, useState } from 'react';
import useStyles from './useStyles';
import { getEmployees } from '../../services/employee';
import Pagination from '@material-ui/lab/Pagination';
import EmployeeTable, { Employee } from './component/EmployeeTable';
import Form from './component/Form';
import { addEmployee } from '../../services/employee';

const LIMIT = 5;

const EmployeeListPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [data, setData] = useState<Employee[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      setData(await getEmployees(currentPage, LIMIT));
    }
    fetchData();
  }, [currentPage]);

  const handlePageChange = (e: any, page: number) => {
    setCurrentPage(page);
  }

  const handleNewEmployeeSubmit = (name: string, email: string, position: string) => {
    // TODO: validate fields before call api, display error when not valid
    addEmployee(name, email, position);
    console.log({ name, email, position });
  }

  const classes = useStyles();
  return (
    <div>
      <h1 className={classes.title}>Employee Table</h1>
      <EmployeeTable data={data}/>

      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Pagination
          count={10}
          color="primary"
          page={currentPage}
          onChange={handlePageChange}
        />
      </div>

      <Form onSubmit={handleNewEmployeeSubmit} />
    </div>
  )
}

export default EmployeeListPage;
