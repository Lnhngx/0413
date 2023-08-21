// aos initial
AOS.init({ duration: 800, easing: "ease-in-sine", delay: 50, once: !0 })

// IntersectionObserver API 的 common options
const options = {
  root: null,
  rootMargin: "0px",
  threshold: 0.5,
}

const scrollToSection = (target) => {
  $("html,body").animate({ scrollTop: $(target).offset().top }, 800)
}

// navbar
$(".nav__01").click(function () {
  scrollToSection(".s01")
})

$(".nav__02").click(function () {
  scrollToSection(".s02")
})

$(".nav__03").click(function () {
  scrollToSection(".s03")
})

$(".nav__04").click(function () {
  scrollToSection(".s04")
})

$(".nav__05").click(function () {
  scrollToSection(".s05")
})

$('.nav__06').click(function() {
  scrollToSection(".s06")
})

$(".nav__07").click(function () {
  scrollToSection(".s07")
})

$(".nav__08").click(function () {
  scrollToSection(".s08")
})

// 監聽 Modal 開關，來控制 browser scroll 是否要 disabled
const modalObserver = new MutationObserver(function (mutationsList, observer) {
  mutationsList.forEach(mutation => {
    if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
      if (mutation.target.className.includes('show')) {
        // 任一 Modal 打開時，關閉 browser scroll
        document.body.style.overflow = 'hidden'
      } else {
        document.body.style.overflow = 'visible'
      }
    }
  })
});

// 所有modal綁上觀察事件
const modals = document.querySelectorAll('.modal');
modals.forEach(modal => {
  modalObserver.observe(modal, { attributes: true })
})

// s03 New Modular Phassis animation
const collapseBtn = document.querySelector('.collapse-btn')    
let collapse = false
  
$('.collapse-btn').click(e => {
  e.preventDefault()
  // close -> open
  if (!collapse) {
    $('.collapse-btn').addClass('invisible')
    $('.box-product').addClass('fly-item')
    $('.box-bottom').removeClass('hidden-item').removeClass('invisible').addClass('display-item')

    $('.box-01').animate({
      opacity: 1,
      top: "-=280"
    }, 1500)
    $('.box-02').animate({
      opacity: 1,
      top: "-=225",
      left: "+=30"
    }, 1500)
    $('.box-03').animate({
      opacity: 1,
      top: "-=185",
      left: "-=30"
    }, 1500)
    $('.box-04').animate({
      opacity: 1,
      top: "-=75",
      left: "-=50"
    }, 1500)
    $('.box-05').animate({
      opacity: 1,
      top: "-=75",
      left: "+=30"
    }, 1500)
    $('.box-06').animate({
      opacity: 1,
      top: "-=75",
      left: "+=120"
    }, 1500)
    $('.box-07').animate({
      opacity: 1,
      top: "-=30"
    }, 1500)
    $('.box-product').animate({
      top: "-=410"
    }, 1500, () => {
      // Animation complete.
      $('.collapse-btn').removeClass('invisible')
      collapse = true
      collapseBtn.innerHTML = 'Recovery'
    })
  } else {
    // open -> close
    $('.collapse-btn').addClass('invisible')

    $('.box-01').animate({
      opacity: 0,
      top: "+=280"
    }, 1500)
    $('.box-02').animate({
      opacity: 0,
      top: "+=225",
      left: "-=30"
    }, 1500)
    $('.box-03').animate({
      opacity: 0,
      top: "+=185",
      left: "+=30"
    }, 1500)
    $('.box-04').animate({
      opacity: 0,
      top: "+=75",
      left: "+=50"
    }, 1500)
    $('.box-05').animate({
      opacity: 0,
      top: "+=75",
      left: "-=30px"
    }, 1500)
    $('.box-06').animate({
      opacity: 0,
      top: "+=75",
      left: "-=120"
    }, 1500)
    $('.box-07').animate({
      opacity: 0,
      top: "+=30"
    }, 1500)
    $('.box-product').animate({
      top: "+=410"
    }, 1500, () => {
      // Animation complete.
      $('.collapse-btn').removeClass('invisible')
      $('.box-bottom').removeClass('display-item').addClass('hidden-item').addClass('invisible')
      $('.box-product').removeClass('fly-item')
      collapse = false
      collapseBtn.innerHTML = 'Details'
    })
  }
})

// s04 tab actions
let s04TabId = 's04_tab_01'
$('.s04_tab').click(function () {
  const tabId = $(this).data('tab')

  if (s04TabId === tabId) return

  const removeTabContent = `#${s04TabId}_content`
  const activeTabContent = `#${tabId}_content`

  $(removeTabContent).removeClass('active')
  $(activeTabContent).addClass('active')

  s04TabId = tabId
})

const s04Tabs = document.querySelectorAll('.s04_tab')
const s04ActiveIndicator = document.querySelector('.s04_tab_area .active_indicator')

