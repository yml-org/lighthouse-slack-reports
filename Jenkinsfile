pipeline {

  agent any
  tools {
      nodejs '17.6.0'
  }

  stages {

    stage('Checkout Source') {
      steps {
          checkout scm
          //git status
      }
    }
    stage('Install dependencies') {
            steps {
                echo "NPM Version checks."
                sh '''
                    npm version
                   '''
                echo "Setting up lighthouse."   
                sh '''
                    npm i -g lighthouse
                   '''
                echo "Generate json file."
                sh '''
                    lighthouse https://google.com --output=json --quiet --chrome-flags=--headless
                   '''
                echo "Typescript Install."
                sh '''
                    npm install typescript
                   '''      
                echo "Run and Publish Report to Slack."
                sh '''
                    npm run report
                   '''   
                // Install any dependencies for the project   
            }
        }
    
    }
  post {
        always {
            echo 'post build'
        }
    }

}