pipeline {
  agent any
  environment {
    CI = 'true'
    DOCKER_CREDS = credentials('dockerhub-creds')
  }
  tools{
    nodejs 'nodejs'
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
        sh 'docker build -t rjkernick/simple-react:0.0.1 .'
        sh 'docker login -u $DOCKER_CREDS_USR -p $DOCKER_CREDS_PSW'
        sh 'docker push rjkernick/simple-react:0.0.1'
      }
    }

    stage('Image scan sanity test'){
      steps{
        sh "docker pull alpine:latest"
        aquaMicroscanner imageName: 'alpine:latest', notCompliesCmd: '', onDisallowed: 'ignore', outputFormat: 'html'
      }
    }

    stage('Docker image scan'){
      steps{
        aquaMicroscanner imageName: 'rjkernick/simple-react:0.0.1 .', notCompliesCmd: 'exit 1', onDisallowed: 'fail', outputFormat: 'html'
      }
    }
  }
}
