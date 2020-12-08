
  import anecdotesService from '../services/anecdotes';
  // const anecdotesAtStart = [
  //   'If it hurts, do it more often',
  //   'Adding manpower to a late software project makes it later!',
  //   'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  //   'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  //   'Premature optimization is the root of all evil.',
  //   'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
  // ]
  
  // const getId = () => (100000 * Math.random()).toFixed(0)
  
  // const asObject = (anecdote) => {
  //   return {
  //     content: anecdote,
  //     // id: getId(),
  //     votes: 0
  //   }
  // }

  
  // const initialState = anecdotesAtStart.map(asObject)
  
  const anecdoteReducer = (state = [], action) => {

    switch(action.type){
      case 'VOTE': {
        console.log(action)
        let newState = state.map((state) => {
          if (state.id !== action.data.id) {
            return state
          } else {
            return action.data;
          }
        });

        return newState.sort((a,b) => b.votes - a.votes)
      }
      case 'NEW_ANECDOTE': return state.concat(action.data)
      case 'INIT_ANECDOTE': return action.data
      default: return state;
    }
  }

  export const addVote = (id) => {
    return {
      type: "VOTE",
      data: id
    }
  }

  export const updateVote = (anecdote) => {
    const newAnecdote = {...anecdote, votes: anecdote.votes+1};
    return async dispatch => {
      let response = await anecdotesService.update(newAnecdote);
      console.log(response)
      dispatch ({
        type: "VOTE",
        data: response
      });
    }
  }

  export const createAnecdote = (anecdote) => {
    return async dispatch => {
      let response = await anecdotesService.createNew(anecdote);
      console.log(response)
      dispatch ({
        type: "NEW_ANECDOTE",
        data: response
      });
    }
  }

  // BEFORE Thunk
  // export const initializeAnecdote = (anecdote) => {
  //   return {
  //     type: 'INIT_ANECDOTE',
  //     data: anecdote,
  //   }
  // }

  export const initializeAnecdote = () => {
    return async dispatch => {
      const anecdotes = await anecdotesService.getAll();
      dispatch({
        type: 'INIT_ANECDOTE',
        data: anecdotes,
      }); 
    }
  }

  export default anecdoteReducer