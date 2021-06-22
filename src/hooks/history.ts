import { useHistory } from "react-router-dom"

export const useNavigate = () => {
  const history = useHistory();
  
  const navigateTo = (toURL: string) => {
    history.push(toURL);
  }

  return {
    navigateTo,
  }
}
