import React from "react";
import PropTypes from "prop-types";
import Link from "next/Link";
import { Menu } from "antd";

const AppLayout = ({ children }) => {
  return (
    <div>
      <Menu mode="horizontal">
        <Menu.Item>
          <Link href="/">
            <a>Groomer</a>
          </Link>
        </Menu.Item>
        <Menu.Item>
          <Link href="/inJuly">
            <a>7월의 올영pick!</a>
          </Link>
        </Menu.Item>
      </Menu>
      {children}
    </div>
  );
};

export default AppLayout;
