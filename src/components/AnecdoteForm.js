import React from 'react'
import { useDispatch } from 'react-redux';
import { createAnecdote} from '../reducers/anecdoteReducer';
import anecdotesService from '../services/anecdotes';

const AnecdoteForm = () => {
    const dispatch = useDispatch()
  
    const addAnecdote = async (event) => {
        event.preventDefault();
        let anecdote = event.target.anecdote.value;
        event.target.anecdote.value = '';
        dispatch(createAnecdote(anecdote));
      }

    return(
        <div>
            <h2>create new</h2>
            <form onSubmit={addAnecdote}>
                <div>
                <input name="anecdote"/></div>
                <button>create</button>
            </form>
        </div>
    )
  }
  
  export default AnecdoteForm