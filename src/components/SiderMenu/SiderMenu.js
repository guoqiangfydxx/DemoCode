import React, { PureComponent } from "react";
import { Layout, Menu, Icon } from "antd";

import "./SiderMenu.less";

import { Link } from "react-router-dom";

const { Sider } = Layout;
const { SubMenu } = Menu;

export default class SiderMenu extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      openKeys: ["sub1"],
      selectedKeys: ["1"],
    };
  }

  // submenu keys of first level
  rootSubmenuKeys = ["sub1", "sub2", "sub3"];

  onOpenChange = (openKeys) => {
    const latestOpenKey = openKeys.find(
      (key) => this.state.openKeys.indexOf(key) === -1
    );
    if (this.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      this.setState({ openKeys });
    } else {
      this.setState({
        openKeys: latestOpenKey ? [latestOpenKey] : [],
      });
    }
  };

  render() {
    const { collapsed, onCollapse } = this.props;
    const { openKeys } = this.state;

    const menuProps = collapsed ? {} : { openKeys };

    return (
      <Sider
        trigger={null}
        collapsible
        collapsed={collapsed}
        breakpoint="lg"
        onCollapse={onCollapse}
      >
        <Menu
          theme="dark"
          mode="inline"
          {...menuProps}
          onOpenChange={this.onOpenChange}
          selectedKeys={this.state.selectedKeys}
        >
          <SubMenu
            key="sub1"
            title={
              <span>
                <Icon type="dashboard" />
                <span>Dashboard</span>
              </span>
            }
          >
            <Menu.Item key="1">
              <Link to="/">首页</Link>
            </Menu.Item>
          </SubMenu>
          <SubMenu
            key="sub2"
            title={
              <span>
                <Icon type="search" />
                <span>查询模块</span>
              </span>
            }
          >
            <Menu.Item key="2">
              <Link to="/ChannelLog">渠道日志</Link>
            </Menu.Item>
          </SubMenu>
          <SubMenu
            key="sub3"
            title={
              <span>
                <Icon type="setting" />
                <span>Job管理</span>
              </span>
            }
          >
            <Menu.Item key="3">
              <Link to="/Job">官网Job管理</Link>
            </Menu.Item>
          </SubMenu>
          <SubMenu
            key="sub4"
            title={
              <span>
                <Icon type="setting" />
                <span>编辑器</span>
              </span>
            }
          >
            <Menu.Item key="4">
              <Link to="/editor">编辑器</Link>
            </Menu.Item>
          </SubMenu>
          <SubMenu
            key="sub5"
            title={
              <span>
                <Icon type="setting" />
                <span>文件</span>
              </span>
            }
          >
            <Menu.Item key="5">
              <Link to="/file">文件上传</Link>
            </Menu.Item>
          </SubMenu>
          <SubMenu
            key="sub6"
            title={
              <span>
                <Icon type="setting" />
                <span>下载文件</span>
              </span>
            }
          >
            <Menu.Item key="6">
              <Link to="/download">文件下载</Link>
            </Menu.Item>
          </SubMenu>
          <SubMenu
            key="sub7"
            title={
              <span>
                <Icon type="setting" />
                <span>视口</span>
              </span>
            }
          >
            <Menu.Item key="7">
              <Link to="/viewport">视口信息</Link>
            </Menu.Item>
          </SubMenu>
          <SubMenu
            key="sub8"
            title={
              <span>
                <Icon type="setting" />
                <span>图表</span>
              </span>
            }
          >
            <Menu.Item key="8">
              <Link to="/chart">图标信息</Link>
            </Menu.Item>
          </SubMenu>
          <SubMenu
            key="sub9"
            title={
              <span>
                <Icon type="setting" />
                <span>测试表单</span>
              </span>
            }
          >
            <Menu.Item key="9">
              <Link to="/testform">测试表单</Link>
            </Menu.Item>
          </SubMenu>
          <SubMenu
            key="sub10"
            title={
              <span>
                <Icon type="setting" />
                <span>编辑器2</span>
              </span>
            }
          >
            <Menu.Item key="10">
              <Link to="/umeditor">编辑器2</Link>
            </Menu.Item>
          </SubMenu>
          <SubMenu
            key="sub11"
            title={
              <span>
                <Icon type="setting" />
                <span>react-hooks</span>
              </span>
            }
          >
            <Menu.Item key="11">
              <Link to="/hook">reacr-Hooks</Link>
            </Menu.Item>
          </SubMenu>
          <SubMenu
            key="sub12"
            title={
              <span>
                <Icon type="setting" />
                <span>换行</span>
              </span>
            }
          >
            <Menu.Item key="12">
              <Link to="/wordbreak">换行</Link>
            </Menu.Item>
          </SubMenu>
          <SubMenu
            key="sub13"
            title={
              <span>
                <Icon type="setting" />
                <span>路由跳转</span>
              </span>
            }
          >
            <Menu.Item key="13">
              <Link to="/routerJump">路由跳转</Link>
            </Menu.Item>
          </SubMenu>
          <SubMenu
            key="sub14"
            title={
              <span>
                <Icon type="setting" />
                <span>Tree组件</span>
              </span>
            }
          >
            <Menu.Item key="14">
              <Link to="/tree">Tree组件</Link>
            </Menu.Item>
          </SubMenu>
          <SubMenu
            key="sub16"
            title={
              <span>
                <Icon type="setting" />
                <span>Form测试</span>
              </span>
            }
          >
            <Menu.Item key="16">
              <Link to="/formTest">Form测试</Link>
            </Menu.Item>
          </SubMenu>
          <SubMenu
            key="sub17"
            title={
              <span>
                <Icon type="setting" />
                <span>测试this</span>
              </span>
            }
          >
            <Menu.Item key="17">
              <Link to="/testThis">测试this</Link>
            </Menu.Item>
          </SubMenu>
          <SubMenu
            key="sub18"
            title={
              <span>
                <Icon type="setting" />
                <span>测试mediaSession</span>
              </span>
            }
          >
            <Menu.Item key="18">
              <Link to="/mediaSession">测试mediaSession</Link>
            </Menu.Item>
          </SubMenu>
          <SubMenu
            key="sub19"
            title={
              <span>
                <Icon type="setting" />
                <span>测试路由</span>
              </span>
            }
          >
            <Menu.Item key="19">
              <Link to="/testRoute">测试路由</Link>
            </Menu.Item>
          </SubMenu>
          <SubMenu
            key="sub20"
            title={
              <span>
                <Icon type="setting" />
                <span>测试强制更新</span>
              </span>
            }
          >
            <Menu.Item key="20">
              <Link to="/testForceUpdate">测试强制更新</Link>
            </Menu.Item>
          </SubMenu>
          <SubMenu
            key="sub21"
            title={
              <span>
                <Icon type="setting" />
                <span>原生表格</span>
              </span>
            }
          >
            <Menu.Item key="21">
              <Link to="/testTable">测试原生表格</Link>
            </Menu.Item>
          </SubMenu>
          <SubMenu
            key="sub22"
            title={
              <span>
                <Icon type="setting" />
                <span>转发ref</span>
              </span>
            }
          >
            <Menu.Item key="22">
              <Link to="/testForwardref">测试转发ref</Link>
            </Menu.Item>
          </SubMenu>
          <SubMenu
            key="sub23"
            title={
              <span>
                <Icon type="setting" />
                <span>测试Notification</span>
              </span>
            }
          >
            <Menu.Item key="23">
              <Link to="/testNotification">测试Notification</Link>
            </Menu.Item>
          </SubMenu>
          <SubMenu
            key="sub24"
            title={
              <span>
                <Icon type="setting" />
                <span>测试右键菜单</span>
              </span>
            }
          >
            <Menu.Item key="24">
              <Link to="/testContextMenu">测试右键菜单</Link>
            </Menu.Item>
          </SubMenu>
          <SubMenu
            key="sub25"
            title={
              <span>
                <Icon type="setting" />
                <span>测试timer</span>
              </span>
            }
          >
            <Menu.Item key="25">
              <Link to="/testTimer">测试timer</Link>
            </Menu.Item>
          </SubMenu>
          <SubMenu
            key="sub26"
            title={
              <span>
                <Icon type="setting" />
                <span>测试export</span>
              </span>
            }
          >
            <Menu.Item key="26">
              <Link to="/testExport">测试EXport</Link>
            </Menu.Item>
          </SubMenu>
          <SubMenu
            key="sub27"
            title={
              <span>
                <Icon type="setting" />
                <span>codeMirror</span>
              </span>
            }
          >
            <Menu.Item key="27">
              <Link to="/code">codeMirror</Link>
            </Menu.Item>
          </SubMenu>
          <SubMenu
            key="sub28"
            title={
              <span>
                <Icon type="setting" />
                <span>treeSelect</span>
              </span>
            }
          >
            <Menu.Item key="28">
              <Link to="/treeSelect">treeSelect</Link>
            </Menu.Item>
          </SubMenu>
          <SubMenu
            key="sub29"
            title={
              <span>
                <Icon type="setting" />
                <span>tinyMce</span>
              </span>
            }
          >
            <Menu.Item key="29">
              <Link to="/tinymce">tinyMce</Link>
            </Menu.Item>
          </SubMenu>
          <SubMenu
            key="sub30"
            title={
              <span>
                <Icon type="setting" />
                <span>a链接下载</span>
              </span>
            }
          >
            <Menu.Item key="30">
              <Link to="/testDown">a链接下载</Link>
            </Menu.Item>
          </SubMenu>
          <SubMenu
            key="sub31"
            title={
              <span>
                <Icon type="setting" />
                <span>初始值</span>
              </span>
            }
          >
            <Menu.Item key="31">
              <Link to="/initial">初始值</Link>
            </Menu.Item>
          </SubMenu>
        </Menu>
      </Sider>
    );
  }
}
