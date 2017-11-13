module.exports = {
  'helpers': {
    'if_or': function(v1, v2, options) {
      if (v1 || v2) {
        return options.fn(this);
      }

      return options.inverse(this);
    },
  },
  'prompts': {
    'name': {
      'type': 'string',
      'required': true,
      'message': 'Project name',
    },
    'description': {
      'type': 'string',
      'required': false,
      'message': 'Project description',
      'default': 'A Vue.js project',
    },
    'author': {
      'type': 'string',
      'message': 'Author',
    },
    'build': {
      'type': 'list',
      'message': 'Vue build',
      'choices': [
        {
          'name': 'Runtime + Compiler: recommended for most users',
          'value': 'standalone',
          'short': 'standalone',
        },
        {
          'name': 'Runtime-only: about 6KB lighter min+gzip, but templates (or any Vue-specific HTML) are ONLY allowed in .vue files - render functions are required elsewhere',
          'value': 'runtime',
          'short': 'runtime',
        },
      ],
    },
    'lint': {
      'type': 'confirm',
      'message': 'Use ESLint to lint your code? (Airbnb (https://github.com/airbnb/javascript))',
    },
    'unit': {
      'type': 'confirm',
      'message': 'Setup unit tests with Karma + Mocha?',
    },
    'e2e': {
      'type': 'confirm',
      'message': 'Setup e2e tests with Nightwatch?',
    },
    'docker': {
      'type': 'confirm',
      'message': 'Do you want to create Docker Compose configuration?',
    },
    'dockerNode': {
      'when': 'docker',
      'type': 'string',
      'message': 'Provide a port for Node',
      'default': '8080',
    },
    'dockerNginx': {
      'when': 'docker',
      'type': 'string',
      'message': 'Provide a port for Nginx',
      'default': '8081',
    },
    'bootstrap': {
      'type': 'confirm',
      'message': 'Do you want to use Bootstrap?',
    },
    'bootstrapConfig': {
      'when': 'bootstrap',
      'type': 'list',
      'message': 'Choose a Bootstrap version',
      'choices': [
        {
          'name': 'Bootstrap 3.x (https://getbootstrap.com/docs/3.3/)',
          'value': '3',
          'short': 'Bootstrap 3.x',
        },
        {
          'name': 'Bootstrap 4.x (https://getbootstrap.com/)',
          'value': '4',
          'short': 'Bootstrap 4.x',
        },
      ],
    },
  },
  'filters': {
    '.eslintrc.js': 'lint',
    '.eslintignore': 'lint',
    'config/test.env.js': 'unit || e2e',
    'test/unit/**/*': 'unit',
    'build/webpack.testing.conf.js': 'unit',
    'test/e2e/**/*': 'e2e',
    'provision/**/*': 'docker',
    'docker-compose.yml': 'docker',
    'src/assets/scss/modules/bootstrap': 'bootstrap',
  },
  'completeMessage': 'To get started:\n\n  {{^inPlace}}cd {{destDirName}}\n  {{/inPlace}}yarn install\n  npm run dev\n\nDocumentation can be found at https://vuejs-templates.github.io/webpack',
};
