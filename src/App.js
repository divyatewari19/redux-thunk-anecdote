import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import AnecdoteForm from './components/AnecdoteForm';
import AnecdoteList from './components/AnecdoteList';
import Notification from './components/Notification';
import { initializeAnecdote } from './reducers/anecdoteReducer';

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
  // BEFORE Thunk
  //   anecdotesService.getAll().then((res)=>{
  //     dispatch(initializeAnecdote(res));
  //   })
  // },[]);

    dispatch(initializeAnecdote());

  }, [dispatch]);

  return (
    <div>
      <Notification/>
      <AnecdoteList/>
      <AnecdoteForm/>
    </div>
  )
}

export default App