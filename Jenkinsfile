pipeline {
  agent any

  tools{
    nodejs 'nodejs'
  }
  stages {
    stage('Build') {
      steps {
          sh 'npm install'
      }
    }
    stage('Test') {
      steps {
          // sh 'npm test'
          echo "tests here"
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
