let text = '{"emp":[' +
'{"firstName":"hayan","lastName":"choi"}]}'

const obj = JSON.parse(text);
// json을 js형식에 맞게 파싱 parse 파싱
document.getElementById("json").innerHTML = 
obj.emp[0].firstName + " " + obj.emp[0].lastName;