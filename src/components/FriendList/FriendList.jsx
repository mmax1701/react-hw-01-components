import friends from './friends.json';
import css from './friendList.module.css';

const FriendList = () => {
  return (
    <div>
      <ul className={css.friendList}>
        {friends.map(({ avatar, name, isOnline, id }) => (
          <li key={id} className={css.item}>
            <span className={isOnline ? css.statusOnline : css.statusOffline}>
              {isOnline}
            </span>
            <img
              className={css.avatar}
              src={avatar}
              alt="User avatar"
              width="48"
            />
            <p className={css.name}>{name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FriendList;
