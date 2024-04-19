import { Link } from 'react-router-dom';
import { usePopup } from 'contexts/PopupContext';
import scrollToClass from '../../utils/scrollToBlock';

const MenuLink = ({ to, text, onClick, scrollto, children }) => {
  const { menuClose } = usePopup();

  const handleClick = () => {
    if (onClick) {
      onClick();
      return;
    }
    if (scrollto) {
      console.log(scrollto);
      scrollToClass(scrollto);
    }
    menuClose();
  };

  return (
    <li>
      <Link to={to} onClick={handleClick}>
        {text}
      </Link>
      {children}
    </li>
  );

  // const linkElement = to ? (
  //   <Link to={to} onClick={handleClick}>
  //     {text}
  //   </Link>
  // ) : scrollto ? (
  //   <Link data-scrollto={scrollto} onClick={handleClick}>
  //     {text}
  //   </Link>
  // ) : onClick ? (
  //   <Link onClick={handleClick}>{text}</Link>
  // ) : (
  //   <Link>{text}</Link>
  // );

  // return (
  //   <li>
  //     {linkElement}
  //     {children}
  //   </li>
  // );
};

export default MenuLink;
