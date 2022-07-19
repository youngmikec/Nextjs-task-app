import Link from 'next/link';
import styles from './task.module.css';
import { Task } from '../types';

type Props = {
    task: Task;
    handleDeleteAction?: any;
    handleEditAction?: any;
    setDisplayModal?: any;
}

export default function TaskCard ({task, handleDeleteAction, handleEditAction, setDisplayModal}: Props) {

    const markTaskCompleted = async (task: Task) => {
        handleEditAction(task, {completed: true});
    }
    return (
        <>
                <div className={`flex ${styles.taskCard} justify-between`}>
                    <div className="flex-1 mr-1" style={{maxWidth: '40px' }}>
                        {
                            task?.completed === true ? 
                            <span className={styles.checkBox}><i className="fa fa-check" aria-hidden="true"></i></span> :
                            <button className={styles.checkBox} onClick={() => { markTaskCompleted(task)}}></button>
                             
                        }
                    </div>

                    <div className="flex-1 text-left">
                        <Link href={`/task/${task.id}`}>
                            <a className={task.completed === true ? styles.completed : ''}>{ task?.title }</a>
                        </Link>
                    </div>
                    <div className="flex-1 text-right">
                        <span className={`mr-1 ${styles.action}`} onClick={() => { 
                            setDisplayModal('edit', task);
                        }}>
                            <i className={`fa fa-pencil ${styles.action}`} aria-hidden="true"></i>
                        </span>
                        <span className={`ml-1 ${styles.action}`} onClick={(e) => { 
                            e.preventDefault();
                            handleDeleteAction(task);
                         }}>
                            <i className="fa fa-trash-o" aria-hidden="true"></i>
                        </span>
                    </div>
                </div>
        </>
    )
}