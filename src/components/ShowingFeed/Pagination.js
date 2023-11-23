import { useState } from "react";
import styled from "styled-components";

const Pagination = ({ total, limit, pageNum, setPage }) => {
  const numPages = Math.ceil(total / limit);
  const [currentPage, setCurrentPage] = useState(pageNum - 1);
  const firstNum = currentPage - (currentPage % limit) + 1; // 2-> 1, 5 -> 6
  const lastNum = (currentPage - currentPage % limit + limit) < numPages ? currentPage - (currentPage % limit) + limit : numPages;

  return (
    <>
      <Nav>
        <Button onClick={() => { setPage(firstNum - 1); setCurrentPage(firstNum - 2); }} disabled={(pageNum - 1) / limit < 1}>
          &lt;&lt;
        </Button>
        <Button onClick={() => { setPage(pageNum - 1); setCurrentPage(pageNum - 2); }} disabled={pageNum === 1}>
          &lt;
        </Button>
        {Array(lastNum - firstNum + 1)
          .fill()
          .map((_, i) => (
            <Button
              key={i}
              onClick={() => { setPage(firstNum + i); }}
              aria-current={pageNum === firstNum + i ? "page" : null}
              style={{ zIndex: "50px" }}
            >
              {firstNum + i}
            </Button>
          ))}
        <Button onClick={() => { setPage(pageNum + 1); setCurrentPage(pageNum); }} disabled={pageNum === numPages}>
          &gt;
        </Button>
        <Button onClick={() => { setPage(lastNum + 1); setCurrentPage(lastNum); }} disabled={lastNum === numPages}>
          &gt;&gt;
        </Button>
      </Nav>
    </>
  );
}

export default Pagination;

const Nav = styled.nav`
  display: flex;
  justify-content: center;
  width: 100%;
  align-items: center;
  gap: 4px;
  margin: 16px;
`;

const Button = styled.button`
  border-radius: 10px;
  text-align: center;
  padding: 1px 1px 0px 1px;
  border: none;
  width: 2em;
  height: 2.2em;
  background: linear-gradient(271deg, #888BF4 0%, #5151C6 100%);
  color: white;

  &:hover {
    background: linear-gradient(271deg, #888BF4 0%, #5151C6 100%);
    cursor: pointer;
  }

  &[disabled] {
    background: #BDBDBD;
    cursor: revert;
    transform: revert;
  }

  &[aria-current] {
    background: linear-gradient(271deg, #5151C6 0%, #888BF4 100%);
    width: 2.2em;
    height:2.4em;
    font-size: 15px;
    font-weight: bold;
    cursor: revert;
    transform: revert;
  }
`;