pipeline {
    
    agent any
    stages {
        stage('Build') {
            steps {
                withNPM(npmrcConfig: 'npmrc') {
                    sh 'npm i -g node-gyp'
                    sh 'npm install'
                }
            }
        }
        stage ('SonarQube') {
            steps {
                withSonarQubeEnv('SonarQube CloudBees Guru') {
                    sh "/opt/sonar-scanner/bin/sonar-scanner -Dsonar.projectKey=soundredux"
                }
            }
        }
        stage ('Publish to Nexus') {
            steps {
                sh 'npm publish --registry=https://nexus.cloudbees.guru:8081/repository/npm-local/'
            }
        }
    }
}
