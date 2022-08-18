pipeline {

  agent any

  stages {

    stage('Checkout Source') {
      steps {
          checkout scm
          //git status
      }
    }
    stage('Install dependencies') {
            steps {
                echo "Installing NPM LightHouse."
                sh '''
                    sudo npm i -g lighthouse
                   '''
                echo "Generate json file."
                sh '''
                    lighthouse https://google.com --output=json --quiet --chrome-flags=--headless
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