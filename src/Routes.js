export default class Routes {

  static INDEX            = '/';
  static LOGIN            = '/login';
  static ABOUT            = '/about';
  static PRIVACY          = '/privacy';
  static HELP             = '/help';
  static TIMELINE         = '/app';
  static POST             = '/app/post' // TODO: Use function to construct post route
  static ADD_POST         = '/app/upload';
  static SETTINGS         = '/app/settings';
  static CHANGE_PASSWORD  = '/app/settings/pw';
  static USER_PROFILE     = '/app/users/:id';
  static USER_FOLLOWERS   = '/app/users/:id/followers';
  static USER_FOLLOWING   = '/app/users/:id/following';
  static USER_SEARCH      = '/app/users';

  static getUserProfile = (id) => {
    return `/app/users/${id}`;
  };

  static getUserFollowers = (userId) => {
    return `/app/users/${userId}/followers`;
  };

  static getUserFollowing = (userId) => {
    return `/app/users/${userId}/following`;
  };

  static shouldRedirectToLogin(pathname) {
    return pathname !== Routes.LOGIN && pathname !== Routes.INDEX
  }

}