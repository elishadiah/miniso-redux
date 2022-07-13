import React, { useState } from 'react';

const Coupon = () => {
  const [isShow, setIsShow] = useState(false);
  return (
    <div>
      <button
        type='button'
        className='text-primary btn'
        style={{ boxShadow: 'none' }}
        onClick={() => setIsShow((p) => !p)}
      >
        Do you have a Coupon?
      </button>
      {isShow && (
        <form className='d-flex gap-3 py-3'>
          <input
            className='form-control'
            type={'text'}
            placeholder='Enter you coupon'
          />
          <button className='btn btn-primary'>Apply</button>
        </form>
      )}
    </div>
  );
};

export default Coupon;
