import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Dropdown.scss';

const Dropdown = () => {
  const navigate = useNavigate();

  const handleClick = (id) => {
    navigate(`/product/${id}`);
  };
  return (
    <div className="selectMenu">
      <ul className="options">
        {NAVBAR_DATA.map((tab) => {
          return (
            <div
              key={tab.id}
              className="option"
              onClick={() => handleClick(tab.id)}
            >
              <li>
                <i className={tab.icon} />
                <span>{tab.tabName}</span>
              </li>
            </div>
          );
        })}
      </ul>
    </div>
  );
};
export default Dropdown;
const NAVBAR_DATA = [
  {
    id: 1,
    tabName: '전체보기',
    icon: 'fa-solid fa-grip',
  },
  {
    id: 2,
    tabName: '신제품',
    icon: 'fa-solid fa-certificate',
  },
  {
    id: 3,
    tabName: '영양제',
    icon: 'fa-solid fa-capsules',
  },
  {
    id: 4,
    tabName: '면도/구강',
    icon: 'fa-regular fa-hand-spock',
  },
  {
    id: 5,
    tabName: '스킨케어',
    icon: 'fa-solid fa-spray-can',
  },
  {
    id: 6,
    tabName: '푸드',
    icon: 'fa-solid fa-bowl-food',
  },
];
