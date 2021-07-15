pipeline {
    agent any
    stages {
        stage('Build') {
            steps {
                echo 'Hello world'
                container ('maven') {
                    sh 'mvn --version'
                }
            }
        }
    }
}
