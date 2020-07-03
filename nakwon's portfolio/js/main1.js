//자동 호출 함수 (전역 변수를 피하기위해서)
(() => {

    //정보를 담고 있는 배열 생성 sceneInfo
    const sceneInfo = [{
            //0
            type: 'sticky',
            heightNum: 5, // 브라우저 높이의 5배로 scrollHeight 세팅
            scrollHeight: 0, //scroll높이
            objs: {
                container: document.querySelector('#scroll__section__0')
            }
        },
        {
            //1
            type: 'normal',
            heightNum: 5, // 브라우저 높이의 5배로 scrollHeight 세팅
            scrollHeight: 0, //scroll높이
            objs: {
                container: document.querySelector('#scroll__section__1')
            }
        },
        {
            //2
            type: 'sticky',
            heightNum: 5, // 브라우저 높이의 5배로 scrollHeight 세팅
            scrollHeight: 0, //scroll높이
            objs: {
                container: document.querySelector('#scroll__section__2')
            }
        },
        {
            //3
            type: 'sticky',
            heightNum: 5, // 브라우저 높이의 5배로 scrollHeight 세팅
            scrollHeight: 0, //scroll높이
            objs: {
                container: document.querySelector('#scroll__section__3')
            }
        },
    ];

    //각 스크롤 섹션의 높이 세팅하는 함수 setLayout 생성
    function setLayout() {
        for (let i = 0; i < sceneInfo.length; i++) {
            sceneInfo[i].scrollHeight = sceneInfo[i].heightNum * window.innerHeight;
            sceneInfo[i].objs.container.style.height = `${sceneInfo[i].scrollHeight}px`;
        }
        console.log(sceneInfo);
    }

    //브라우저 크기가 바뀌어도 setLayout이 적용되도록 window객체에 이벤트 등록
    window.addEventListener('resize', setLayout);
    setLayout();


})();

// !-- 자동 호출 함수 