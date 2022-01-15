
document.querySelector('.mines').innerText=(document.location.search.split('?size=')[1]*document.location.search.split('?size=')[1]/6.4).toFixed(0);


//-------------------------------------------------------------------------------------------------------------------------------------------------




size=Number(document.location.search.split('?size=')[1]);

//-----------------------------------------------------------------------------------------------------------------------------------------------------

isfirst=true





code = '';
onresize = function() {
	if (innerWidth>innerHeight) document.querySelector('.container').style = 'width:'+innerHeight+'px;height:'+innerHeight+'px;top:50%;left:50%;transform:translate(-50%,-50%)';
	else document.querySelector('.container').style = 'width:'+innerWidth+'px;height:'+innerWidth+'px;top:50%;left:50%;transform:translate(-50%,-50%);';
	if (innerWidth < 1200 || innerHeight < 900) {
    	window.resizeTo(500,500);
	}
}

onresize();


for(i = 0; i < size; i++){
	code += '<tr id="'+i+'">';
	for(j = 0; j < size; j++){
		code += '<td data-y="'+i+'" data-x="'+j+'"><p></p></td>';
	};
	code += '</tr>';
};

document.querySelector('table').innerHTML = code;

for (var i = 0; i < document.querySelectorAll('td').length; i++) {
	document.querySelectorAll('td')[i].style = 'width: '+(100/(size)-6)-((100/(size)-6).toFixed())+'%;height: '+(100/(size)-6)-((100/(size)-6).toFixed())+'%;';
}
//-------------------------------------------------------------------------------------------------------------------------------------

function openValue(x,y) {
	if(isfirst){
		map=[];
		get(x,y,(res)=>{
			pg=res;
			console.log(res);
			map=res.split('\n');
			if (map[0].length==0) {
				for (var i = 0; i < map.length-1; i++) {
					map[i]=res.split('\n')[i+1];
				}
			}
			isfirst=false;
			if(map[y][x]!=' '){
				for (var i = 0; i < map.length; i++) {
					for (var j = 0; j < map[i].length; j++) {
						if (map[i][j]==' ') {
							openValue(j,i);
							return;
						}
					}
				}
			} else {
				openValue(x,y);
			}
		});
	}
	if(map.length==0){
		document.querySelector('tbody').children[y].children[x].id='';
		return '';
	}
	console.log(map);
	if(map[y][x]!=' '){
		if (map[y][x]==='x') {
			// NOTE: fail
			document.querySelector('.container').style.filter='blur(10px)';
			document.querySelector('.lose').style.opacity=1;
			document.querySelector('.lose').style.display='block';
			document.querySelector('.close').onclick=()=>{
				document.querySelector('.container').style.filter='blur(0)';
				document.querySelector('.lose').style.opacity=0;
				document.querySelector('.lose').style.display='none';
				document.querySelector('tbody').children[y].children[x].id=''
			}
			newg=()=>{location.href=location.href};
			replay=()=>{
				document.querySelector('.container').style.filter='blur(0)';
				document.querySelector('.lose').style.opacity=0;
				document.querySelector('.lose').style.display='none';
				for (var i = 0; i < document.querySelectorAll('td').length; i++) {
					document.querySelectorAll('td')[i].id='';
					document.querySelectorAll('td')[i].innerHTML='<p></p>';
				}
			};
			return '';
		} else {
			return map[y][x];
		}
	} else {
		// NOTE: Здесь функция рекурсивного открытия
		for (j=0;j<Math.pow(size,2);j++) {
			i=document.querySelectorAll('td')[j];
			if (map[i.dataset.y][i.dataset.x]==' ') {
				i.id='checked';
				i.children[0].innerHTML=' ';

			}
			if(map[i.dataset.y][i.dataset.x]>0)
			{
				var y=Number(i.dataset.y),
				x=Number(i.dataset.x);
				if(y==0 && x!=0 && x!=size-1) {
					// NOTE: top
					if(
					map[x+1][y]==' ' ||
					map[x+1][y+1]==' ' ||
					map[x-1][y+1]==' ' ||
					map[x-1][y]==' '){
						i.id='checked';
						i.children[0].innerText=map[y][x];
					}
				}
				if(x==size-1 && y!=0 && y!=size-1) {
					// NOTE: right
					if(
					map[x-1][y-1]==' ' ||
					map[x][y-1]==' ' ||
					map[x][y-1]==' ' ||
					map[x-1][y+1]==' ' ||
					map[x-1][y]==' '){
						i.id='checked';
						i.children[0].innerText=map[y][x];
					}
				}
				if(y==size-1 && x!=0 && x!=size-1) {
					// NOTE: bottom
					if(
					map[x+1][y]==' ' ||
					map[x+1][y+1]==' ' ||
					map[x-1][y+1]==' ' ||
					map[x-1][y]==' '){
						i.id='checked';
						i.children[0].innerText=map[y][x];
					}
				}
				if(x==0 && y!=0 && y!=size-1) {
					// NOTE: left
					if(
					map[x][y-1]==' ' ||
					map[x+1][y]==' ' ||
					map[x+1][y+1]==' ' ||
					map[x][y+1]==' '){
						i.id='checked';
						i.children[0].innerText=map[y][x];
					}
				}
				if(y==0 && x==0) {
					// NOTE: top left
					if(
					map[x+1][y]==' ' ||
					map[x+1][y+1]==' '
				){
						i.id='checked';
						i.children[0].innerText=map[y][x];
					}
				}
				if(y==0 && x==size-1) {
					// NOTE: top right
					if(
					map[x-1][y+1]==' '
				){
						i.id='checked';
						i.children[0].innerText=map[y][x];
					}
				}
				if(y==size-1 && x==size-1) {
					// NOTE: bottom right
					if(
					map[x-1][y-1]==' ' ||
					map[x][y-1]==' ' ||
					map[x-1][y]==' '
				){
						i.id='checked';
						i.children[0].innerText=map[y][x];
					}
				}
				if(y==size-1 && x==0) {
					// NOTE: bottom left
					document.querySelector('tbody').children[y].children[x].children[0].innerText='a8';
				}
				if(x!=0 && x!=size-1 && y!=0 && y!=size-1) {
					// NOTE: inside
					if(
					map[x-1][y-1]==' ' ||
					map[x][y-1]==' ' ||
					map[x+1][y]==' ' ||
					map[x+1][y+1]==' ' ||
					map[x][y-1]==' ' ||
					map[x-1][y+1]==' ' ||
					map[x-1][y]==' '
				){
						i.id='checked';
						i.children[0].innerText=map[y][x];
					}
				}
			}
		}

		return ' ';
	}
}

