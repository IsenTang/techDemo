window.onload = function (){

    let container = document.getElementsByClassName('container')[0];
    let button = document.getElementsByClassName('run-button')[0];

    /* 初始化数组 */
    let array = [1,8,4,9,7,8,3,2];

    /* 初始化最高高度 */
    let maxHeight = 500;

    /* 初始化渲染 */
    renderPillars();

    /* 渲染柱状图 */
    function renderPillars(pre,next){

        clearContainer();
        /* 通过获取最大数值，获取平均一份的高度 */
        let perHeight = Math.floor(maxHeight/Math.max(...array));

        for(let i = 0; i < array.length ; i++){

            /* 创建元素 */
            let node=document.createElement("div");

            if( i == pre || i == next){
                node.className = 'pillar on';
            }else{
                node.className = 'pillar';
            }
            

            /* 根据数值设置高度 */
            node.style.height = perHeight * array[i] + 'px';

            /* 设置text */
            var textnode=document.createTextNode(`${array[i]}`);
	        node.appendChild(textnode);

            /* 添加元素 */
            container.appendChild(node);
        }
    }

    /* 清空 */
    function clearContainer(){

        container.innerHTML = '';
    }

    /* 点击事件 */
    button.onclick = function (){

        startSort();

    }

    /* 冒泡排序 */
    function startSort (){

        if(Array.isArray(array)){

            if(array.length < 1){
                return array;
            }

            let i = 0;
            let j = 0;

            (function loop(i,j){setTimeout(function() {  
            
                /*  重置 */
                if(j === array.length - 1 - i){
                    i++;
                    j = 0;
                }

                /* 排序主体 */
                if(array[j] <= array[j + 1]){

                    let temp = array[j];

                    array[j] = array[j + 1];

                    array[j + 1] = temp;
 
                }

                /* 清空，重新渲染 */
                renderPillars(j,j+1); 
                j++;

                /* 循环继续 */
                if (i < (array.length - 1)) {           
                    
                    loop(i,j);
                }else{

                    // 循环结束
                    renderPillars(); 
                }
                
            }, 500)})(i,j)

        }
    }
}

