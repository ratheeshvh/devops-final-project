pipeline {
    agent any

    environment {
        IMAGE_NAME = 'ratheesh510vh/testops' // Base image name
        DOCKER_CREDENTIALS_ID = 'docker-hub-creds' // Docker Hub credentials ID
    }

    stages {
        stage('Checkout') {
            steps {
                echo 'Checking out the repository...'
                git branch: 'main', url: 'https://github.com/ratheeshvh/devops-final-project.git'
            }
        }

        stage('Build') {
            steps {
                echo 'Running build script...'
                sh 'chmod +x build.sh' // Ensure the script is executable
                sh './build.sh'
            }
        }

        stage('Docker Build & Push') {
            steps {
                script {
                    def dockerTag = "${IMAGE_NAME}:${env.BUILD_NUMBER}" // Use Jenkins build number as tag
                    echo "Building Docker image: ${dockerTag}"

                    // Build Docker image
                    sh "docker build -t ${dockerTag} ."

                    echo "Pushing Docker image: ${dockerTag}"
                    // Push Docker image to Docker Hub
                    withDockerRegistry([credentialsId: DOCKER_CREDENTIALS_ID, url: 'https://index.docker.io/v1/']) {
                        sh "docker push ${dockerTag}"
                    }
                }
            }
        }

        stage('Deploy') {
            steps {
                echo 'Running deployment script...'
                sh 'chmod +x deploy.sh' // Ensure the script is executable
                sh './deploy.sh'
            }
        }
    }

    post {
        success {
            echo 'Pipeline executed successfully!'
        }
        failure {
            echo 'Pipeline failed. Check the logs for more details.'
        }
    }
}
