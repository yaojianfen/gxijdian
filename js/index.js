window.addEventListener('load', function () {
  const navmenu = document.querySelectorAll('.navmenu') // 导航栏
  const title = document.querySelectorAll('.navmenu .ht') // 导航栏的文字内容
  const chiderNav = document.querySelectorAll('.menu-item a') // 二级导航的文字
  const pathTab = document.querySelectorAll('.pathTab') // 所有页面
  const aside = document.querySelector('.aside')

  console.log(chiderNav)
  navmenu[0].style.background = '#0055a7'

  // 写着玩的 做不到
  // for (let index = 0; index < navmenu.length; index++) {
  //   navmenu[1].addEventListener('click', function () {
  //     for (let i = 0; i < chiderNav.length; i++) {
  //       chiderNav[i].style.color = 'yellow'
  //     }
  //   })
  // }

  // 封装点击 tab栏切换后，将当前tab栏的索引对应的 的a标签 改为 黄色
  function textolor(id) {
    console.log(id)
    // 清空 颜色

    title.forEach((item, index) => {
      title[index].style.color = ''
    })
    // 添加颜色
    title[id].style.color = 'yellow'
  }

  // 仅显示首页，其余页面隐藏
  pathTab.forEach((item, index) => {
    if (index == 0) {
      return
    } else {
      pathTab[index].style.display = 'none'
    }
  })
  // console.log(navmenu[6])
  // navmenu[6].style.display = 'block'
  // tab栏切换
  for (let i = 0; i < navmenu.length; i++) {
    //给五个选项卡加上索引号
    navmenu[i].setAttribute('index', i)
    navmenu[i].onclick = function () {
      // 1)排他思想 通过类名显示背景
      for (let i = 0; i < navmenu.length; i++) {
        aside.style.height = 3850 + 'px'

        navmenu[i].style.background = ''
      }
      this.style.background = '#0055a7'
      //点击选项卡拿到对应的索引号
      var index = this.getAttribute('index')
      // 调用函数 改变当前导航的文字颜色
      textolor(index)
      //清空
      for (var i = 0; i < pathTab.length; i++) {
        pathTab[i].style.display = 'none'
      }
      //决定 显示哪一个页面
      // console.log(index)
      pathTab[index].style.display = 'block'
    }
  }

  // 封装时间函数
  function time() {
    var date = new Date()
    var nian = date.getFullYear()
    var yue = date.getMonth() + 1
    yue = yue < 10 ? '0' + yue : yue
    var ri = date.getDate()
    ri = ri < 10 ? '0' + ri : ri
    var XiaoShi = date.getHours()
    var fen = date.getMinutes()
    fen = fen < 10 ? '0' + fen : fen
    var miao = date.getSeconds()
    miao = miao < 10 ? '0' + miao : miao
    return nian + '-' + yue + '-' + ri + ' ' + XiaoShi + ':' + fen + ':' + miao
  }

  const date = document.querySelector('.date')
  date.innerText = time()
  let timer
  setInterval(() => {
    timer = time()
    console.log(timer)
    date.innerText = timer
  }, 1000)
})
