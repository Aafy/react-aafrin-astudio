import { SetStateAction, useState } from "react";
import { ILabelKeyPair } from "../models/ILabelKeyPair";
import { TableProps } from "../models/ITableModel";

function Table(props: TableProps) {
  const pageSizeOptions = [5, 10, 20, 50];

  const [showInput, setInputVisiblity] = useState(false);
  const [searchKey, setSearchKey] = useState("");

  const handleInputChange = (event: {
    target: { value: SetStateAction<string> };
  }) => {
    setSearchKey(event.target.value);
    props.onSearchChange(event.target.value as any);
  };
  const handleSearchClick = () => {
    setInputVisiblity(!showInput);
    setSearchKey("");
    props.onSearchChange("");
  };

  const handlePageSizeChange = (event: {
    target: { value: SetStateAction<string> };
  }) => {
    props.onPageSizeChange(Number(event.target.value));
  };

  return (
    <>
      {/*  Dropdown menu */}

      <select name="pageSize" id="pageSize" onChange={handlePageSizeChange}>
        {pageSizeOptions.map((pageSize: number) => (
          <option
            value={pageSize}
            key={"Showing " + pageSize + "items"}
            defaultValue="5"
          >
            {pageSize}
          </option>
        ))}
      </select>

      {/* Search Icon */}
      <svg
        onClick={handleSearchClick}
        className="svg-icon search-icon"
        aria-labelledby="title desc"
        role="img"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 19.9 19.7"
      >
        <title id="title">Search Icon</title>
        <desc id="desc">A magnifying glass icon.</desc>
        <g className="search-path" fill="none" stroke="#848F91">
          <path strokeLinecap="square" d="M18.5 18.3l-5.4-5.4" />
          <circle cx="8" cy="8" r="7" />
        </g>
      </svg>

      {showInput && (
        <input
          placeholder="Search for ..."
          value={searchKey}
          onChange={handleInputChange}
        />
      )}
      {/* Table Implementation */}
      <table key="Resusable Table">
        <thead key="Table Header">
          <tr>
            {props.headers.map((header: ILabelKeyPair) => (
              <th key={header.key}>
                <div key={header.label}>{header.label}</div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody key="Table Body">
          {props.rowData.length === 0 && (
            <tr>
              <td>No Data Found</td>
            </tr>
          )}
          {props.rowData.map((tuple: any, idx: number) => (
            <tr key={idx}>
              {props.keyMapper.map((columnName: string) => (
                <td key={columnName}>
                  {tuple[columnName] ? tuple[columnName] : "-"}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
export default Table;
