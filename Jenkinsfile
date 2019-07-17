pipeline {
  agent any
  environment {
    CI = 'true'
  }
  tools{
    nodejs 'nodejs'
  }
  environment{
    DOCKER_CREDS = credentials('dockerhub-creds')
  }
  stages {
    stage('Install dependencies') {
      steps {
          sh 'yarn install'
      }
    }
    stage('Test') {
      steps {
          sh 'yarn test'
      }
    }

    stage('Quality Gate'){
      steps{
        sh 'yarn sonar'
      }
    }
    stage('Build and Push Docker'){
      steps{
        sh 'docker build -t simple-react:0.0.1 .'
        sh 'docker login -u $DOCKER_CREDS_USR -p $DOCKER_CREDS_PSW'
        sh 'docker push simple-react:0.0.1'
      }
    }

    stage('Docker image scan'){
      steps{
        aquaMicroScanner imageName: 'simple-react:0.0.1 .', notCompilesCmd: 'exit 1', onDisallowed: 'fail'
      }
    }
  }
}
