/// <reference types="react" />
import { DefaultNavigatorOptions, ParamListBase, StackNavigationState, StackRouterOptions } from '@react-navigation/native';
import type { StackNavigationConfig, StackNavigationEventMap, StackNavigationOptions } from '../types';
type Props = DefaultNavigatorOptions<ParamListBase, StackNavigationState<ParamListBase>, StackNavigationOptions, StackNavigationEventMap> & StackRouterOptions & StackNavigationConfig;
declare function StackNavigator({ id, initialRouteName, children, screenListeners, screenOptions, ...rest }: Props): JSX.Element;
export declare const createStackNavigator: {
    <ParamList extends ParamListBase>(): import("@react-navigation/native").TypedNavigator<ParamList, StackNavigationState<ParamListBase>, StackNavigationOptions, StackNavigationEventMap, typeof StackNavigator>;
    <ParamList_1 extends ParamListBase, Config extends import("packages/core/lib/typescript/src/StaticNavigation").StaticConfig<ParamList_1, StackNavigationState<ParamListBase>, StackNavigationOptions, StackNavigationEventMap, typeof StackNavigator>>(config: Config): import("@react-navigation/native").TypedNavigator<ParamList_1, StackNavigationState<ParamListBase>, StackNavigationOptions, StackNavigationEventMap, typeof StackNavigator> & {
        config: Config;
    };
};
export {};
//# sourceMappingURL=createStackNavigator.d.ts.map