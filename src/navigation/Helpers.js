export function restartNavigationStack(props,route){
    props.navigation.reset ({
        index: 0,
        routes: [{name: route}],
      })};