//-------------------------------------------------------------------------------------------------------------------------------------

 function win() {
	document.querySelector('.container').style.filter='blur(10px)';
 	document.querySelector('.lose').style.opacity=1;
 	document.querySelector('.lose').style.display='block';
 	newg=()=>{location.href=location.href};
	document.querySelector('.head').innerHTML='Выигрыш!';
	document.querySelector('.lose').children[2].style.display='none';
	document.querySelector('.lose').style.height='115px';
}

for (var i = 0; i < document.querySelectorAll('td').length; i++) {
	document.querySelectorAll('td')[i].onclick=function() {
		if (this.id=='mine') {
			return;
		}
		this.id='checked';
		this.children[0].innerHTML=openValue(this.dataset.x,this.dataset.y);
	}
	document.querySelectorAll('td')[i].oncontextmenu=(a)=>{
		a=a.toElement;
		switch (a.id) {
			case 'checked':
				return false;
				break;
			case '':
				a.id='mine';
				mns=(size*size/6.4).toFixed(0);
				for (var i = 0; i < document.querySelectorAll('td').length; i++) {
					document.querySelectorAll('td')[i].id=='mine' && mns--;
				}
				if (mns==0) {
					// NOTE: maybe win
					iswin=true;
					for (var i = 0; i < document.querySelectorAll('#mine').length; i++) {
						if(map[document.querySelectorAll('#mine')[i].dataset.y][document.querySelectorAll('#mine')[i].dataset.x]!='x') {
							iswin=false;
							break
						}
						if(iswin) {
							win()
						}
					}
				}
				document.querySelector('.mines').innerText=mns;
				delete mns;
				return false;
				break;
			case 'mine':
				a.id='';
				mns=size;
				for (var i = 0; i < document.querySelectorAll('td').length; i++) {
					document.querySelectorAll('td')[i].id=='mine' && mns--;
				}
				document.querySelector('.mines').innerText=mns;
				if (mns==0) {
					// NOTE: maybe win
					iswin=true;
					for (var i = 0; i < document.querySelectorAll('#mine').length; i++) {
						if(map[document.querySelectorAll('#mine')[i].dataset.y][document.querySelectorAll('#mine')[i].dataset.x]!='x') {
							iswin=false;
							break;
						}
						if(iswin) {
							win()
						}
					}
				delete mns;
				break;
		}
		return false;
	};
}}

document.querySelector('.time').innerHTML = 0;
setInterval(function() {
	document.querySelector('.time').innerHTML = Number(document.querySelector('.time').innerHTML) + 1;
},1000);


var callb,
	x,
	y,
	pg;

function get(x1,y1,callback) {
	if (!pg) {
		eel.pyf(x1,y1);
		callb = callback;
		x = x1;
		y = y1;
	} else {
		front(pg);
	}
}


i=0;
function front(g) {
	if (g[y][x]!=' ') {
		g=(g.split('').reverse().join(''));
		callb(g);
		pg=g;
		return;
	}
	callb(g);
}



eel.expose(front);
