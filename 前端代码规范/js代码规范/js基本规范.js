// js基本规范.js


避免全局变量：

;(function(){
	// your code
})();

变量命名：

1. 基本变量驼峰式，如 thisIsMyName；
2. 常量使用大写，如 URL，MAX_COUNT，ID；
3. 尽量使用单引号，如 var str = 'string'；

尝试使用 严格等于 === 替代 自动转换类型的等于 ==


代码注释：

1. 多行代码块注释，三行；
/**
 * 注释
 */
用于注释：函数，逻辑复杂的代码，业务复杂的代码，可能存在错误的代码，浏览器hack代码。
2. 单行注释，一般的说明；
3. 文档注释，参看jsDoc；


模块化思想编程：
1. 抽象为模块，轻业务；


文件引用：
1. 省略文档类型声明；
