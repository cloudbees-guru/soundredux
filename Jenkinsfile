pipeline {
    agent any
    stages {
        stage('Build') {
            agent { docker { image 'maven:3.8.1-jdk-11' } }
            steps {
                echo 'Hello world'
                sh 'mvn --version'
            }
        }
    }
}
