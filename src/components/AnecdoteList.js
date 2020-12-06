import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { updateVote} from '../reducers/anecdoteReducer';
import Filter from './Filter'
import { setNotification, removeNotification} from '../reducers/notificationReducer';

const AnecdoteList = () => {
   
    const anecdotes = useSelector(state => {
        return state.anecdote.filter((anecdote) => {
            return anecdote.content.includes(state.filter);
        });
    });
    
    const dispatch = useDispatch()
  
    const vote = (anecdote) => {
        console.log('vote', anecdote.id)
        dispatch(updateVote(anecdote))
        dispatch(setNotification(anecdote.content, 5));
    }

    return(
        <div>
           <h2>Anecdotes</h2>
           <Filter/>
            {anecdotes.map(anecdote =>
                <div key={anecdote.id}>
                <div>
                    {anecdote.content}
                </div>
                <div>
                    has {anecdote.votes}
                    <button onClick={() => vote(anecdote)}>vote</button>
                </div>
                </div>
            )}
        </div>
    )
  }
  
  export default AnecdoteList