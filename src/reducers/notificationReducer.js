const notificationAtStart = "";

const notificationReducer = (state = notificationAtStart, action) => {
    switch (action.type) {
        case 'SET_NOTIFICATION':
            return action.notification;
        case 'REMOVE_NOTIFICATION':
            return notificationAtStart;
        default:
            return state
    }
}


export const setNotification = (notification, timeInSec) => {
    return async dispatch => {

        await dispatch ({
            type: 'SET_NOTIFICATION',
            notification,
        });

        setTimeout(() => {
            dispatch(removeNotification());
        }, timeInSec * 1000);
    }
}

export const removeNotification = () => {
    return {
      type: 'REMOVE_NOTIFICATION'
    }
}

export default notificationReducer;