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
import ChannelLog from "../routes/ChannelLog";
import Job from "../routes/Job";

import { Route, Switch, Redirect } from "react-router-dom";
import DownLoad from "../routes/download";
import Umditor from "../routes/Umditor/testEmditor";
import WordBreakTest from "../routes/wordBreak/index";
import RouterJump from "../routes/RouterJump";
import Tree from "../routes/Tree";
import TestTsx from "../routes/testtsx/index.tsx";
import FormTest from "../routes/FormTest";
import TestThis from "../routes/testThis";
import TestMediaSession from "../routes/mediaSession";
import TestRouter from '../routes/testRoute'
import TestForceUpdate from '../routes/forceUpdate'
import TestTable from '../routes/Table'
import TestForwardRef from '../routes/forwardRef'
import TestNotification from '../routes/Notification'
import ContextMenu from '../routes/ContextMenu'
import TestTimer from '../routes/timer'
import TestExport from '../routes/Testexport'
import CodeMirror from '../routes/codeMirror'
import TreeSelect from '../routes/treeSelect'
import TinyMce from '../routes/tinyMce'
import TestDown from '../routes/downLoad1'
import TestInitial from '../routes/initial'
import Parent from '../routes/render1'
import TestState from '../routes/state'
import TestFloat from '../routes/float'
import TestContext from '../routes/context'
import TestPosition from '../routes/css/position'
import RangePicker from '../routes/rangePicker'
import CenterHorizontaly from '../routes/css/centerHorizontaly'
import LazyLoadImgs from "../routes/lazyLoadImgs";
import TestFlex from "../routes/element";
import TestMedia from '../routes/css/media'
import LayoutContainer from '../routes/css/layout'
import TestBorder from '../routes/css/border'
import TestMargin from '../routes/css/margin'
import TestHeight from "../routes/css/height";
import TestImage from '../routes/image'
import TestCopy from '../routes/copy'
import TestPromise from '../routes/promise'
import TestButton from '../routes/button'
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
              <Route path="/formTest" exacrt component={FormTest} />
              <Route path="/testThis" exacrt component={TestThis} />
              <Route path="/mediaSession" exacrt component={TestMediaSession} />
              <Route path="/testRoute" exacrt component={TestRouter} />
              <Route path="/testForceUpdate" exacrt component={TestForceUpdate} />
              <Route path="/testTable" exacrt component={TestTable} />
              <Route path="/testForwardref" exacrt component={TestForwardRef} />
              <Route path="/testNotification" exacrt component={TestNotification} />
              <Route path="/testContextMenu" exacrt component={ContextMenu} />
              <Route path="/testTimer" exacrt component={TestTimer} />
              <Route path="/testExport" exacrt component={TestExport} />
              <Route path="/code" exacrt component={CodeMirror} />
              <Route path="/treeSelect" exacrt component={TreeSelect} />
              <Route path="/tinymce" exacrt component={TinyMce} />
              <Route path="/testDown" exacrt component={TestDown} />
              <Route path="/initial" exacrt component={TestInitial} />
              <Route path="/parent" exacrt component={Parent} />
              <Route path="/testState" exacrt component={TestState} />
              <Route path="/testContext" exacrt component={TestContext} />
              <Route path="/testFloat" exacrt component={TestFloat} />
              <Route path="/testPosition" exacrt component={TestPosition} />
              <Route path="/rangePicker" exacrt component={RangePicker} />
              <Route path="/center" exacrt component={CenterHorizontaly} />
              <Route path="/imgs" exacrt component={LazyLoadImgs} />
              <Route path="/flex" exacrt component={TestFlex} />
              <Route path="/media" exacrt component={TestMedia} />
              <Route path='/layout' exact component={LayoutContainer} />
              <Route path="/border" exacrt component={TestBorder} />
              <Route path="/margin" exacrt component={TestMargin} />
              <Route path="/height" exacrt component={TestHeight} />
              <Route path="/image" exacrt component={TestImage} />
              <Route path="/copy" exacrt component={TestCopy} />
              <Route path="/promise" exacrt component={TestPromise} />
              <Route path="/button" exacrt component={TestButton} />
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
