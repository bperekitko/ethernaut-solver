import { FunctionComponent } from 'react';
import React from 'react';
import styles from './fallback.module.scss';

const Fallback: FunctionComponent<unknown> = () => {
  return (
    <div className={styles.content}>
      <p>
        To beat this level we have to claim its ownership and drain its balance to zero. As you have probably noticed
        there are two ways of becoming an owner. First one is to contribute more Ether than the current owner through
        the function <code>contribute</code>. Unfortunately we are only able to send at most 0.001 Ether in one
        transaction, and we need to contribute more than 1000 Ether to beat the current owner (that was set in the
        contstructor). So this way is out.
      </p>
      <p>
        Second way is to claim ownership through the function without a name at the end of the contract code. Such
        function is called fallback function (hence the name of the level). You can read about it in the Solidity{' '}
        <a
          href='https://solidity.readthedocs.io/en/v0.5.3/contracts.html#fallback-function'
          target='_blank'
          rel='noopener noreferrer'
        >
          documentation.
        </a>{' '}
        For us the most important thing is that this function is executed whenever the contract receives plain Ether.
        Which means that if we send Ether to this contract and we have contributed something earlier (
        <code>require</code> statement in the beging of fallback function), we will become the owner and we will be free
        to execute <code>withdraw</code> function.
      </p>
      <blockquote></blockquote>
    </div>
  );
};

export default Fallback;
