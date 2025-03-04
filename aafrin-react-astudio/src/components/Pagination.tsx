import ReactPaginate from "react-paginate";
import { PaginationProps } from "../models/ITableModel";

const Pagination = (props: PaginationProps) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(props.totalUsers / props.usersPerPage); i++) {
    pageNumbers.push(i);
  }

  const handlePageClick = (event: { selected: number }) => {
    const actualPage = event.selected + 1;
    props.paginate(actualPage);
  };

  return (
    <ReactPaginate
      previousLabel={"<"}
      forcePage={props.forcePageNumber}
      nextLabel={">"}
      breakLabel={"..."}
      pageCount={pageNumbers.length}
      marginPagesDisplayed={2}
      pageRangeDisplayed={3}
      onPageChange={handlePageClick}
      containerClassName={"pagination"}
      activeClassName={"active"}
    />
  );
};

export default Pagination;
