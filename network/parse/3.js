let response = `
<html>
<head></head>
<body>
  <div></div>
</body>
</html>
`
// 解析成 DOM 树
// 分词(词法分析)(FSM) -> 语法分析(LL,LR) -> AST(抽象语法树)(DOM树)
// 我 今天 很 高兴
// var
// 拿出标签名（开始 结束）
let currentToken = null;
let stack = [
    {
        type:'document',children:[]
    } 
]
function emitToken(token) {
    token = {
        ...token,
        children:[],
        nodeType:'element'
    }
        if(token.type === 'startTag'){
            stack.push(token);
            top.children.push(token)
        }else {
            if (top.tagName === token.tagName){
                stack.pop();
            }
        }
}


function data(c) {

  if (c === '<') {
    return tagOpen
  }
  return data;
}
function tagOpen(c) {
  if (c === '/') {
    currentToken = {
      type: 'endTag',
      tagName: ''
    }
    return tagName;
  } else {
    currentToken = {
      type: 'startTag',
      tagName: c
    }
    return tagName;
  }
  
}
// <  tagOpen  tagName >
function tagName(c) {
  if (c.match(/[a-z]/)) {
    currentToken.tagName += c;
    return tagName;
  } else if (c === '>') {
    console.log(currentToken);
    return data;
  }
  // else if (c === '/')
}
function parseDom(html) {
  let state = data;
  for (let c of html) {
    state = state(c);
  }
}
parseDom(response);

function replacer(key, value) {
    if (typeof value === "string") {
      return undefined;
    }
    return value;
  }
  
  var foo = {foundation: "Mozilla", model: "box", week: 45, transport: "car", month: 7};
  var jsonString = JSON.stringify(foo, replacer);
  
