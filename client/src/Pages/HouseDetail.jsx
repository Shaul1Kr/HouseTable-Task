import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { styled } from "styled-components";

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

const DetailContainer = styled.div`
  display: grid;
`;

const HouseDetail = () => {
  const { id } = useParams();
  const [data, setData] = useState({});
  const [address, setAddress] = useState("" || data.address);
  const [curVal, setCurVal] = useState("" || data.curVal);
  const [editMode, setEditMode] = useState(false);
  useEffect(() => {
    const fathData = async () => {
      const requestOptions = {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      };
      const response = await fetch(
        `http://localhost:3000/api/houses/${id}`,
        requestOptions
      );
      const data = await response.json();
      setData(data);
      setAddress(data.address);
      setCurVal(data.currentValue);
    };
    fathData();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const requestOptions = {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ address, curVal }),
    };
    const response = await fetch(
      `http://localhost:3000/api/houses/${id}`,
      requestOptions
    );
    const data = await response.json();
    setData(data);
    setEditMode(false);
  };
  const addressEntered = (e) => {
    setAddress(e.target.value);
  };

  const curValEntered = (e) => {
    setCurVal(e.target.value);
  };

  return (
    <div>
      {editMode ? (
        <StyledForm onSubmit={handleSubmit}>
          <StyledLabel>Address:</StyledLabel>
          <StyledInput
            type="text"
            onChange={(e) => addressEntered(e)}
            value={address}
            name="address"
            required
          />
          <StyledLabel>Current Value:</StyledLabel>
          <StyledInput
            type="number"
            onChange={(e) => curValEntered(e)}
            value={curVal}
            name="val"
            required
          />
          <StyledLabel>Loan Amount: {data.loanAmount}</StyledLabel>
          <StyledLabel>Risk: {data.risk}</StyledLabel>
          <StyledButton type="submit" value="Submit">
            Submit
          </StyledButton>
        </StyledForm>
      ) : (
        <DetailContainer>
          <StyledLabel>Address: {data.address}</StyledLabel>
          <StyledLabel>Current Value: {data.currentValue}</StyledLabel>
          <StyledLabel>Loan Amount: {data.loanAmount}</StyledLabel>
          <StyledLabel>Risk: {data.risk}</StyledLabel>
          <StyledButton onClick={() => setEditMode(true)}>
            Edit Details
          </StyledButton>
        </DetailContainer>
      )}
    </div>
  );
};

export default HouseDetail;
