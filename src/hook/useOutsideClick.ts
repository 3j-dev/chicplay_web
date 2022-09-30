import { Dispatch, SetStateAction, useEffect, useState } from 'react';

type UseOutsideClickType = (
  // 선택된 요소(el), Active 초기값(initialState)을 넘겨받는다.
  el: React.RefObject<HTMLDivElement>,
  initialState: boolean,
) => [boolean, Dispatch<SetStateAction<boolean>>];

const useOutsideClick: UseOutsideClickType = (el, initialState) => {
  const [isActive, setIsActive] = useState(initialState);

  // 1)
  useEffect(() => {
    const pageClickEvent = (e) => {
      if (el.current !== null && !el.current.contains(e.target)) {
        setIsActive(!isActive);
      }
    };

    if (isActive) {
      window.addEventListener('click', pageClickEvent);
    }
    // this event is not need when dropdown in inactive state.
    return () => {
      window.removeEventListener('click', pageClickEvent);
    };
  }, [isActive, el]);
  // 3)
  return [isActive, setIsActive];
};

export default useOutsideClick;
