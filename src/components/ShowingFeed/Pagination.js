import { useState} from "react";
import styled from "styled-components";

const Pagination = ({total, limit, pageNum, setPage}) => {
    const numPages = Math.ceil(total/limit);
    const [currentPage, setCurrentPage] = useState(pageNum-1);
    const firstNum = currentPage - (currentPage % limit) + 1; // 2-> 1, 5 -> 6
    const lastNum = (currentPage - currentPage % limit + limit) < numPages ? currentPage - (currentPage % limit) + limit : numPages;
    
    return ( 
        <>
            <Nav>
                <Button onClick={() => {setPage(firstNum-1);setCurrentPage(firstNum-2);}} disabled={(pageNum-1)/limit < 1}>
                  &lt;&lt;
                </Button>
                <Button onClick={() => {setPage(pageNum - 1); setCurrentPage(pageNum-2);}} disabled={pageNum ===1}>
                    &lt;
                </Button>
                {Array(lastNum - firstNum+1)
                .fill()
                .map((_, i) => (
                    <Button
                        key={i}
                        onClick={() => setPage(firstNum + i)}
                        aria-current={pageNum=== firstNum + i ? "page" : null}
                    >
                        {firstNum + i}
                    </Button>
                ))}
                <Button onClick={() => {setPage(pageNum + 1); setCurrentPage(pageNum);}} disabled = {pageNum === numPages}>
                    &gt;
                </Button>
                <Button onClick={() => {setPage(lastNum+1); setCurrentPage(lastNum);}} disabled={lastNum===numPages}>
                  &gt;&gt;
                </Button>
            </Nav>
        </>
    );
}
 
export default Pagination ;

const Nav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
  margin: 16px;
`;

const Button = styled.button`
  border: none;
  padding: 8px;
  margin: 0;
  background: #262626;
  color: white;
  font-size: 0.5rem;

  &:hover {
    background: #404040;
    cursor: pointer;
  }

  &[disabled] {
    background: #404040;
    cursor: revert;
    transform: revert;
  }

  &[aria-current] {
    background: #404040;
    font-weight: bold;
    cursor: revert;
    transform: revert;
  }
`;