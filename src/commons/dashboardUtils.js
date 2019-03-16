exports.childRoute = function childroute(module, ls) {
  if (module.user.userStatus === 'disabled') {
    return module.app.router.navigate('dashboard/user-account');
  }
  if (module.user.userType === undefined || module.user.userType === ''
  || (module.user.userType !== 'Developer' && module.user.userType !== 'tro-admin')) {
    module.app.authenticated = false;
    ls.clear();
    return module.app.router.navigate('/');
  }
  return module.app.router.navigate('dashboard/tro-admin');
};

exports.subRoute = async function subRoute(module, ls) {
  module.uid = await module.app.auth.getTokenPayload().sub;
  if (module.uid === null || module.uid === undefined) return module.app.logout();
  module.user = await module.app.appState.getUser(module.uid);
  ls.setItem('userEmail', module.user.email);
  return this.childRoute(module, ls);
};
