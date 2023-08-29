import { useNavigate } from "react-router-dom";
import TextField from "@mui/material/TextField";
import styled from "styled-components";
import { useState } from "react";

export default function AddNewHouse() {
  const navigate = useNavigate();
  const [error, setError] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    //Get all target and convert then in an object
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());
    if (parseInt(data.curVal) > parseInt(data.loanAmount)) {
      const requestOptions = {
        method: "POST",
        body: JSON.stringify(data),
        headers: { "Content-Type": "application/json" },
      };
      await fetch(`/api/house`, requestOptions);
      navigate("/house");
    } else {
      setError(true);
      return;
    }
  };

  return (
    <PageContainer>
      <TitleContainer>
        <Title>Welcome to our HomeRisk Calculator!</Title>
        <SubTitle>
          Gain valuable insights before making one of life's biggest decisions.
        </SubTitle>
        <p>
          Simply input the property address, its price, and the loan amount, and
          our tool will generate a risk assessment tailored to your potential
          home purchase. Your personalized risk assessment will be securely
          stored in the 'House List' for future comparisons, ensuring informed
          decisions.
        </p>
        <BoldP style={{ fontWeight: "bold" }}>
          Empower your home-buying journey with knowledge today!
        </BoldP>
        <InputTitle>Insert the details here:</InputTitle>
      </TitleContainer>
      <StyledForm onSubmit={handleSubmit}>
        <StyledInput type="text" label="Address" name="address" required />
        <StyledInput
          type="number"
          label="Current Value"
          name="curVal"
          required
        />
        <StyledInput
          type="number"
          label="Loan Amount"
          name="loanAmount"
          required
        />
        <StyledButton type="submit" value="Submit">
          Submit
        </StyledButton>
      </StyledForm>
      {error && <Error>Ensure Loan Amount is Less Than Current Value</Error>}
    </PageContainer>
  );
}

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledForm = styled.form`
  display: grid;
  gap: 1rem;
  justify-items: center;
  margin: 0 auto;
  max-width: 20rem;
`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 56%;
`;

const Title = styled.h1`
  font-weight: 800;
`;

const SubTitle = styled.p`
  font-size: 1.8rem;
`;

const BoldP = styled.p`
  font-weight: bold;
`;

const InputTitle = styled.p`
  font-size: 14px;
`;

const Error = styled.p`
  color: red;
`;

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
