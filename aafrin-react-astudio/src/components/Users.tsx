import axios from "axios";
import { useEffect, useState } from "react";
import { IUsersResponse, IUser } from "../models/IUsers";
import Table from "./Table";
import Pagination from "./Pagination";

function Users() {
  const [userCount, setUsersCount] = useState<number>(0);
  const [usersData, setUsersData] = useState<IUser[]>([]);
  const [filteredData, setFilteredData] = useState<IUser[]>([]);
  const [selectedPageSize, setPageSize] = useState<number>(5);
  const [currentPage, setCurrentPage] = useState<number>(1); // Current page
  const [skipCount, setSkipCount] = useState<number>(0);

  const headers = [
    { key: "firstName", label: "FIRST NAME" },
    { key: "lastName", label: "LAST NAME" },
    { key: "maidenName", label: "MAIDEN NAME" },
    { key: "age", label: "AGE" },
    { key: "gender", label: "GENDER" },
    { key: "email", label: "EMAIL" },
    { key: "username", label: "USERNAME" },
    { key: "bloodgroup", label: "BLOOD GROUP" },
    { key: "eyecolor", label: "EYE COLOR" },
    { key: "phone", label: "PHONE NUMBER" },
    { key: "height", label: "HEIGHT" },
    { key: "dob", label: "DOB" },
  ];

  const keys = [
    "firstName",
    "lastName",
    "maidenName",
    "age",
    "gender",
    "email",
    "username",
    "bloodGroup",
    "eyeColor",
    "phone",
    "height",
    "birthDate",
  ];
  const [searchKey, setSearchKey] = useState("");

  const handleSearch = (searchTerm: string) => {
    setSearchKey(searchTerm);
  };

  const handlePageSizeChange = (pageSize: number) => {
    setPageSize(pageSize);
    setCurrentPage(1);
    setSkipCount(0);
  };

  const handlePaginationClick = (selectedPageNumber: number) => {
    setCurrentPage(selectedPageNumber);
    const skipCalcValue = selectedPageSize * (selectedPageNumber - 1);
    setSkipCount(skipCalcValue);
  };

  useEffect(() => {
    const searchStr = searchKey.toString().toLowerCase();

    const filteredResults = usersData.filter(
      (user) =>
        user.age.toString().includes(searchStr) ||
        user.height.toString().includes(searchStr) ||
        user.firstName.toLowerCase().includes(searchStr) ||
        user.lastName.toLowerCase().includes(searchStr) ||
        user.maidenName.toLowerCase().includes(searchStr) ||
        user.gender.toLowerCase().includes(searchStr) ||
        user.email.toLowerCase().includes(searchStr) ||
        user.username.toLowerCase().includes(searchStr) ||
        user.bloodGroup.toLowerCase().includes(searchStr) ||
        user.eyeColor.toLowerCase().includes(searchStr) ||
        user.phone.toLowerCase().includes(searchStr) ||
        user.birthDate.toLowerCase().includes(searchStr)
    );
    setFilteredData(filteredResults);
  }, [searchKey]);

  useEffect(() => {
    axios(
      `https://dummyjson.com/users?limit=${selectedPageSize}&skip=${skipCount}`
    )
      .then((usersResponse) => {
        const usersResponseData = usersResponse.data as IUsersResponse;
        setUsersCount(usersResponseData.total);
        setUsersData(usersResponseData.users);
        setFilteredData(usersResponseData.users);
      })
      .catch(console.log);
  }, [selectedPageSize, currentPage]);
  return (
    <div>
      <Table
        headers={headers}
        rowData={filteredData}
        keyMapper={keys}
        onSearchChange={handleSearch}
        onPageSizeChange={handlePageSizeChange}
      />

      <Pagination
        usersPerPage={selectedPageSize}
        totalUsers={userCount}
        paginate={handlePaginationClick}
        forcePageNumber={currentPage - 1}
      />
    </div>
  );
}

export default Users;