// 初始化 .active_indicator 的寬度和位置
const s04InitialTab = document.querySelector('.s04_tab.active')
const s04InitialRect = s04InitialTab.getBoundingClientRect()
s04ActiveIndicator.style.width = `${s04InitialRect.width}px`
s04ActiveIndicator.style.left = `0px`
s04ActiveIndicator.style.height = `${s04InitialRect.height}px`

s04Tabs.forEach((tab) => {
  tab.addEventListener('click', (e) => {
    e.preventDefault()
    // 獲取被點擊標籤的位置和寬度
    const rect = tab.getBoundingClientRect()
    const screenWidth = window.innerWidth
    const indicatorLeft = (screenWidth - s04InitialTab.parentElement.getBoundingClientRect().width)/2 + 1
    // 設定紅色區塊的寬度和位置
    s04ActiveIndicator.style.width = `${rect.width}px`
    s04ActiveIndicator.style.left = `${rect.left - indicatorLeft + window.scrollX}px`
    s04ActiveIndicator.style.height = `${rect.height}px`
  })
})

// s04 當進入viewport時，觸發progress bar動畫
const progressbarObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      // 進入viewport 觸發特效
      const percentage = parseInt(entry.target.getAttribute("data-percentage"))
      entry.target.style.width = percentage + "%"
    } else {
      // 離開viewport 把長度回歸成0
      entry.target.style.width = 0 + "%"
    }
  })
}, options)

// s04 progressbar綁上觀察事件
const progressBars = document.querySelectorAll(".progressbar")
progressBars.forEach(progressBar => {
  progressbarObserver.observe(progressBar)
})

// s05 tab actions
let s05TabId = 's05_tab_01'
$('.s05_tab').click(function () {
  const tabId = $(this).data('tab')

  if (s05TabId === tabId) return

  const removeTabContent = `#${s05TabId}_content`
  const activeTabContent = `#${tabId}_content`

  $(removeTabContent).removeClass('active')
  $(activeTabContent).addClass('active')

  s05TabId = tabId
})

const s05Tabs = document.querySelectorAll('.s05_tab')
const s05ActiveIndicator = document.querySelector('.s05_tab_area .active_indicator')

// 初始化 .active_indicator 的寬度和位置
const s05InitialTab = document.querySelector('.s05_tab.active')
const s05InitialRect = s05InitialTab.getBoundingClientRect()
s05ActiveIndicator.style.width = `${s05InitialRect.width}px`
s05ActiveIndicator.style.left = `0px`
s05ActiveIndicator.style.height = `${s05InitialRect.height}px`

s05Tabs.forEach((tab) => {
  tab.addEventListener('click', (e) => {
    e.preventDefault()
    // 獲取被點擊標籤的位置和寬度
    const rect = tab.getBoundingClientRect()
    const screenWidth = window.innerWidth
    const indicatorLeft = (screenWidth - s05InitialTab.parentElement.getBoundingClientRect().width)/2 + 1
    // 設定紅色區塊的寬度和位置
    s05ActiveIndicator.style.width = `${rect.width}px`
    s05ActiveIndicator.style.left = `${rect.left - indicatorLeft + window.scrollX}px`
    s05ActiveIndicator.style.height = `${rect.height}px`
  })
})

// s05 connectivity tab actions
let s05ConnectivityTabId = 's05_connectivity_tab_01'
$('.s05_connectivity_tab').click(function () {
  const tabId = $(this).data('tab')
  const redDotElement = $(this).find('.red_dot')

  if (s05ConnectivityTabId === tabId) return

  const removeTabContent = `#${s05ConnectivityTabId}_content`
  const activeTabContent = `#${tabId}_content`
  
  $('.s05_connectivity_tab .red_dot').removeClass('active')
  $(redDotElement).addClass('active')

  $(removeTabContent).removeClass('active')
  $(activeTabContent).addClass('active')

  s05ConnectivityTabId = tabId
})

const s05ConnectivityTabs = document.querySelectorAll('.s05_connectivity_tab')
const s05ConnectivityActiveIndicator = document.querySelector('.s05_connectivity_tab_area .active_indicator')

// 初始化 .active_indicator 的寬度和位置
const s05ConnectivityInitialTab = document.querySelector('.s05_connectivity_tab.active')
const s05ConnectivityInitialRect = s05ConnectivityInitialTab.getBoundingClientRect()
s05ConnectivityActiveIndicator.style.width = `${s05ConnectivityInitialRect.width}px`
s05ConnectivityActiveIndicator.style.left = `0px`
s05ConnectivityActiveIndicator.style.height = `${s05ConnectivityInitialRect.height}px`

