
import { useSelector } from "react-redux";
import { isUserLogin } from '../../redux/auth/authSelector';

const isAuth = () => {
  return useSelector(isUserLogin);
};

export default isAuth;