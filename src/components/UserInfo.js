export class UserInfo {
  constructor({ profileName, profileActivities }) {
    this._name = document.querySelector(profileName);
    console.log(this._name);
    this._activities = document.querySelector(profileActivities);
    console.log(this._activities);
  }
  getUserInfo() {
    return {
      name: this._name.textContent,
      about: this._activities.textContent,
      // avatar: this._avatar.src,
      // _id: this._userId,
    };
  }

  setUserInfo(userData) {
    this._name.textContent = userData.name;
    this._activities.textContent = userData.about;
    console.log(userData);
    // this._avatar.src = avatar;
    // this._userId = _id;
  }
}