s05ConnectivityTabs.forEach((tab) => {
  tab.addEventListener('click', (e) => {
    e.preventDefault()
    // 獲取被點擊標籤的位置和寬度
    const rect = tab.getBoundingClientRect()
    const screenWidth = window.innerWidth
    const indicatorLeft = (screenWidth - s05ConnectivityInitialTab.parentElement.getBoundingClientRect().width)/2 + 1
    // 設定紅色區塊的寬度和位置
    s05ConnectivityActiveIndicator.style.width = `${rect.width}px`
    s05ConnectivityActiveIndicator.style.left = `${rect.left - indicatorLeft + window.scrollX}px`
    s05ConnectivityActiveIndicator.style.height = `${rect.height}px`
  })
})

// s05 output tab actions
let s05OutputTabId = 's05_output_tab_01'
$('.s05_output_tab').click(function () {
  const tabId = $(this).data('tab')
  const redDotElement = $(this).find('.red_dot')

  if (s05OutputTabId === tabId) return
  
  const removeTabContent = `#${s05OutputTabId}_content`
  const activeTabContent = `#${tabId}_content`
  
  $('.s05_output_tab .red_dot').removeClass('active')
  $(redDotElement).addClass('active')
  $(removeTabContent).removeClass('active')
  $(activeTabContent).addClass('active')

  s05OutputTabId = tabId
})

const s05OutputTabs = document.querySelectorAll('.s05_output_tab')
const s05OutputActiveIndicator = document.querySelector('.s05_output_tab_area .active_indicator')

// 初始化 .active_indicator 的寬度和位置
const s05OutputInitialTab = document.querySelector('.s05_output_tab.active')
const s05OutputInitialRect = s05OutputInitialTab.getBoundingClientRect()
s05OutputActiveIndicator.style.width = `${s05OutputInitialRect.width}px`
s05OutputActiveIndicator.style.left = `0px`
s05OutputActiveIndicator.style.height = `${s05OutputInitialRect.height}px`

s05OutputTabs.forEach((tab) => {
  tab.addEventListener('click', (e) => {
    e.preventDefault()
    // 獲取被點擊標籤的位置和寬度
    const rect = tab.getBoundingClientRect()
    const screenWidth = window.innerWidth
    const indicatorLeft = (screenWidth - s05OutputInitialTab.parentElement.getBoundingClientRect().width)/2 + 1
    // 設定紅色區塊的寬度和位置
    s05OutputActiveIndicator.style.width = `${rect.width}px`
    s05OutputActiveIndicator.style.left = `${rect.left - indicatorLeft + window.scrollX}px`
    s05OutputActiveIndicator.style.height = `${rect.height}px`
  })
})

// s06 tab actions
let s06TabId = 's06_tab_01'
$('.s06_tab').click(function () {
  const tabId = $(this).data('tab')

  if (s06TabId === tabId) return

  const removeTabContent = `#${s06TabId}_content`
  const activeTabContent = `#${tabId}_content`

  $(removeTabContent).find('.s06_fade_up_list li').removeClass('fade-up-enter')
  $(activeTabContent).find('.s06_fade_up_list li').each((index, value) => {
    const $item = $(value)
    setTimeout(() => {
      $item.addClass('fade-up-enter')
    }, index * 200)
  })
  
  $(removeTabContent).removeClass('active')
  $(activeTabContent).addClass('active')

  s06TabId = tabId
})

const s06Tabs = document.querySelectorAll('.s06_tab')
const s06ActiveIndicator = document.querySelector('.s06_tab_area .active_indicator')

// 初始化 .active_indicator 的寬度和位置
const s06InitialTab = document.querySelector('.s06_tab.active')
const s06InitialRect = s06InitialTab.getBoundingClientRect()
s06ActiveIndicator.style.width = `${s06InitialRect.width}px`
s06ActiveIndicator.style.left = `0px`
s06ActiveIndicator.style.height = `${s06InitialRect.height}px`

s06Tabs.forEach((tab) => {
  tab.addEventListener('click', (e) => {
    e.preventDefault()
    // 獲取被點擊標籤的位置和寬度
    const rect = tab.getBoundingClientRect()
    const screenWidth = window.innerWidth
    const indicatorLeft = (screenWidth - s06InitialTab.parentElement.getBoundingClientRect().width)/2 - 2
    // 設定紅色區塊的寬度和位置
    s06ActiveIndicator.style.width = `${rect.width}px`
    s06ActiveIndicator.style.left = `${rect.left - indicatorLeft + window.scrollX}px`
    s06ActiveIndicator.style.height = `${rect.height}px`
    console.log(indicatorLeft);
  })
  
})

// 預設第一頁利用observer觀察進到viewPort就開始加上fade-up-enter
const listItems = document.querySelectorAll('.s06_content_area.active .s06_fade_up_list li')
const listObserver = new IntersectionObserver(function (entries, observer) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      // 用setTimeout依序加入fade-up-enter class
      listItems.forEach((item, index) => {
        setTimeout(() => {
          item.classList.add("fade-up-enter")
        }, index * 200)
      })
    }
  })
}, options)

const listContainer = document.querySelector(".s06_content_area")
listObserver.observe(listContainer)