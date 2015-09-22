module.exports = {
  main: {
    options: {
      questions: [
        {
          config: 'selectedTask',
          type: 'list',
          message: 'What would you like to do?',
          choices: [
            {
              name: 'dev',
              value: 'dev'
            },
            {
              name: 'pre-commit',
              value: 'pre-commit'
            },
            {
              name: 'staging',
              value: 'staging'
            }
          ]
        }
      ]
    }
  }
};
