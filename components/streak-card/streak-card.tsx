import styles from './streak-card.module.css';

type Props = {
    numOfTasks: number;
    title: string;
    percentage?: number;
    color?: string;
}

export default function StreakCard ({ numOfTasks, title, percentage, color }: Props) {
    return (
        <>
            <div className={styles.streakCard}>
                <p>{numOfTasks} tasks</p>
                <h1 className={`text-light ${styles.title}`}>{title}</h1>
                <p style={{color: color}}>{percentage}%</p>
            </div>
        </>
    )
}