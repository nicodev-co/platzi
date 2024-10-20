import { BsCheck } from "react-icons/bs";
import { TiDelete, TiEdit } from "react-icons/ti";
import './TodoIcon.css';

const iconType = {
    'check': (color) => <BsCheck className="icon-svg" fill={color} />,
    'delete': (color) => <TiDelete className="icon-svg" fill={color} />,
    'edit': (color) => <TiEdit className="icon-svg" fill={color} />
};

function TodoIcon({ type, color, onClick }) {
    return <span className={`icon-container icon-container-${type}`}
        onClick={onClick}>
        {iconType[type](color)}
    </span>
}

export { TodoIcon };