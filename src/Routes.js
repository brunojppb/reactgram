export default class Routes {

  static INDEX            = '/';
  static LOGIN            = '/login';
  static TIMELINE         = '/app';
  static PROFILE          = '/app/profile'; // TODO: Use function to construct profile route
  static FOLLOWERS        = '/app/profile/followers' // TODO: User function to construct followers route
  static FOLLOWING        = '/app/profile/following' // TODO: User function to construct followers route
  static POST             = '/app/post' // TODO: Use function to construct post route
  static ADD_POST         = '/app/posts/add';
  static SETTINGS         = '/app/settings';
  static CHANGE_PASSWORD  = '/app/settings/pw';

  static shouldRedirectToLogin(pathname) {
    return pathname !== Routes.LOGIN && pathname !== Routes.INDEX
  }

}