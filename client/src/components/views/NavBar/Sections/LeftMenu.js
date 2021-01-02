import React from 'react';
import { Menu } from 'antd';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

function LeftMenu(props) {
  return (
    <Menu mode={props.mode}>
      <SubMenu title={<span>PRODUCTS</span>}>
        <Menu.Item key="all">
          <a href="/product">All</a>
        </Menu.Item>
        <MenuItemGroup title="Item 1">
          <Menu.Item key="setting:1">Product 1</Menu.Item>
          <Menu.Item key="setting:2">Product 2</Menu.Item>
        </MenuItemGroup>
        <MenuItemGroup title="Item 2">
          <Menu.Item key="setting:3">Product 3</Menu.Item>
          <Menu.Item key="setting:4">Product 4</Menu.Item>
        </MenuItemGroup>
      </SubMenu>
      <Menu.Item key="blog">
        <a href="/">BLOG</a>
      </Menu.Item>
      <Menu.Item key="about">
        <a href="/">ABOUT</a>
      </Menu.Item>
      <Menu.Item key="contact">
        <a href="/">CONTACT</a>
      </Menu.Item>
    </Menu>
  )
}

export default LeftMenu