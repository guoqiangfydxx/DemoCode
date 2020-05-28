import React, { Fragment } from "react";
import { Layout, Icon, BackTop } from "antd";
import { enquireScreen, unenquireScreen } from "enquire-js";
import { ContainerQuery } from "react-container-query";
import DocumentTitle from "react-document-title";
import classNames from "classnames";
import GlobalHeader from "../components/GlobalHeader";
import GlobalFooter from "../components/GlobalFooter";
import SiderMenu from "../components/SiderMenu";
import Editor from "../routes/Umditor";
import FileUpload from "../routes/FileUpload";
import TestForm from "../routes/testForm";
import Chart from "../routes/Chart";
import Viewport from "../routes/Viewport";
import Counter from "../routes/hooks";
import Home from "../routes/Home";
import Drawer from "../routes/Drawer";
import ChannelLog from "../routes/ChannelLog";
import Job from "../routes/Job";

import { Route, Switch, Redirect } from "react-router-dom";
import DownLoad from "../routes/download";
import Umditor from "../routes/Umditor/testEmditor";
import WordBreakTest from "../routes/wordBreak/index";
import RouterJump from "../routes/RouterJump";
import Tree from "../routes/Tree";
import FormTest from "../routes/FormTest";
import "./BasicLayout.less";

const { Header, Content, Footer } = Layout;

const query = {
  "screen-xs": {
    maxWidth: 575,
  },
  "screen-sm": {
    minWidth: 576,
    maxWidth: 767,
  },
  "screen-md": {
    minWidth: 768,
    maxWidth: 991,
  },
  "screen-lg": {
    minWidth: 992,
    maxWidth: 1199,
  },
  "screen-xl": {
    minWidth: 1200,
    maxWidth: 1599,
  },
  "screen-xxl": {
    minWidth: 1600,
  },
};

let isMobile;
enquireScreen((b) => {
  isMobile = b;
});

class BasicLayout extends React.Component {
  state = {
    currentUser: {
      name: "测试",
      avatar:
        "https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png",
    },
    collapsed: false,
    isMobile,
  };

  componentDidMount() {
    this.enquireHandler = enquireScreen((mobile) => {
      this.setState({
        isMobile: mobile,
      });
    });
  }

  componentWillUnmount() {
    unenquireScreen(this.enquireHandler);
  }

  getPageTitle() {
    return "template";
  }

  handleMenuCollapse = (collapsed) => {
    this.setState({
      collapsed: collapsed,
    });
  };

  handleMenuClick = () => {};

  render() {
    const { currentUser, isMobile: mb, collapsed } = this.state;

    const layout = (
      <Layout id="components-layout-demo-custom">
        <SiderMenu
          logo={null}
          collapsed={collapsed}
          isMobile={mb}
          onCollapse={this.handleMenuCollapse}
        />
        <Layout>
          <Header style={{ padding: 0 }}>
            <GlobalHeader
              logo={null}
              currentUser={currentUser}
              collapsed={collapsed}
              isMobile={mb}
              onCollapse={this.handleMenuCollapse}
              onMenuClick={this.handleMenuClick}
            />
          </Header>
          <Content
            style={{
              margin: "24px 24px 0",
              background: "#fff",
              height: "100%",
            }}
          >
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/ChannelLog" exact component={ChannelLog} />
              <Route path="/Job" exact component={Job} />
              <Route path="/editor" exact component={Editor} />
              <Route path="/file" exact component={FileUpload} />
              <Route path="/download" exact component={DownLoad} />
              <Route path="/viewport" exact component={Viewport} />
              <Route path="/chart" exact component={Chart} />
              <Route path="/testform" exact component={TestForm} />
              <Route path="/umeditor" exacrt component={Umditor} />
              <Route path="/hook" exacrt component={Counter} />
              <Route path="/wordbreak" exacrt component={WordBreakTest} />
              <Route path="/routerJump" exacrt component={RouterJump} />
              <Route path="/tree" exacrt component={Tree} />
              <Route path="/drawer" exacrt component={Drawer} />
              <Route path="/formTest" exacrt component={FormTest} />
              <Redirect to="/" />
            </Switch>
          </Content>
          <Footer style={{ padding: 0 }}>
            <GlobalFooter
              copyright={
                <Fragment>
                  Copyright <Icon type="copyright" />
                </Fragment>
              }
            />
          </Footer>
          <BackTop visibilityHeight="100" />
        </Layout>
      </Layout>
    );

    return (
      <DocumentTitle title={this.getPageTitle()}>
        <ContainerQuery query={query}>
          {(params) => <div className={classNames(params)}>{layout}</div>}
        </ContainerQuery>
      </DocumentTitle>
    );
  }
}

export default BasicLayout;
