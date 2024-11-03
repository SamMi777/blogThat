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
    <div style={{ background: "lightblue", minHeight: "100vh", padding: "20px" }}>
      <ResponsiveContainer width={"100%"} height={300}>
        <Grid>
          <Grid.Row>
            <Grid.Column>
              <Segment style={{ width: "100%", margin: "auto", textAlign: "center" }}>
                <Header style={{ fontSize: "2em" }}>Dashboard</Header>
              </Segment>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </ResponsiveContainer>
    </div>
  );
};

export default Homepage; 