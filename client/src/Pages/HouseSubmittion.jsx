import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export const StyledForm = styled.form`
  display: grid;
  gap: 1rem;
`;

export const StyledLabel = styled.label``;

export const StyledInput = styled.input`
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  &::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

export const StyledButton = styled.button``;

const HouseSubmittion = () => {
  const navigate = useNavigate();

  const [address, setAddress] = useState("");
  const [curVal, setCurVal] = useState("");
  const [id, setId] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log({ address, curVal });
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ address, curVal }),
    };
    const response = await fetch(
      "http://localhost:3000/api/houses",
      requestOptions
    );
    const data = await response.json();
    setId(data);
    setAddress("");
    setCurVal("");
  };

  const addressEntered = (e) => {
    setAddress(e.target.value);
  };

  const curValEntered = (e) => {
    setCurVal(e.target.value);
  };

  return (
    <div>
      <StyledForm onSubmit={handleSubmit}>
        <StyledLabel>Address:</StyledLabel>
        <StyledInput
          type="text"
          placeholder="Givatayim"
          onChange={(e) => addressEntered(e)}
          value={address}
          name="address"
          required
        />
        <StyledLabel>Current Value:</StyledLabel>
        <StyledInput
          type="number"
          placeholder="0"
          onChange={(e) => curValEntered(e)}
          value={curVal}
          name="val"
          required
        />
        <StyledButton type="submit" value="Submit">
          Submit
        </StyledButton>
      </StyledForm>
      {id && (
        <div>
          <p>House Id: {id}</p>
          <StyledButton onClick={() => navigate(`/house/${id}`)}>
            House Detail
          </StyledButton>
        </div>
      )}
    </div>
  );
};

export default HouseSubmittion;
