<template>
    <div>
        <h2>我是Profile组件</h2>
        <h2>{{$router.query.name}}</h2>
        <h2>{{$router.query.age}}</h2>
        <!-- 这里之所以是.query是因为url协议就是这样命名的是为了规范 所以之前在user里用params也是 -->
    </div>
</template>

<script>
export default {

}
</script>
<style>

</style>