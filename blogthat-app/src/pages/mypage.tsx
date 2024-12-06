//react
import * as React from "react";

//semantic
import { Button, Dropdown, Grid, Header, Segment } from "semantic-ui-react";
import { ResponsiveContainer } from "recharts";

const samplePosts = [
  { key: "1", value: "1", text: "today" },
  { key: "2", value: "2", text: "quoth the raven..." },
];

export const MyPage: React.FC = () => {
  return (
    <div
      style={{
        borderRadius: "25px",
        background: "linear-gradient(to right, #1686f3, teal, #4f20d8)",
        minHeight: "100vh",
        padding: "20px",
      }}
    >
      <ResponsiveContainer width={"100%"} height={300}>
        <Grid>
          <Grid.Row>
            <Grid.Column>
              <Segment
                style={{
                  width: "100%",
                  margin: "auto",
                  textAlign: "center",
                  marginBottom: "20px",
                }}
              >
                <Header style={{ fontSize: "2em", margin: 0 }}>My page</Header>
                <Segment>
                  My name is Sam and I like to write code... but only when it's
                  convenient
                </Segment>
                <Dropdown
                  placeholder="Search Posts"
                  fluid
                  search
                  selection
                  options={samplePosts}
                />
              </Segment>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </ResponsiveContainer>
    </div>
  );
};

export default MyPage;
