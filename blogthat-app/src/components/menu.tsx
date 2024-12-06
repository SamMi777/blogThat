import * as React from "react";

// Semantic UI
import {
  Table,
  Button,
  Divider,
  Input,
  List,
  Menu,
  Modal,
  Popup,
  Search,
  Select,
  Dropdown,
  Icon,
} from "semantic-ui-react";
import Homepage from "../pages/homepage";
import MyPage from "../pages/mypage";
import ExplorePage from "../pages/explore";
import NoUser from "../pages/nouser";

export const menuRoutes: any[] = [
  {
    key: "homepage",
    path: "/home",
    element: <Homepage />,
    label: "Home",
  },
  {
    key: "mypage",
    path: "/mypage",
    element: <NoUser />,
    label: "My Page",
  },
  {
    key: "search",
    path: "/search",
    element: <Homepage />,
    label: "Search",
  },
  {
    key: "explore",
    path: "/explorepage",
    element: <ExplorePage />,
    label: "Explore",
  },
];

export const MenuComponent: React.FC = () => {
  /**
   * Menu Definitions
   */

  return (
    <Menu data-testid="menu-component" stackable>
      <Menu.Item
        style={{
          color: "#f70d0d",
          fontWeight: "bold",
          fontFamily: "Avantgarde, TeX Gyre Adventor, URW Gothic L, sans-serif",
        }}
      >
        blogThat!
      </Menu.Item>
      <Menu.Item
        name="Search"
        style={{
          color: "Black",
          padding: "15px 20px",
          fontSize: "1.2em",
          fontFamily: "Avantgarde, TeX Gyre Adventor, URW Gothic L, sans-serif",
        }}
        onClick={() => (window.location.href = "")}
      >
        <Icon name="search" style={{ marginRight: "8px" }} />
        Search
      </Menu.Item>
      <Menu.Item
        name="Home"
        style={{
          color: "Black",
          padding: "15px 20px",
          fontSize: "1.2em",
          fontFamily: "Avantgarde, TeX Gyre Adventor, URW Gothic L, sans-serif",
        }}
        onClick={() => (window.location.href = "/home")}
      />
      <Menu.Item
        name="Explore"
        style={{
          color: "Black",
          padding: "15px 20px",
          fontSize: "1.2em",
          fontFamily: "Avantgarde, TeX Gyre Adventor, URW Gothic L, sans-serif",
        }}
        onClick={() => (window.location.href = "/#/explorepage")}
      />
      <Menu.Menu position="right">
        <Menu.Item
          name="My Page"
          style={{
            color: "Black",
            padding: "15px 20px",
            fontSize: "1.2em",
            fontFamily:
              "Avantgarde, TeX Gyre Adventor, URW Gothic L, sans-serif",
          }}
          onClick={() => (window.location.href = "/#/mypage")}
        />
      </Menu.Menu>
    </Menu>
  );
};

export default MenuComponent;
