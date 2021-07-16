pipeline {
    agent any
    stages {
        stage('Build') {
            agent { docker { image 'node:14' } }
            steps {
                sh 'npm i -g node-gyp'
                sh 'npm install'
            }
        }
    }
}
