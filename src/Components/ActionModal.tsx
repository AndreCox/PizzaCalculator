import React from 'react';
import { useEffect, useRef } from 'react';
import { store } from '../Store';
import { runInAction } from 'mobx';

const outsideDetect = (ref: any) => {
  {
    useEffect(() => {
      /**
       * Alert if clicked on outside of element
       */
      function handleClickOutside(event: Event) {
        if (ref.current && !ref.current.contains(event.target)) {
          store.modalOpen = false;
        }
      }
      // Bind the event listener
      document.addEventListener('mousedown', handleClickOutside);
      return () => {
        // Unbind the event listener on clean up
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }, [ref]);
  }
};

const ActionModal = ({ open, children, className }: any) => {
  const ref = useRef(null);
  outsideDetect(ref);
  if (!open) {
    return null;
  }
  return (
    <div
      className={className + ' fixed inset-0 flex items-center justify-center'}
    >
      <div ref={ref} className="bg-white rounded-md p-4 shadow-md">
        {children}
      </div>
    </div>
  );
};

export default ActionModal;
