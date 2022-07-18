import Link from 'next/link';
import styles from './task.module.css';
import { Task } from '../types';

type Props = {
    task: Task;
}

export default function TaskCard ({task}: Props) {
    return (
        <>
            <Link href={`/task/${task.id}`}>
                <div className={`flex ${styles.taskCard} justify-between`}>
                    <div className="flex-1 mr-1" style={{maxWidth: '40px' }}>
                        <button className={styles.checkBox}></button>
                    </div>
                    <div className="flex-1 text-left">{ task?.title }</div>
                    <div className="flex-1 text-right">
                        <span className={`mr-1 ${styles.action}`}>
                            <i className={`fa fa-pencil ${styles.action}`} aria-hidden="true"></i>
                        </span>
                        <span className={`ml-1 ${styles.action}`}>
                            <i className="fa fa-trash-o" aria-hidden="true"></i>
                        </span>
                    </div>
                </div>
            </Link>
        </>
    )
}