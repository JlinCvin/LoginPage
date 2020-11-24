<template>
  <div>
    <el-form :model="loginForm" ref="loginForm" :rules="loginRules">         
            <h2>登录</h2>
            <el-form-item prop="username">
                <el-input v-model="loginForm.username" name="username" placeholder="请输入用户名/手机号" auto-complete="on"></el-input>
            </el-form-item>

            <el-form-item prop="password">
                <el-input  v-model="loginForm.password"  name="password" placeholder="请输入密码" auto-complete="on"></el-input>
            </el-form-item>

            <el-form-item>
                <el-button type="primary" @click="handleLogin()">登录</el-button>
            </el-form-item>
        </el-form>
  </div>
</template>
 
 
 
<script>
//  import { userLogin } from '../../api/api';
 import { loginReq } from '@/apis/login'
import axios from "axios";
  export default {
    data() {
      return {
        loginForm: {
          username: '',
          password: '',
        },
        loginRules: {
        username: [
            {
                required: true,

                message: "请输入3-20个非空白字符 测试：16624747010",

                trigger: "blur"
            }
        ],
        password: [
           {
               required: true,
               message: '请输入密码 测试：123456',
               trigger: 'blur'
           }
        ]
         }
      }
    },
    created () {

    },
    computed: {

    },
    methods: {
       handleLogin (){
    
           this.$refs.loginForm.validate((valid) => {
               if(valid){
                  loginReq(this.loginForm.username,this.loginForm.password).then((res) => {
                      if(res.data.loginName == this.loginForm.username && res.data.loginPassword == this.loginForm.password){
                        this.$message.error('登录成功正在跳转')
                        setTimeout( () =>{
                          this.$router.push({
                              name: "HelloWorld",
                              params: {
                              username: this.loginForm.username
                            }
                          })
                        },1000)
                        
                      }else{this.$message.error('用户名密码错误')}
                  })
                    
                  
               }else{
                   this.$message.error('请输入用户名密码');
               }
           })
      }
    }
  }
</script>
<style>


</style>