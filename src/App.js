import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import Notiflix from "notiflix";

import Router from "./client/Router/Router";
import Navigation from "./client/Navigation";
import Container from "./shared/components/Container";
import { userCurrent } from "./redux/user/userThunk";
import { userErrorSelector, userIsLoadingSelector } from "./redux/selectors";

const App = () => {
  const dispatch = useDispatch();
  const { push } = useHistory();
  const isLoading = useSelector(userIsLoadingSelector);
  const error = useSelector(userErrorSelector);
  const errorShow = () => {
    Notiflix.Notify.failure(error.message);
  };

  useEffect(() => {
    dispatch(userCurrent());
  }, [dispatch]);

  return (
    <Container>
      <Navigation />
      {isLoading && <p>Loading...</p>}
      {error && errorShow()}

      <Router />
    </Container>
  );
};

export default App;
