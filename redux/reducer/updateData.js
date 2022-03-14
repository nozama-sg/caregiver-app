const updateIntervalData = (state, action, actions) => {
  return {
    ...state,
    [actions[1]]: {
      ...state[actions[1]],
      [actions[2]]: [...action.payload.data],
    },
  };
};

const updateChat = (state, action) => {
  return {
    ...state,
    chat: action.payload.data,
  };
};

const updateCurrLocation = (state, action) => {
  return {
    ...state,
    locationData: {
      ...state.locationData,
      current: {
        room: action.payload.room,
        timeSpent: action.payload.timeSpent,
      },
    },
  };
};

const updateAnomaly = (state, action) => {
  const isToday = (d1) => {
    let d1_date = new Date(`${d1.slice(0, 10)}T${d1.slice(11)}`);
    return new Date().getTime() - d1_date.getTime() < 24 * 3600 * 1000;
  };

  return {
    ...state,
    anomalies: {
      ...state.anomalies,
      loaded: true,
      [action.payload.healthInfoType]: action.payload.anomalies.filter((x) =>
        isToday(x.date)
      ),
    },
  };
};

export { updateIntervalData, updateChat, updateCurrLocation, updateAnomaly };
