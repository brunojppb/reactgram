export default class Routes {
  static INDEX = '/'
  static LOGIN = '/login'
  static ABOUT = '/about'
  static PRIVACY = '/privacy'
  static HELP = '/help'
  static TIMELINE = '/app'
  static POST = '/app/posts/:postId' // TODO: Use function to construct post route
  static ADD_POST = '/app/upload'
  static SETTINGS = '/app/settings'
  static CHANGE_PASSWORD = '/app/settings/pw'
  static USER_PROFILE = '/app/users/:userId'
  static USER_FOLLOWERS = '/app/users/:userId/followers'
  static USER_FOLLOWING = '/app/users/:userId/following'
  static USER_SEARCH = '/app/users'

  static getUserProfile = (userId) => {
    return `/app/users/${userId}`
  }

  static getUserFollowers = (userId) => {
    return `/app/users/${userId}/followers`
  }

  static getUserFollowing = (userId) => {
    return `/app/users/${userId}/following`
  }

  static getPost = (postId) => {
    return `/app/posts/${postId}`
  }

  static shouldRedirectToLogin(pathname) {
    return pathname !== Routes.LOGIN && pathname !== Routes.INDEX
  }
}
