import * as React from "react";
import {observer} from "mobx-react-lite";

export default function withObserver<P>(Component: React.FunctionComponent<P>, store) {
  const Observed = observer(Component);
  return (props) => <Observed {...props} store={store} />;
}