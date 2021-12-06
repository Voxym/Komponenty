import React from 'react';
import { useHistory } from 'react-router';
import styles from './MovieTile.styles'
console.log(styles);

interface Props {
    uid: string;
    name: string;
    coverUrl: string
}

export default ({ uid, name, coverUrl}:Props) => {
    const {push} = useHistory();
// @ts-ignore

    return <div style={styles.container} onClick={() => {push(`/movies/${uid}`)}}>
        <img style={styles.cover} src={coverUrl}></img>
        <p>{name}</p>
    </div>
}