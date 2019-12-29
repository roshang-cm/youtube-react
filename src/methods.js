
export function getUser() {
    let user = localStorage.getItem('user');
    if(user) {
      return JSON.parse(user);
    }
    return user;
  }
