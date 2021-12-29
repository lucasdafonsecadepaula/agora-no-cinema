import axios from 'axios';
import React, {
  useState,
  createContext,
  useMemo,
  useEffect,
  useCallback,
} from 'react';

export const ContextModal = createContext({});

export function ModalProvider({ children }) {
  const [movieModal, setMovieModal] = useState({
    isOpen: false,
    data: {},
  });

  const [trailerData, setTrailerData] = useState();

  const fetchData = useCallback(async () => {
    const { id } = movieModal.data;
    await axios
      .get(
        `${process.env.REACT_APP_BASE_URL}/movie/${id}/videos?${process.env.REACT_APP_API_KEY}`,
      )
      .then((res) => {
        setTrailerData(res.data.results);
      });
  }, [movieModal.data]);

  useEffect(() => {
    if (movieModal.isOpen) {
      fetchData();
    }
  }, [movieModal.isOpen, fetchData]);

  const ModalControler = useMemo(
    () => ({ movieModal, setMovieModal, trailerData }),
    [movieModal, trailerData],
  );

  return (
    <ContextModal.Provider value={ModalControler}>
      {children}
    </ContextModal.Provider>
  );
}
