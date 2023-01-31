import styled from "styled-components";
function TitleCoverageA({ title, subtitle }) {
  return (
    <TitleCA>
      {title}
      {subtitle ? <span>{subtitle}</span> : ""}
    </TitleCA>
  );
}

const TitleCA = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  padding: 0.6rem 2rem;
  font-size: 2rem;
  font-style: italic;
  border: none;
  background-color: var(--off-color);
  border-radius: 0.7rem;
  user-select: none;

  span {
    font-size: 1.6rem !important;
    margin-left: 0.6rem;
  }
`;
export default TitleCoverageA;
