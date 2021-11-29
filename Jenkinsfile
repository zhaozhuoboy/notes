pipeline {
       agent any
  
       stages {
           stage('build') {
               steps {
                   sh 'npm install'
                   sh 'npm run build'
               }
           }
 
          stage('deploy-test'){
              steps {
                  echo '部署文件到服务器'
              }
          }
 
          stage('notice'){
              steps {
                  echo '创建成功通知'
              }
          }
      }
  }
