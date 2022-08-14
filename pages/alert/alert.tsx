import { NextPage } from 'next';
import cn from 'classnames';
import styles from './alert.module.scss';

const Alert: NextPage = ({ children, type }) => {
  return (
    <>
    <div
          className={cn({
            [styles.success]: type === 'success',
            [styles.error]: type === 'error',
          })}
        >
          {children}
        </div>
    </>
  );
};

export default Alert;
