pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                // Clone the repository
                git branch: 'main', url: 'https://github.com/ratheeshvh/devops-final-project.git'
            }
        }

        stage('Build') {
            steps {
                // Run the build.sh script
                sh './build.sh'
            }
        }

        stage('Docker Build & Push') {
            steps {
                script {
                    def imageName = 'ratheesh510vh/testops'

                    // Build Docker image
                    sh "docker build -t ${imageName} ."

                    // Push Docker image to repository
                    withDockerRegistry([credentialsId: 'docker-hub-creds', url: 'https://index.docker.io/v1/']) {
                        sh "docker push ${imageName}"
                    }
                }
            }
        }

        stage('Deploy') {
            steps {
                // Run the deploy.sh script
                sh './deploy.sh'
            }
        }
    }
}
