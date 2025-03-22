pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                // Clone the repository
                git branch: 'main', url: 'https://github.com/your-repo/your-project.git'
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
                    def imageName = 'your-docker-repo/your-app:latest'

                    // Build Docker image
                    sh "docker build -t ${imageName} ."

                    // Push Docker image to repository
                    withDockerRegistry([credentialsId: 'docker-credentials-id', url: 'https://index.docker.io/v1/']) {
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
