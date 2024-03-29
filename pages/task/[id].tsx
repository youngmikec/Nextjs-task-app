import { GetServerSideProps } from "next";
import Head from "next/head";
import { Task } from '../../components/types';
import styles from '../styles/home.module.css';

export const getServerSideProps: GetServerSideProps = async ({params}: any) => {
    const { id } = params;
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/1/todos?id=${id}`);
    const data = await res.json();

    if (!data) {
        return {
          redirect: {
            destination: '/',
            permanent: false,
          },
        }
    }

    return {
        props: {
            task: data[0]
        }
    }
}

export default function TaskDetail ({task}: any) {
    console.log('task', task);
    return (
        <>
        <Head>
            <title>Task Detail</title>
            <meta name="description" content="Generated by create next app" />
            <link rel="icon" href="/favicon.ico" />
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" integrity="sha512-SfTiTlX6kk+qitfevl/7LibUOeJWlt9rbyDn92a1DqWOw9vWG2MFoays0sgObmWazO5BQPiFucnnEAjpAB+/Sw==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
        </Head>

        <div className={'mainContent'}>
          <div className='flex justify-between'>
            <div className='flex-1'>
              <span><i className="fa fa-bars" aria-hidden="true"></i></span>
            </div>
            <div className='flex-1 text-right'>
              <span className='p-1'><i className="fa fa-search" aria-hidden="true"></i></span>
              <span className='p-1'><i className="fa fa-bell-o" aria-hidden="true"></i></span>
            </div>
          </div>

          <div className='.welcomText'>
            <h1 className={`h1 text-light`}>Whats up Michael!</h1>
          </div>

          {/* <div className='flex'>
              <div className='flex-1 mr-1'>
                <StreakCard title='Uncompleted Tasks' percentage={((unCompletedTasks/ totalTasks) * 100)} numOfTasks={unCompletedTasks} color="#D103FC" />
              </div>
              <div className='flex-1 ml-1'>
                <StreakCard title='Completed Tasks' percentage={((completedTasks / totalTasks) * 100)} numOfTasks={completedTasks} color="#4F74FF" />
              </div>
          </div> */}

            <div className="">
            
                { 
                    task ? 
                    <div className="streakCard">
                        <p>User Id: {task?.userId}</p>
                        <p>Task Id: {task?.id}</p>
                        <p>Title: {task?.title}</p>
                        <p>Status: {task.completed === true ? 'Completed' : 'Not completed'}</p>
                    </div>
                    :
                    <div className="streakCard">
                        <p>User Id: -- </p>
                        <p>Task Id: -- </p>
                        <p>Title: -- </p>
                        <p>Status: -- </p>
                    </div>
                }
            </div>
        

        </div>
        </>
    )
}