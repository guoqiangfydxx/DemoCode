import React, {
  useEffect,
  useState,
  useRef,
  useCallback,
  useMemo,
} from "react";
const useNormalDataHook = () => {
  const [data, setData] = useState({ info: null, count: null });
  useEffect(() => {
    const timer = setInterval(() => {
      setData((data) => ({
        ...data,
        count: data.count + 1,
      }));
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  });
  return data;
};

const useOnDemandDataHook = () => {
  const setter = useState({})[1];
  const forceUpdate = useCallback(() => setter({}), [setter]);
  const dependenciesRef = useRef({ info: false, count: false });
  const dataRef = useRef({ info: null, count: 0 });
  const dispatch = useCallback(
    (payload) => {
      dataRef.current = { ...dataRef.current, ...payload };
      const needUpdate = Object.keys(payload).some(
        (key) => dependenciesRef.current[key]
      );
      if (needUpdate) {
        forceUpdate();
      }
    },
    [forceUpdate]
  );

  useEffect(() => {
    const timer = setInterval(() => {
      dispatch({ count: dataRef.current.count + 1 });
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, [dispatch]);

  return useMemo(() => {
    // 这里使用了Object.defineProperties来实现
    return Object.defineProperties(
      {},
      {
        info: {
          get: function () {
            dependenciesRef.current.info = true;
            return dataRef.current.info;
          },
          enumerable: true,
        },
        count: {
          get: function () {
            dependenciesRef.current.count = true;
            return dataRef.current.count;
          },
          enumerable: true,
        },
      }
    );
  }, []);
};

const renderCntMap = {};
const renderOnce = (name) => {
  return (renderCntMap[name] = (renderCntMap[name] || 0) + 1);
};

function OnlyUseInfoFieldComponent() {
  const { info } = useOnDemandDataHook();
  return (
    <fieldset>
      <legend>仅使用了 info 字段</legend>
      <div>info: {info || "-"}</div>
      <div>Render 次数：{renderOnce("OnlyUseInfoFieldComponent")}</div>
    </fieldset>
  );
}

function TwoFieldsComponent() {
  const { info, count } = useOnDemandDataHook();

  return (
    <fieldset>
      <legend>使用了 info 和 count 两个字段</legend>
      <div>info: {info || "-"}</div>
      <div>count: {count}</div>
      <div>Render 次数：{renderOnce("TwoFieldsComponent")}</div>
    </fieldset>
  );
}

export default function App() {
  return (
    <div>
      <OnlyUseInfoFieldComponent />
      <TwoFieldsComponent />
    </div>
  );
}
