pipeline {
  agent any
  environment {
    CI = 'true'
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
        sh 'sudo apt-get update && sudo apt-get install -y libltdl7 && sudo rm -rf /var/lib/apt/lists/*'
        sh 'docker build -t simple-react:0.0.1'
      }
    }

    stage('Docker image scan'){
      steps{
        echo "scan here"
      }
    }
  }
}
