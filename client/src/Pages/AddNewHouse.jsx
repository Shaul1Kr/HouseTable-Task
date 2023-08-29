import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export default function AddNewHouse() {
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());
    const requestOptions = {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json" },
    };
    await fetch(`/api/house`, requestOptions);
    navigate("/house");
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <StyledLabel>Address:</StyledLabel>
      <StyledInput
        type="text"
        placeholder="Givatayim"
        name="address"
        required
      />
      <StyledLabel>Current Value:</StyledLabel>
      <StyledInput type="number" placeholder="0" name="curVal" required />
      <StyledLabel>Loan Amount:</StyledLabel>
      <StyledInput type="number" placeholder="0" name="loanAmount" required />
      <StyledButton type="submit" value="Submit">
        Submit
      </StyledButton>
    </StyledForm>
  );
}

const StyledForm = styled.form`
  display: grid;
  gap: 1rem;
  justify-items: center;
  margin: auto;
  max-width: 20rem;
`;

const StyledLabel = styled.label``;

const StyledInput = styled.input`
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  &::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

const StyledButton = styled.button``;
