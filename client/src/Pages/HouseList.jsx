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
        <tr>
          <th>ID</th>
          <th>Address</th>
          <th>Current Value</th>
          <th>Loan Amount</th>
          <th>Risk</th>
          <th></th>
        </tr>
        {houses.map((house) => (
          <tr key={house.id}>
            <td>{house.id}</td>
            <td>{house.address}</td>
            <td>{house.currentValue}</td>
            <td>{house.loanAmount}</td>
            <td>{house.risk}</td>
            <td>
              <Link to={String(house.id)}>Edit</Link>
            </td>
          </tr>
        ))}
      </table>
    </StyledDiv>
  );
}

const StyledDiv = styled.div`
  display: grid;
`;
