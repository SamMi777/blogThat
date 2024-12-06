//react
import * as React from "react";

//semantic
import {
  Button,
  Grid,
  Header,
  Segment,
} from "semantic-ui-react";
import { ResponsiveContainer } from 'recharts';

export const Homepage: React.FC = () => {
  return (
    <div style={{
      borderRadius: "25px",
      background: "linear-gradient(to right, #1686f3, teal, #4f20d8)",
      minHeight: "100vh",
      padding: "20px"
    }}>
      <ResponsiveContainer width={"100%"} height={300}>
        <Grid>
          <Grid.Row>
            <Grid.Column>
              <Segment style={{
                width: "100%",
                margin: "auto",
                textAlign: "center",
                marginBottom: "20px" // Adjust this value for the bottom gap
              }}>
                <Header style={{ fontSize: "2em", margin: 0 }}>Dashboard</Header>
              </Segment>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </ResponsiveContainer>
    </div>
  );
};

export default Homepage; 