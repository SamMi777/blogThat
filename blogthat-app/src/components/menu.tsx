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
} from "semantic-ui-react";
import Homepage from "../pages/homepage";

export const menuRoutes: any[] = [
  {
    key: "homepage",
    path: "/home",
    element: <Homepage />,
    label: "Home",
  }
];

export const MenuComponent: React.FC = () => {
  /**
   * Menu Definitions
   */

  return (
    <Menu data-testid="menu-component " stackable>
      <Menu.Item style={{ color: "Red", fontWeight: "bold" }}>
        blogThat! 
      </Menu.Item>
      <Menu.Item name="Home" style={{color: "Black" }}  onClick={() => (window.location.href = "")} />
    </Menu>
  );
};

export default MenuComponent;