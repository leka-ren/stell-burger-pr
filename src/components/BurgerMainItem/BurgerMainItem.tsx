import {
  CurrencyIcon,
  LockIcon,
  DragIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import TrashIcon from "../../images/TrashIcon.svg";
import BurgerMainItemStyles from "./BurgerMainItem.module.css";
import PropTypes from "prop-types";
import { XYCoord } from "dnd-core";

import { DELETE_ITEM_CONSTRUCTOR } from "../../services/actions/burgerActions";
import { useDispatch } from "react-redux";
import { useDrag, useDrop, DropTargetMonitor } from "react-dnd";
import { useRef } from "react";

export interface CardProps {
  id: any
  text: string
  index: number
  moveCard: (dragIndex: number, hoverIndex: number) => void
}

interface DragItem {
  index: number;
  id: string;
  type: string;
}

function BurgerMainItem({ data, blocked, first, index, id, moveCard }: any) {
  const dispatch = useDispatch();

  const refItem = useRef<HTMLLIElement>(null);

  const [{ handlerId }, drop] = useDrop({
    accept: "constructorItem",
    collect(monitor) {
      return {
        handlerId: monitor.getHandlerId(),
      };
    },
    hover(item: DragItem, monitor: DropTargetMonitor) {
      if (!refItem.current) {
        return;
      }
      const dragIndex = item.index;
      const hoverIndex = index;

      if (dragIndex === hoverIndex) {
        return;
      }

      const hoverBoundingRect = refItem.current?.getBoundingClientRect();

      const hoverMiddleY =
        (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;

      const clientOffset = monitor.getClientOffset();

      const hoverClientY = (clientOffset as XYCoord).y - hoverBoundingRect.top;

      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return;
      }

      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return;
      }

      moveCard(dragIndex, hoverIndex);

      item.index = hoverIndex;
    },
  });

  const [{ opacity }, drag] = useDrag({
    type: "constructorItem",
    item: () => {
      return { id, index };
    },
    collect: (monitor: any) => ({
      opacity: monitor.isDragging() ? 0.5 : 1,
    }),
  });

  const styleItem = {
    borderRadius: blocked
      ? first
        ? "88px 88px 40px 40px"
        : "40px 40px 88px 88px"
      : "40px",
  };

  const handlerDeleteItem = () => {
    dispatch({
      type: DELETE_ITEM_CONSTRUCTOR,
      id: data._id,
    });
  };

  drag(drop(refItem));

  return (
    <li
      style={{...styleItem, opacity}}
      className={BurgerMainItemStyles.burgerMainItem__item}
      ref={refItem}
    >
      {!blocked && (
        <span className={BurgerMainItemStyles.burgerMainItem__iteDdBtn}>
          <DragIcon type="primary" />
        </span>
      )}
      <img
        className={BurgerMainItemStyles.burgerMainItem__itemImg}
        src={data.image_mobile}
        alt="картинка ингредиента"
      />
      <p
        className={
          BurgerMainItemStyles.burgerMainItem__itemName +
          " text_type_main-default"
        }
      >
        {data.name}
      </p>
      <div className={BurgerMainItemStyles.burgerMainItem__itemOptions}>
        <p
          className={
            BurgerMainItemStyles.burgerMainItem__itemPrice +
            " text_type_digits-default"
          }
        >
          {data.price}
        </p>
        <span className={BurgerMainItemStyles.burgerMainItem__itemIconPrice}>
          <CurrencyIcon type="primary" />
        </span>
        {blocked ? (
          <span className={BurgerMainItemStyles.burgerMainItem__itemIconLock}>
            <LockIcon type="secondary" />
          </span>
        ) : (
          <span className={BurgerMainItemStyles.burgerMainItem__itemIconTrash}>
            <img
              onClick={handlerDeleteItem}
              src={TrashIcon}
              alt="иконка для удаления элемента"
            />
          </span>
        )}
      </div>
    </li>
  );
}

BurgerMainItem.propTypes = {
  data: PropTypes.object,
  blocked: PropTypes.bool,
  first: PropTypes.bool,
  index: PropTypes.number,
  id: PropTypes.string,
  moveCard: PropTypes.func,
};

export default BurgerMainItem;
