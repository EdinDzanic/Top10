const isListView = (state = true, action) => {
    switch (action.type) {
        case 'CHANGE_VIEW':
            return !state;
        default:
            return state;
    }
}

export default isListView;