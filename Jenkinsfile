pipeline {
  agent {
      docker {
          image 'node:6-alpine'
          args '-p 3000:3000'
      }
  }
  environment {
      CI = 'true'
  }
  stages {
    stage('Build') {
      steps {
          sh 'npm install'
      }
    }
    stage('Test') {
      steps {
          sh 'npm test'
      }
    }

    stage('Quality Gate'){
      steps{
        echo "sonarqube here"
      }
    }
    stage('Build and Push Docker'){
      steps{
        echo "Docker here"
      }
    }

    stage('Docker image scan'){
      steps{
        echo "scan here"
      }
    }
  }
}
