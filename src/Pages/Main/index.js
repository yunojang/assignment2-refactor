import { useEffect } from "react";
import { useHistory } from "react-router";

function Main() {
  const history = useHistory();
  
  useEffect(()=> {
    history.push('/product')
  },[history])
  
  return null;
}

export default Main;