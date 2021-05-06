import styled from "styled-components";

const Icon = styled.div`
  background: transparent url(assets/checkmark-icon.svg);
  height: 48px;
  width: 48px;
  background-repeat: no-repeat;
`
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  h1 {
    font-weight: 300;
  }
`;

const SubmittedMovie = () => (
  <Container>
    <Icon />
    <h1>
      Congratulations !
    </h1>
    <p>
      The movie has been added to database successfully
    </p>
  </Container>
)

export default SubmittedMovie;
