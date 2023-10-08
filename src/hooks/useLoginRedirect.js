import { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { AddNotifications } from "setup/actions/notification";
import { useNavigate } from "react-router-dom";

const useLoginRedirect = (user) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const timeoutRef = useRef();

  useEffect(() => {
    if (!user) {
      timeoutRef.current = setTimeout(() => {
        dispatch(
          AddNotifications({ msg: "You should login first", type: "error" })
        );
        navigate("/login");
      }, 5000);
    }

    return () => {
      clearTimeout(timeoutRef.current);
    };
  }, [dispatch, navigate, user]);
};

export default useLoginRedirect;
