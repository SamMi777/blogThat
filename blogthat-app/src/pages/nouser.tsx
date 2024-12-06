//react
import * as React from "react";

//semantic
import { Button, Dropdown, Grid, Header, Segment } from "semantic-ui-react";
import { ResponsiveContainer } from "recharts";

export const NoUser: React.FC = () => {
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
                <Header style={{ fontSize: "2em", margin: 0 }}>
                  No User Found, did you mean to create an account? You will
                  regret it.
                </Header>
                <Segment>
                  <Button
                    style={{
                      width: "200px",
                      backgroundColor: "blue",
                      color: "white",
                      padding: "10px",
                      border: "none",
                      borderRadius: "5px",
                    }}
                  >
                    Sign Up
                  </Button>
                </Segment>
                <Segment>
                  <div>Returning User? Log in here</div>
                  <br></br>
                  <Button
                    style={{
                      width: "200px",
                      backgroundColor: "green",
                      color: "white",
                      padding: "10px",
                      border: "none",
                      borderRadius: "5px",
                    }}
                  >
                    Login
                  </Button>
                </Segment>
              </Segment>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </ResponsiveContainer>
    </div>
  );
};

export default NoUser;
