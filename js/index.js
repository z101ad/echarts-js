(async function () {
  const $axios = axios.create({
    baseURL: "http://47.92.27.233:8889",
  });
  let oneData = await $axios.get("/one/data");
  let twoData = await $axios.get("/two/data");
  let threeData = await $axios.get("/three/data");
  let fourData = await $axios.get("/four/data");
  let mapData = await $axios.get("/china/data");

  let doms = {
    items: document.querySelectorAll(".content"),
    map: document.querySelector(".map"),
  };
  //设置背景颜色
  [...doms.items].forEach((node, index) => {
    if (index > 2) {
      node.parentElement.style.backgroundColor = "#0a79f6";
    } else {
      node.parentElement.style.backgroundColor = "#0a7ffc";
    }
  });
  function show(element, option) {
    let myChart = echarts.init(element);
    myChart.setOption(option);
  }
  //柱状图
  let dataX1 = oneData.data.chartData.chartData.map((item) => item.title);
  let data1 = oneData.data.chartData.chartData.map((item) => item.num);
  let option1 = {
    grid: {
      top: "3%",
      left: "1%",
      right: "6%",
      bottom: "3%",
      //开启刻度标签
      containLabel: true,
    },
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "shadow",
      },
    },
    xAxis: {
      type: "value",
      //坐标轴轴线
      axisLine: {
        lineStyle: {
          color: "#fff",
        },
      },
    },
    yAxis: {
      type: "category",
      data: dataX1,
      //坐标轴轴线
      axisLine: {
        lineStyle: {
          color: "#fff",
        },
      },
    },
    series: [
      {
        name: "销售量",
        type: "bar",
        data: data1,
        itemStyle: {
          normal: {
            //柱状图的边角
            barBorderRadius: [0, 20, 20, 0],
            //渐变色
            color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
              {
                offset: 0,
                color: "#005eaa",
              },
              {
                offset: 0.5,
                color: "#339ca8",
              },
              {
                offset: 1,
                color: "#cda819",
              },
            ]),
          },
        },
      },
    ],
  };
  show(doms.items[0], option1);
  //折线图
  let dataX2 = twoData.data.chartTwo.chartData.day;
  let data2 = Object.values(twoData.data.chartTwo.chartData.num);
  let option2 = {
    grid: {
      left: "1%",
      right: "4%",
      bottom: "3%",
      // //开启刻度标签
      containLabel: true,
    },
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "line",
      },
    },
    legend: {},
    xAxis: {
      type: "category",
      data: dataX2,
      //坐标轴轴线
      axisLine: {
        lineStyle: {
          color: "#fff",
        },
      },
    },
    yAxis: {
      type: "value",
      //坐标轴轴线
      axisLine: {
        lineStyle: {
          color: "#fff",
        },
      },
    },
    series: [
      {
        name: "服饰",
        type: "line",
        data: data2[0],
        smooth: true,
        lineStyle: {
          width: 0,
        },
        stack: "total",
        emphasis: {
          focus: "series",
        },
        areaStyle: {
          opacity: 0.8,
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0,
              color: "rgb(128, 255, 165)",
            },
            {
              offset: 1,
              color: "rgb(1, 191, 236)",
            },
          ]),
        },
      },
      {
        name: "数码",
        type: "line",
        data: data2[1],
        smooth: true,
        stack: "total",
        lineStyle: {
          width: 0,
        },
        emphasis: {
          focus: "series",
        },
        areaStyle: {
          opacity: 0.8,
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0,
              color: "rgb(0, 221, 255)",
            },
            {
              offset: 1,
              color: "rgb(77, 119, 255)",
            },
          ]),
        },
      },
      {
        name: "家电",
        type: "line",
        data: data2[2],
        smooth: true,
        stack: "total",
        lineStyle: {
          width: 0,
        },
        emphasis: {
          focus: "series",
        },
        areaStyle: {
          opacity: 0.8,
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0,
              color: "rgb(55, 162, 255)",
            },
            {
              offset: 1,
              color: "rgb(116, 21, 219)",
            },
          ]),
        },
      },
      {
        name: "家居",
        type: "line",
        data: data2[3],
        smooth: true,
        stack: "total",
        lineStyle: {
          width: 0,
        },
        emphasis: {
          focus: "series",
        },
        areaStyle: {
          opacity: 0.8,
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0,
              color: "rgb(255, 0, 135)",
            },
            {
              offset: 1,
              color: "rgb(135, 0, 157)",
            },
          ]),
        },
      },
      {
        name: "日化",
        type: "line",
        data: data2[4],
        smooth: true,
        stack: "total",
        lineStyle: {
          width: 0,
        },
        emphasis: {
          focus: "series",
        },
        areaStyle: {
          opacity: 0.8,
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0,
              color: "rgb(255, 191, 0)",
            },
            {
              offset: 1,
              color: "rgb(224, 62, 76)",
            },
          ]),
        },
      },
    ],
  };
  show(doms.items[1], option2);
  //饼状图
  let data3 = threeData.data.chartThree.chartData;
  let option3 = {
    tooltip: {
      trigger: "item",
    },
    legend: {
      top: "bottom",
    },
    series: [
      {
        type: "pie",
        data: data3,
        roseType: "area",
        radius: [10, 80],
        center: ["50%", "45%"],
        itemStyle: {
          borderRadius: 10,
        },
      },
    ],
  };
  show(doms.items[2], option3);
  //柱状图
  let dataX4 = dataX2;
  let data4 = Object.values(fourData.data.chartFour.chartData.num);
  let option4 = {
    grid: {
      top: "3%",
      left: "1%",
      right: "6%",
      bottom: "3%",
      //开启刻度标签
      containLabel: true,
    },
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "shadow",
      },
    },
    xAxis: {
      type: "category",
      data: dataX4,
      //坐标轴轴线
      axisLine: {
        lineStyle: {
          color: "#fff",
        },
      },
    },
    yAxis: {
      type: "value",
      //坐标轴轴线
      axisLine: {
        lineStyle: {
          color: "#fff",
        },
      },
    },
    series: [
      {
        name: "服饰",
        type: "bar",
        data: data4[0],
        stack: "total",
        label: {
          show: true,
        },
        emphasis: {
          focus: "series",
        },
      },
      {
        name: "数码",
        type: "bar",
        data: data4[1],
        stack: "total",
        label: {
          show: true,
        },
        emphasis: {
          focus: "series",
        },
      },
      {
        name: "家电",
        type: "bar",
        data: data4[2],
        stack: "total",
        label: {
          show: true,
        },
        emphasis: {
          focus: "series",
        },
      },
      {
        name: "家居",
        type: "bar",
        data: data4[3],
        stack: "total",
        label: {
          show: true,
        },
        emphasis: {
          focus: "series",
        },
      },
      {
        name: "日化",
        type: "bar",
        data: data4[4],
        stack: "total",
        label: {
          show: true,
        },
        emphasis: {
          focus: "series",
        },
      },
    ],
  };
  show(doms.items[3], option4);
  //地图
  let data5 = mapData.data.chinaData;
  echarts.registerMap("china", data5);
  let option5 = {
    grid: {
      top: "3%",
      left: "1%",
      right: "6%",
      bottom: "3%",
      //开启刻度标签
      containLabel: true,
    },
    title: {
      text: "城市销量",
      left: "43%",
      textStyle: {
        color: "white",
        fontSize: 20,
      },
    },
    tooltip: {
      trigger: "item",
      axisPointer: {
        type: "shadow",
      },
    },
    //视觉映射组件
    visualMap: {
      type: "continuous", //连续型：continuous  piecewise：分段型
      min: 100,
      max: 5000,
      //显示拖拽用的手柄
      calculable: true,
      //定义 在选中范围中 的视觉元素
      inRange: {
        //范围颜色
        color: ["#50a3ba", "#eac736", "#d94e5d"],
      },
      textStyle: {
        color: "#fff",
      },
    },
    geo: {
      type: "map",
      map: "china",
      itemStyle: {
        //地图颜色
        areaColor: "#0099ff",
        borderColor: "#00ffff",
        shadowColor: "rgba(230,130,70,0.5)",
        shadowBlur: 30,
        emphasis: {
          //只聚焦不淡出
          focus: "self",
        },
      },
    },
    series: [
        {
          type: "scatter",
          itemStyle: {
            color: "red",
          },
          //坐标切换为经纬度显示
          coordinateSystem:"geo",
          //value：[经度，纬度，数据]
          data: [
            { name: "北京", value: [116.46, 39.92, 4367] },
            { name: "上海", value: [121.48, 31.22, 8675] },
            { name: "深圳", value: [114.07, 22.62, 2461] },
            { name: "广州", value: [113.23, 23.16, 187] },
            { name: "西安", value: [108.45, 34, 3421] },
          ],
        },
      ],
  };
  show(doms.map, option5);
})();
