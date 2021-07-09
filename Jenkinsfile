pipeline {
    agent any
    stages {
        stage('Build') {
            steps {
                sh 'npm i -g node-gyp'
                sh 'npm install'
            }
        }
    }
}
