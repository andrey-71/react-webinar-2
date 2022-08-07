import React from 'react';
import propTypes from 'prop-types';
import {cn as bem} from "@bem-react/classname";
import './style.css';

function Cart(props) {
  const cn = bem('Cart');
  return (
    <div className={props.isVisible ? cn({visible: true}) : cn()}>
      <div className={cn('container')}>
        <div className={cn('head')}>
          <h2 className={cn('title')}>Корзина</h2>
          <button className={cn('add-button')} onClick={props.closePopup}>
            Закрыть
          </button>
        </div>
        {props.children}
      </div>
    </div>
  )
}

Cart.propTypes = {
  isVisible: propTypes.bool.isRequired,
  closePopup: propTypes.func.isRequired,
}

Cart.defaultProps = {
  isVisible: false,
  closePopup: () => {},
}

export default React.memo(Cart);