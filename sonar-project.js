const sonarqubeScanner = require('sonarqube-scanner');
  sonarqubeScanner({
     serverUrl: 'http://sonarqube-sonarqube:9000',
     options : {
     'sonar.sources': '.',
     'sonar.inclusions' : 'src/**' // Entry point of your code
     }
   }, () => {});
