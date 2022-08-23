import { PencilLine } from 'phosphor-react';
import { Avatar } from './Avatar';
import styles from './Sidebar.module.css';

export function Sidebar() {
    return (
        <aside className={styles.sidebar}>
            <img
                className={styles.cover}
                src="https://images.unsplash.com/photo-1573455494060-c5595004fb6c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=40" />


            <div className={styles.profile}>

                <Avatar className={styles.avatar} isOwnerAccount source="https://pbs.twimg.com/media/EJksgxKUYAYwRXC?format=jpg&name=large" />

                <strong>Melissa Kuniyoshi</strong>
                <span>Cantora</span>

            </div>


            <footer>
                <a href='#'>
                    <PencilLine size={20} />
                    Editar seu Perfil
                </a>
            </footer>

        </aside>
    );
}