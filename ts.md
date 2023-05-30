interface User{
  name:String,
  age:Number
}
obj:{
  // 指定props对象的参数
  type: Object as PropType<User>，
  default:()=>{}
}