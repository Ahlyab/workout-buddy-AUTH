import { useAuthContext } from "./useAuthContext";
import { useWorkoutsContext } from "./useWorkoutsContext";
export const useLogout = () => {
  const { dispatch } = useAuthContext();
  const { dispatch: workwoutsDispatch } = useWorkoutsContext();

  const logout = () => {
    // remove user from storage
    localStorage.removeItem("user");

    //dispatch logout
    dispatch({ type: "LOGOUT" });
    workwoutsDispatch({ type: "SET_WORKOUTS", payload: null });
  };

  return { logout };
};
