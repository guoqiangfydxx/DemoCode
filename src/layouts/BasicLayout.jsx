import React, { Fragment, version } from "react";
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
import TestRouter from "../routes/testRoute";
import TestForceUpdate from "../routes/forceUpdate";
import TestTable from "../routes/Table";
import TestForwardRef from "../routes/forwardRef";
import TestNotification from "../routes/Notification";
import ContextMenu from "../routes/ContextMenu";
import TestTimer from "../routes/timer";
import TestExport from "../routes/Testexport";
import CodeMirror from "../routes/codeMirror";
import TreeSelect from "../routes/treeSelect";
import TinyMce from "../routes/tinyMce";
import TestDown from "../routes/downLoad1";
import TestInitial from "../routes/initial";
import Parent from "../routes/render1";
import TestState from "../routes/state";
import TestFloat from "../routes/float";
import TestContext from "../routes/context";
import TestPosition from "../routes/css/position";
import RangePicker from "../routes/rangePicker";
import CenterHorizontaly from "../routes/css/centerHorizontaly";
import LazyLoadImgs from "../routes/lazyLoadImgs";
import TestFlex from "../routes/element";
import TestMedia from "../routes/css/media";
import LayoutContainer from "../routes/css/layout";
import TestBorder from "../routes/css/border";
import TestMargin from "../routes/css/margin";
import TestHeight from "../routes/css/height";
import TestImage from "../routes/image";
import TestCopy from "../routes/copy";
import TestPromise from "../routes/promise";
import TestButton from "../routes/button";
import TestPreload from "../routes/preload";
import TestDebounce from "../routes/debounce";
import TestXss from "../routes/xss";
import TestDiff from "../routes/diff";
import TestClassContext from "../routes/context/classContext";
import TestFuncDiff from "../routes/diff/funcDiff";
import TestPortal from "../routes/portals";
import FuncRef from "../routes/ref/funcRef";
import ForwardRef from "../routes/ref/forward";
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

    console.log("BasicLayout>>>>", this.isReactComponent);
    // 请从字符串中找出最长的不包含重复字符的子串，然后返回其长度
    // 解决这道题的思路居然是使用动态规划来解决这个问题，我们设置dp[j]表示以字符串s[j]为结尾的字符串中的最长的不重复的子字符串的长度，我们设定i是在j前面离j最近的相同位置的字符；这样的话如果说i < 0的话，那么说明左边没有相同的字符, dp[j] = dp[j - 1] + 1; 如果说dp[j - 1] < j - i的话，那么说明字符串s[i]是在dp[j-1]区间之外的,此时dp[j] = dp[j-1] + 1;如果说dp[j-1] > j-i的话，那么字符串s[i]就在区间dp[j-1]中，此时dp[j] = j - i,
    // 这里需要借助哈希表来记住上一次字符出现的位置
    function lengthOfLongestSubstring(s) {
      if (s.length === 0) {
        return 0;
      }
      const map = new Map([[s[0], 0]]);
      const dp = new Array(s.length);
      dp[0] = 1;
      for (let i = 1; i < s.length; i++) {
        const index = map.get(s[i]) === undefined ? -1 : map.get(s[i]);
        map.set(s[i], i);
        if (dp[i - 1] < i - index) {
          dp[i] = dp[i - 1] + 1;
        } else {
          dp[i] = i - index;
        }
      }
      return Math.max(...dp);
    }

    function lengthOfLongestSubstring(s) {
      let result = 0,
        temp = 0;
      const map = new Map();
      for (let i = 0, len = s.length; i < len; i++) {
        const index = map.get(s[i]) === undefined ? -1 : map.get(s[i]);
        map.set(s[i], i);
        if (temp < i - index) {
          temp = temp + 1;
        } else {
          temp = i - index;
        }
        result = Math.max(temp, result);
      }
      return result;
    }

    console.log("sss>>>>", lengthOfLongestSubstring("abcabdrfghjcbb"));

    function getNode(head, k) {
      let slow = head;
      let fast = head;
      while (k) {
        fast = fast.next;
        k--;
      }
      while (fast) {
        slow = slow.next;
        fast = fast.next;
      }
      return slow;
    }

    // 从上到下打印二叉树，每一层都要放到一个数组中
    function print(head) {
      if (!head) {
        return [];
      }
      const result = [];
      let queue = [head];
      while (queue.length) {
        const len = queue.length;
        const levels = [];
        for (let i = 0; i < len; i++) {
          const node = queue.shift();
          if (node.left) {
            queue.push(node.left);
          }
          if (node.right) {
            queue.push(node.right);
          }
          levels.push(node.val);
        }
        result.push(levels);
      }
      return result;
    }

    // 输入两个递增排序的链表，合并这两个链表并使新链表中的节点仍然是递增排序的。
    // 输入：1->2->4, 1->3->4
    // 输出：1->1->2->3->4->4
    // 头结点前面的虚拟节点创建是需要使用的ListNode这个构造函数的
    function combineList(head1, head2) {
      let curr1 = head1;
      let curr2 = head2;
      let curr = new ListNode(null);
      let newHead = curr;
      while (curr1 && curr2) {
        if (curr1.val <= curr2.val) {
          curr.next = new ListNode(curr1.val);
          curr1 = curr1.next;
        } else {
          curr.next = new ListNode(curr2.val);
          curr2 = curr2.next;
        }
        curr = curr.next;
      }
      curr.next = curr1 || curr2;
      return newHead.next;
    }

    // 统计一个数字在排序数组中出现的次数。
    //  nums = [5,7,7,8,8,10], target = 8
    function search(nums, target) {
      let left = 0,
        right = nums.length - 1,
        count = 0,
        len = nums.length;
      while (left < right) {
        const mid = (left + right) >> 1;
        if (nums[mid] === target) {
          left = mid;
          break;
        } else if (nums[mid] < target) {
          left = mid + 1;
        } else {
          right = mid - 1;
        }
      }
      if (nums[left] !== target) {
        return 0;
      }
      let prevLeft = left - 1;
      while (nums[prevLeft] === target && prevLeft >= 0) {
        prevLeft--;
        count++;
      }
      while (nums[left] === target && left < len) {
        left++;
        count++;
      }
      return count;
    }
    console.log('修改文件')
    
  }

  componentWillUnmount() {
    unenquireScreen(this.enquireHandler);
  }

  getPageTitle() {
    return "我的测试项目";
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
              <Route
                path="/testForceUpdate"
                exacrt
                component={TestForceUpdate}
              />
              <Route path="/testTable" exacrt component={TestTable} />
              <Route path="/testForwardref" exacrt component={TestForwardRef} />
              <Route
                path="/testNotification"
                exacrt
                component={TestNotification}
              />
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
              <Route path="/layout" exact component={LayoutContainer} />
              <Route path="/border" exacrt component={TestBorder} />
              <Route path="/margin" exacrt component={TestMargin} />
              <Route path="/height" exacrt component={TestHeight} />
              <Route path="/image" exacrt component={TestImage} />
              <Route path="/copy" exacrt component={TestCopy} />
              <Route path="/promise" exacrt component={TestPromise} />
              <Route path="/button" exacrt component={TestButton} />
              <Route path="/preload" exacrt component={TestPreload} />
              <Route path="/debounce" exacrt component={TestDebounce} />
              <Route path="/xss" exacrt component={TestXss} />
              <Route path="/diff" exacrt component={TestDiff} />
              <Route path="/classContext" exacrt component={TestClassContext} />
              <Route path="/funcdiff" exacrt component={TestFuncDiff} />
              <Route path="/portals" exacrt component={TestPortal} />
              <Route path="/funcref" exacrt component={FuncRef} />
              <Route path="/forward" exacrt component={ForwardRef} />
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
