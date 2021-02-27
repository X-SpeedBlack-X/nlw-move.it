import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from'../styles/components/CompletedChallenges.module.css';

export function CompletedChallenges() {
    const { challengesCompleted } = useContext(ChallengesContext);

    return (
        <div className={styles.CompletedChallengesContainer}>
            <span>Desafios completados</span>
            <span>{challengesCompleted}</span>
        </div>
    );
}