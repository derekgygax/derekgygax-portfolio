"use client"

import React, { useState } from 'react';
import classNames from 'classnames';

// components
import { Button } from '../../button/Button';

// styles
import styles from './EmailFormClient.module.scss'

type EmailFormClientProps = {
  labels: {
    name: string;
    email: string;
    subject: string;
    message: string;
  },
  placeHolders: {
    name: string;
    email: string;
    subject: string;
    message: string;
  },
  loading: string;
  thankyou: string;
  buttonText: string;
}

export const EmailFormClient: React.FC<EmailFormClientProps> = ({
  labels,
  placeHolders,
  loading,
  thankyou,
  buttonText
}) => {

  const [isLoading, setIsLoading] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  async function handleSubmit(event: any) {
    event.preventDefault();

    const name = event.target.name.value;
    const email = event.target.email.value;
    const message = event.target.message.value;

    setIsLoading(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name,
          email,
          message
        })
      });

      // TODO Need to put in error catching
      // And handle getting a different error
      if (response.status === 200) {
        event.target.reset();
        setIsComplete(true);
      }

    } catch (error) {
      // TODO is this right???
      // did you get rid of something????
      // TODO you need to report it to the page if something bad happens!!
      if (error instanceof Error) {
        setErrorMessage(error.message);
      } else {
        console.log('Unexpected error', error);
      }
    }
    setIsLoading(false);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        {errorMessage}
        <div>
          <div className={styles.flexContainer}>
            <div className={styles.inputName}>
              <div>
                <label className={styles.contactUs}>
                  {labels.name}
                </label>
              </div>
              <div>
                <input
                  className={classNames(styles.input, styles.nameEmailInput)}
                  placeholder={placeHolders.name}
                  type="text"
                  name="name"
                  required
                />
              </div>
            </div>
            <div>
              <div>
                <label className={styles.contactUs}>
                  {labels.email}
                </label>
              </div>
              <div>
                <input
                  className={classNames(styles.input, styles.nameEmailInput)}
                  placeholder={placeHolders.email}
                  type="text"
                  name="email"
                  required
                />
              </div>
            </div>
          </div>
        </div>
        <div>
          <div>
            <div>
              <label className={styles.contactUs}>
                {labels.subject}
              </label>
            </div>
            <div>
              <input
                className={classNames(styles.input, styles.subjectInput)}
                placeholder={placeHolders.subject}
                type="text"
                name="subject"
                required
              />
            </div>
          </div>
        </div>
        <div>
          <div>
            <label className={styles.contactUs}>
              {labels.message}
            </label>
          </div>
          <div className={styles.textareaContainer}>
            <textarea
              className={styles.textarea}
              name="message"
              placeholder={placeHolders.message}
              required
            />
          </div>
          <div className={styles.buttonsAndThankyou}>
            <div className={styles.buttons}>
              <div
                className={
                  classNames(
                    styles.buttonSumbit,
                    styles.buttonContainer
                  )
                }
              >
                <Button
                  className={styles.button}
                >
                  {
                    isLoading ? loading : buttonText
                  }
                </Button>
              </div>
            </div>
            {isComplete &&
              <div className={styles.message}>
                <span>
                  {thankyou}
                </span>
              </div>
            }
          </div>
        </div>
      </form>
    </div>
  );
}