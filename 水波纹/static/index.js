const container = document.getElementsByClassName('water-wave'); // 取父级

const number = 4; // 自定义产生几个水波纹

let index = 0; // 定义每次点击产生的波纹的层级

const containerWidth = document.body.clientHeight > document.body.clientWidth
    ? document.body.clientWidth * 0.8 / 2 : document.body.clientHeight * 0.8 / 2;
// 取包裹波纹的正方形的半个宽 这是为了计算点击时正方形的位置


container[0].addEventListener('click', (e) => {
    // 传入事件， 父级，  波纹数， 层级
    addWave(e, container[0], number, index++)
}, false);   // 注册点击事件

// 点击触发
function addWave(e, parentNode, number, index) {

    // 渲染完波纹后插入父级， 传入波纹数， 点击的坐标x, y ，层级
    parentNode.appendChild(renderWave(number, e.pageX, e.pageY, index));
    
    //  移除每次点击产生的波纹，
    //  index是用来识别每次点击的波纹相当于唯一的ID
    removeWave(parentNode, index);
}

// 渲染波纹的函数
function renderWave(number, x, y, z) {
    let childrenNode = '';
    // 创建一个父级div元素用来包裹波纹
    let childrenContainer = document.createElement('div');
    // 添加一个class用来标记，方便删除
    childrenContainer.classList.add(`remove${z}`);
    // 循环产生波纹
    for (let i = 0; i < number; i++) {
        childrenNode += `<div class='wave wave${i + 1}'></div>`
    }
    // 波纹放进div里
    childrenContainer.innerHTML =
        `<div class='wave-container' style='left:${x - containerWidth}px;top:${y - containerWidth}px;z-index:${z}'>
            <div class="center">
                ${childrenNode}
            </div>
         </div>`;
    // 返回这个div
    return childrenContainer;
}

function removeWave(parentNode, index) {
    // 延迟3秒删除波纹
    setTimeout(() => {
        const node = document.getElementsByClassName(`remove${index}`)[0];
        parentNode.removeChild(node);
    }, 3000);
}