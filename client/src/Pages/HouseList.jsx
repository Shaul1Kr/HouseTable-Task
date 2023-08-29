import { Link, useLoaderData } from "react-router-dom";
import { styled } from "styled-components";

export async function loader() {
  const requestOptions = {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  };
  const response = await fetch(`/api/house`, requestOptions);
  const data = await response.json();
  return data;
}

export default function HouseList() {
  const houses = useLoaderData();
  return (
    <StyledDiv>
      <table>
        <tbody>
          <tr>
            <th>ID</th>
            <th>Address</th>
            <th>Current Value</th>
            <th>Loan Amount</th>
            <th>Risk</th>
            <th></th>
          </tr>
        </tbody>
        {houses.map((house) => (
          <tbody key={house.id}>
            <tr>
              <td>{house.id}</td>
              <td>{house.address}</td>
              <td>{house.currentValue}</td>
              <td>{house.loanAmount}</td>
              <td>{house.risk}</td>
              <td>
                <StyledButton to={String(house.id)}>Edit</StyledButton>
              </td>
            </tr>
          </tbody>
        ))}
      </table>
    </StyledDiv>
  );
}

const StyledDiv = styled.div`
  display: grid;
  margin: 2rem;
`;

const StyledButton = styled(Link)`
  display: block;
  background-color: #93795d;
  border: 1px solid #93795d;
  color: #fff7ed;
  border-radius: 40px;
  font-weight: 700;
`;
