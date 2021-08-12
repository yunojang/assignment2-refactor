import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';

import ROUTES_PATH from 'constant/routesPath';

function RecentButton() {
  const location = useLocation();
  const alreadyRecentList = location.pathname === ROUTES_PATH.RECENT_LIST;

  return (
    <Button to={ROUTES_PATH.RECENT_LIST} hidden={alreadyRecentList}>📃 최근 조회 목록</Button>
  )
}

export default RecentButton;

const Button = styled(Link)`
  position: fixed;
  bottom: 25px;
  right: 45px;
  padding: 10px;
  border: 3px solid #aaa;
  color: #666;
  font-weight: bold;
`;
