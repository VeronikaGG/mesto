export class UserInfo {
  constructor({ profileName, profileActivities }) {
    this._name = document.querySelector(profileName);
    this._activities = document.querySelector(profileActivities);
  }
  getUserInfo() {
    return { name: this._name.textContent, job: this._activities.textContent };
  }

  setUserInfo(name, job) {
    this._name.textContent = name;
    this._activities.textContent = job;
  }
}
