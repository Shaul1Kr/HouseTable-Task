import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";
import { useLoaderData } from "react-router-dom";

export async function loader({ params }) {
  const requestOptions = {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  };
  const response = await fetch(`/api/house/${params.id}`, requestOptions);
  const data = await response.json();
  return data;
}

export default function EditHouse() {
  const houseDetail = useLoaderData();
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());
    const requestOptions = {
      method: "PUT",
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json" },
    };
    await fetch(`/api/house/${houseDetail.id}`, requestOptions);
    navigate("/house");
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <StyledLabel>Address:</StyledLabel>
      <StyledInput
        type="text"
        placeholder="Givatayim"
        defaultValue={houseDetail.address}
        name="address"
        required
      />
      <StyledLabel>Current Value:</StyledLabel>
      <StyledInput
        type="number"
        placeholder="0"
        defaultValue={houseDetail.currentValue}
        name="curVal"
        required
      />
      <StyledLabel>Loan Amount:</StyledLabel>
      <StyledInput
        type="number"
        placeholder="0"
        defaultValue={houseDetail.loanAmount}
        name="loanAmount"
        required
      />
      <StyledLabel>Risk: {houseDetail.risk}</StyledLabel>
      <StyledButton type="submit" value="Submit">
        Submit
      </StyledButton>
    </StyledForm>
  );
}

const StyledForm = styled.form`
  display: grid;
  gap: 1rem;
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
