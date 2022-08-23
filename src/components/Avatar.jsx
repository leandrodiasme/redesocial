import styles from './Avatar.module.css';

export function Avatar({ isOwnerAccount = true, source }) {
    return (
        <img className={styles.avatar + " " + (isOwnerAccount ? styles.active : "")} src={source} />
    )
}
