export const allTasks = ({ tasks }) => Object.keys(tasks).map(id => tasks[id]);

export const stepsByTaskId = ({ steps }, task_id) => {
  const stepsByTaskId = [];
  Object.keys(steps).forEach(stepId => {
    const step = steps[stepId];
    if (steps[stepId].task_id === task_id) {
      stepsByTaskId.push(step)
    };
  });
  return stepsByTaskId;
};
