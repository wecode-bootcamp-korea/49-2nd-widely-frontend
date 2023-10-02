import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Dropdown.scss';

const Dropdown = ({ setListBtn }) => {
  const navigate = useNavigate();

  const handleClick = (name) => {
    navigate(`/product/${name}`);
    setListBtn(false);
  };
  return (
    <div className="selectMenu">
      <ul className="options">
        {NAVBAR_DATA.map((tab) => {
          return (
            <div
              key={tab.id}
              className="option"
              onClick={() => handleClick(tab.name)}
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
    name: 'all',
    tabName: '전체보기',
    icon: 'fa-solid fa-grip',
  },
  {
    id: 2,
    name: 'new',
    tabName: '신제품',
    icon: 'fa-solid fa-certificate',
  },
  {
    id: 3,
    name: 'nutrient',
    tabName: '영양제',
    icon: 'fa-solid fa-capsules',
  },
  {
    id: 4,
    name: 'shaving',
    tabName: '면도/구강',
    icon: 'fa-regular fa-hand-spock',
  },
  {
    id: 5,
    name: 'skin',
    tabName: '스킨케어',
    icon: 'fa-solid fa-spray-can',
  },
  {
    id: 6,
    name: 'food',
    tabName: '푸드',
    icon: 'fa-solid fa-bowl-food',
  },
];
