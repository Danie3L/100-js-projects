const reloadIcon = document.getElementById('reload-icon');
const userAvatar = document.getElementById('user-avatar');
const userName = document.getElementById('user-name');
const userAddress = document.getElementById('user-address');

const updateUserInfo = ({ iconUrl, name, address }) => {
  userAvatar.setAttribute('src', iconUrl);
  userName.textContent = name;
  userAddress.textContent = address;
};
const reloadUser = () => {
  fetch('https://randomuser.me/api/')
    .then((res) => res.json())
    .then((data) => {
      const info = data.results[0];
      const user = {
        iconUrl: info.picture.medium,
        name: `${info.name.first} ${info.name.last}`,
        address: `${info.location.city}, ${info.location.street.number} ${info.location.street.name}`,
      };
      updateUserInfo(user);
    });
};

reloadIcon.addEventListener('click', reloadUser);
