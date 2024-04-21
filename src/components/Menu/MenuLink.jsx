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
};

export default MenuLink;
