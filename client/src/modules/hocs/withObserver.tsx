import * as React from "react";
import {observer} from "mobx-react-lite";

export default (Component, store) => {
  const Observed = observer(Component);
  return (props) => <Observed {...props} store={store} />;
}