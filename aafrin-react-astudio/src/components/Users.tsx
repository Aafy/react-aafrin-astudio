import axios from "axios";
import { SetStateAction, useEffect, useState } from "react";
import { IUsersResponse, IUser } from "../models/IUsers";
import Table from "./Table";

function Users() {
  const [usersData, setUsersData] = useState<IUser[]>([]);
  const [filteredData, setFilteredData] = useState<IUser[]>([]);

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

    return () => {
      console.log("Cleaning");
    };
  }, [searchKey]);

  useEffect(() => {
    axios("https://dummyjson.com/users")
      .then((usersResposnse) => {
        const usersResponseData = usersResposnse.data as IUsersResponse;
        setUsersData(usersResponseData.users);
        setFilteredData(usersResponseData.users);
      })
      .catch(console.log);
  }, []);
  return (
    <>
      <Table
        headers={headers}
        rowData={filteredData}
        keyMapper={keys}
        onSearchChange={handleSearch}
      />
    </>
  );
}

export default Users;
