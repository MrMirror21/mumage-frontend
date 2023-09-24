import styled from "styled-components";

const Pagination = ({total, limit, page, setPage }) => {
    const numPages = Math.ceil(total/limit);

    return ( 
        <>
            <Nav>
                <Button onClick={() => setPage(page - 1)} disabled={page ===1}>
                    &lt;
                </Button>
                {Array(numPages)
                .fill()
                .map((_, i) => (
                    <Button
                        key={i+1}
                        onClick={() => setPage(i + 1)}
                        aria-current={page===i + 1 ? "page" : null}
                    >
                        {i + 1}
                    </Button>
                ))}
                <Button onClick={() => setPage(page + 1)} disabled = {page === numPages}>
                    &gt;
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