import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";
import TextField from "@mui/material/TextField";
import { useLoaderData } from "react-router-dom";
import { useState } from "react";

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
  const [error, setError] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    //Get all target and convert then in an object
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());
    if (parseInt(data.curVal) > parseInt(data.loanAmount)) {
      const requestOptions = {
        method: "PUT",
        body: JSON.stringify(data),
        headers: { "Content-Type": "application/json" },
      };
      await fetch(`/api/house/${houseDetail.id}`, requestOptions);
      navigate("/house");
    } else {
      setError(true);
      return;
    }
  };

  return (
    <>
      <Title>Refine Your Property Details</Title>
      <StyledForm onSubmit={handleSubmit}>
        <StyledInput
          type="text"
          label="Address"
          defaultValue={houseDetail.address}
          name="address"
          required
        />
        <StyledInput
          type="number"
          label="Current Value"
          defaultValue={houseDetail.currentValue}
          name="curVal"
          required
        />
        <StyledInput
          type="number"
          label="Loan Amount"
          defaultValue={houseDetail.loanAmount}
          name="loanAmount"
          required
        />
        <StyledLabel>Risk: {houseDetail.risk}</StyledLabel>
        <StyledButton type="submit" value="Submit">
          Submit
        </StyledButton>
      </StyledForm>
      {error && <Error>Ensure Loan Amount is Less Than Current Value</Error>}
    </>
  );
}

const Title = styled.h1`
  font-weight: 800;
`;

const StyledForm = styled.form`
  display: grid;
  gap: 1rem;
  justify-items: center;
  margin: 5rem auto;
  max-width: 20rem;
`;

const StyledLabel = styled.p``;

const StyledInput = styled(TextField)`
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

const StyledButton = styled.button`
  background-color: #93795d;
  border: 1px solid #93795d;
  color: #fff7ed;
  border-radius: 40px;
  font-weight: 700;
`;

const Error = styled.p`
  color: red;
`;
