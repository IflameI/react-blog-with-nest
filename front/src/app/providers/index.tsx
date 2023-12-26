import compose from "compose-function";
import {withRouter} from "./withRouter";
import {withStore} from "./withStore";
import {withHarness} from "./withHarness";

export const withProviders = compose(withRouter, withStore, withHarness);
