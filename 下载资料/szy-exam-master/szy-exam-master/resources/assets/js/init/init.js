import Vue from 'vue'


// 注册自定义验证规则
import { Validator } from 'vee-validate';
import validates from '../utils/validate.js';
Object.keys(validates).forEach(k => Validator.extend(k, validates[k]()));