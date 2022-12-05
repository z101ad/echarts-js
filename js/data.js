let data = (async function(){
    const $axios = axios.create({
        baseURL:"http://47.92.27.233:8889"
    })
    let oneData = await $axios.get("/one/data")
    let twoData = await $axios.get("/two/data")
    let threeData = await $axios.get("/three/data")
    let fourData = await $axios.get("/four/data")
    let mapData = await $axios.get("/china/data")
    
    return {oneData,twoData,threeData,fourData,mapData}
})()
