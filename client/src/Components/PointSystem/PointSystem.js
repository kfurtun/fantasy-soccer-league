import { PageTemplate } from "../PageTemplate";
import styled from "styled-components";
export const PointSystem = () => {
  return (
    <PageTemplate>
      <Table>
        <thead>
          <tr>
            <th>Condition</th>
            <th>Point</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Player who has played up to 60 minutes</td>
            <td>2 points</td>
          </tr>
          <tr>
            <td>Player who has played more than 60 minutes</td>
            <td>4 points</td>
          </tr>
          <tr>
            <td>Player who has played in forward and scored</td>
            <td>5 points/goal</td>
          </tr>
          <tr>
            <td>Player who has played in midfield and scored</td>
            <td>6 points/goal</td>
          </tr>
          <tr>
            <td>Player who has played in defense and scored</td>
            <td>8 points/goal</td>
          </tr>
          <tr>
            <td>Player who has played in goalkeeper and scored</td>
            <td>10 points/goal</td>
          </tr>
          <tr>
            <td>Player who has played in forward and assisted</td>
            <td>3 points/assist</td>
          </tr>
          <tr>
            <td>Player who has played in midfield and assisted</td>
            <td>3 points/assist</td>
          </tr>
          <tr>
            <td>Player who has played in defense and assisted</td>
            <td>4 points/assist</td>
          </tr>
          <tr>
            <td>Player who has played in goalkeeper and assisted</td>
            <td>8 points/assist</td>
          </tr>
          <tr>
            <td>Player who has been booked yellow card</td>
            <td>-1 points</td>
          </tr>
          <tr>
            <td>Player who has been booked red card</td>
            <td>-4 points</td>
          </tr>
          <tr>
            <td>Player who has played in goalkeeper and conceded a goal</td>
            <td>-1 points/goal</td>
          </tr>
          <tr>
            <td>Player who has played in goalkeeper and saved a goal</td>
            <td>3 points/save</td>
          </tr>
          <tr>
            <td>Player who has played in goalkeeper and saved a penalty</td>
            <td>5 points/penalty</td>
          </tr>
          <tr>
            <td>
              Player who has not played in goalkeeper and has saved a penalty
            </td>
            <td>10 points/penalty</td>
          </tr>
          <tr>
            <td>Player who has won penalty</td>
            <td>1 points/penalty</td>
          </tr>
          <tr>
            <td>Player who has led penalty</td>
            <td>-1 points/penalty</td>
          </tr>
          <tr>
            <td>Player who has missed penalty</td>
            <td>-3 points/penalty</td>
          </tr>
          <tr>
            <td>Player who has scored 3 or more goals in the same game</td>
            <td>2 points</td>
          </tr>
          <tr>
            <td>Player who has been captain of their team</td>
            <td>x 2 of individual points</td>
          </tr>
        </tbody>
      </Table>
    </PageTemplate>
  );
};

const Table = styled.table`
  margin: 2vw auto;
  border-collapse: collapse;
  background: var(--secondary-color);
  color: var(--primary-color);
  border-radius: var(--border-radius);
  th {
    padding: 0.5vw;
  }

  td {
    padding: 0.5vw;

    text-align: center;
  }
  td:nth-child(1) {
    border-right: 1px solid var(--primary-color);
  }
  tbody > tr:nth-child(even) {
    background: var(--secondary-color-hover);
  }
`;
