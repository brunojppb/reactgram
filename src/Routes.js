export default class Routes {

  static INDEX            = '/';
  static LOGIN            = '/login';
  static TIMELINE         = '/app';
  static PROFILE          = '/app/profile'; // TODO: Use function to construct profile route
  static FOLLOWERS        = '/app/profile/followers' // TODO: User function to construct followers route
  static FOLLOWING        = '/app/profile/following' // TODO: User function to construct followers route
  static POST             = '/app/post' // TODO: Use function to construct post route
  static ADD_POST         = '/app/upload';
  static SETTINGS         = '/app/settings';
  static CHANGE_PASSWORD  = '/app/settings/pw';
  static USER_PROFILE     = '/app/users/:id';

  static getUserProfile = (id) => {
    return `/app/users/${id}`;
  };

  static shouldRedirectToLogin(pathname) {
    return pathname !== Routes.LOGIN && pathname !== Routes.INDEX
  }

}